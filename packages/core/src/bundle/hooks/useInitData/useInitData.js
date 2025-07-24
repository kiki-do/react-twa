import { useContext } from 'react';

import { devLog } from '@/helpers';
import { TelegramContext } from '@/providers';
export const useInitData = () => {
  const context = useContext(TelegramContext);
  if (!context.webApp) {
    devLog.warn(
      'Telegram WebApp context not found. Make sure you use TelegramProvider'
    );
  }
  return context.initData;
};
