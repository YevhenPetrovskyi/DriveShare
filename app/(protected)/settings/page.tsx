import { auth } from '@/auth';
const SettingsPage = () => {
  const session = auth();

  return <div>{JSON.stringify(session)}</div>;
};

export default SettingsPage;
