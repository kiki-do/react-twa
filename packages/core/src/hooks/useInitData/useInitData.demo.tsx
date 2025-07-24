import { useInitData } from './useInitData';

const Demo = () => {
  const initData = useInitData();
  return (
    <div>
      <h1>{initData?.unsafe.user?.first_name}</h1>
      <span>
        {initData?.unsafe.user?.is_premium
          ? 'You are god'
          : 'Unlucky you free tg user :( '}
      </span>
    </div>
  );
};

export default Demo;
