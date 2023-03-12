import type { NextPage } from 'next';
import { MainLayout } from '../components/ui/MainLayout';
import { HeaderMenu } from '../components/ui/HeaderMenu';
import { HeaderMenuButtons } from '../components/ui/HeaderMenuButtons';
import { SimpleDemo } from '../components/demo/SimpleDemo';
import { GetUserDataDemo } from '../components/demo/GetUserDataDemo';
import { GetLoggingInStateDemo } from '../components/demo/GetLoggingInStateDemo';
import { GetLoginInfoDemo } from '../components/demo/GetLoginInfoDemo';
import { Authenticated } from '../components/tools/Authenticated';
import { LoginModalButton } from '../components/tools/LoginModalButton';
import ProfilePage from './profile';

const Home: NextPage = () => {
  return (
    <MainLayout>
      <HeaderMenu>
        <HeaderMenuButtons enabled={['auth']} />
      </HeaderMenu>
      <Authenticated>
        <ProfilePage />
      </Authenticated>
      <div className="mb-4 p-6 rounded-xl bg-dark-darker"></div>
    </MainLayout>
  );
};

export default Home;
