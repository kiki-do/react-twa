import { jsx as _jsx, jsxs as _jsxs } from 'react/jsx-runtime';

import { useInitData } from './useInitData';
const Demo = () => {
  const initData = useInitData();
  return _jsxs('div', {
    children: [
      _jsx('h1', { children: initData?.unsafe.user?.first_name }),
      _jsx('span', {
        children: initData?.unsafe.user?.is_premium
          ? 'You are god'
          : 'Unlucky you free tg user :( ',
      }),
    ],
  });
};
export default Demo;
