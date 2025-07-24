import { defineConfig } from 'vitepress';

export default defineConfig({
  title: 'React-TWA',
  description: '📨 The Ultimate React Toolkit for Telegram Web Apps',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Getting Started', link: '/getting-started' },
      { text: 'GitHub', link: 'https://github.com/kiki-do/react-twa' },
    ],

    sidebar: [
      {
        text: 'Guide',
        items: [{ text: 'Getting Started', link: '/getting-started' }],
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
