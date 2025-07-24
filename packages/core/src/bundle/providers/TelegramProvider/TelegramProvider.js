import { useEffect, useState } from 'react';
import { jsx as _jsx } from 'react/jsx-runtime';

import { TelegramContext } from './TelegramContext';

import { devLog } from '@/helpers';
export const TelegramProvider = ({ children }) => {
  const [initData, setInitData] = useState();
  const [webApp, setWebApp] = useState();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    if (window.Telegram?.WebApp) {
      initWebApp(window.Telegram.WebApp);
      return;
    }
    const script = document.createElement('script');
    script.src = 'https://telegram.org/js/telegram-web-app.js?58';
    script.async = true;
    script.onload = () => {
      if (window.Telegram?.WebApp) {
        initWebApp(window.Telegram.WebApp);
      } else {
        devLog.warn(
          'Telegram WebApp SDK loaded but window.Telegram.WebApp not found'
        );
        setIsLoading(false);
      }
    };
    script.onerror = () => {
      devLog.error('Failed to load Telegram WebApp SDK');
      setIsLoading(false);
    };
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  const initWebApp = telegram => {
    setWebApp(telegram);
    telegram.ready();
    if (!telegram.initData || !telegram.initDataUnsafe) {
      devLog.warn('Telegram initData not available');
      setIsLoading(false);
      return;
    }
    const initDataPayload = {
      raw: telegram.initData.raw,
      unsafe: {
        authDate: new Date(telegram.initDataUnsafe.auth_date * 1000),
        hash: telegram.initDataUnsafe.hash,
        queryId: telegram.initDataUnsafe.query_id,
        user: telegram.initDataUnsafe.user,
      },
    };
    setInitData(initDataPayload);
    setIsLoading(false);
  };
  if (isLoading) {
    return null;
  }
  return _jsx(TelegramContext.Provider, {
    children: children,
    value: { initData, webApp },
  });
};
