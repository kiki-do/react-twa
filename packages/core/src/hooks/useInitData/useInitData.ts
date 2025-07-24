import { useContext } from 'react';

import type { InitData } from '@/types';

import { devLog } from '@/helpers';
import { TelegramContext } from '@/providers';

export const useInitData = (): InitData | undefined => {
  const context = useContext(TelegramContext);

  if (!context.webApp) {
    devLog.warn(
      'Telegram WebApp context not found. Make sure you use TelegramProvider'
    );
  }
  return context.initData;
};
