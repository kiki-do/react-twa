import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'react-twa',
  description: '📨 The Ultimate React Toolkit for Telegram Web Apps',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/introduction' },
      { text: 'GitHub', link: 'https://github.com/kiki-do/react-twa' },
    ],

    sidebar: [
      {
        text: 'Getting Started',
        items: [
          { text: 'Introduction', link: '/introduction' },
          { text: 'Installation', link: '/installation' },
        ],
      },
      {
        text: 'Hooks',
        items: [{ text: 'useInitData', link: '/hooks/use-init-data' }],
      },
      {
        text: 'Providers',
        items: [
          { text: 'TelegramProvider', link: '/providers/telegram-provider' },
        ],
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/kiki-do/react-twa' },
    ],
  },
});
