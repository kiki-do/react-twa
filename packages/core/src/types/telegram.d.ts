declare global {
  interface Window {
    Telegram?: {
      WebApp: TelegramWebApp;
    };
  }
}

export interface TelegramWebApp {
  initData: InitData;
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
  ready: () => void;
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
  query_id?: string;
  hash: string;
  auth_date: number;
}

export interface InitData {
  raw: string;
  unsafe: {
    user?: TelegramUser;
    queryId?: string;
    hash: string;
    authDate: Date;
  };
}

export interface TelegramUser {
  id: number;
  is_bot: Boolean;
  first_name: string;
  last_name: string;
  username: string;
  language_code: string;
  is_premium: boolean;
  added_to_attachment_menu: boolean;
  allows_write_to_pm: boolean;
  photo_url: string;
}

export interface WebAppInitResult {
  webApp?: TelegramWebApp;
  user?: TelegramUser;
  initData?: string;
  initDataUnsafe?: TelegramWebApp['initDataUnsafe'];
}
