import { createContext } from 'react';

import type { TelegramWebApp } from '@/types';

interface TelegramContextType {
  initData?: TelegramWebApp['initData'];
  webApp?: TelegramWebApp;
}

export const TelegramContext = createContext<TelegramContextType>({});
