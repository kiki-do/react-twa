declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

export interface TelegramWebApp {
  initData?: string;
  initDataUnsafe?: TelegramInitDataUnsafe;
  themeParams?: {
    bg_color?: string;
    text_color?: string;
    hint_color?: string;
    link_color?: string;
    button_color?: string;
    button_text_color?: string;
  };
  isExpanded?: boolean;
  viewportHeight?: number;
  ready?: () => void;
  expand?: () => void;
  close?: () => void;
  onEvent?: (eventType: string, eventHandler: () => void) => void;
  offEvent?: (eventType: string, eventHandler: () => void) => void;
  // Добавьте другие необходимые методы TWA
}
export interface TelegramInitDataUnsafe {
  /**
   * @TODO Write all types
   */
  user?: TelegramUser;
  chat?: unknown;
}

export interface TelegramUser {
  /**
   * @TODO Write all types
   */
  id: number;
}

export interface WebAppInitResult {
  webApp?: TelegramWebApp;
  user?: TelegramUser;
  initData?: string;
  initDataUnsafe?: TelegramWebApp["initDataUnsafe"];
}
