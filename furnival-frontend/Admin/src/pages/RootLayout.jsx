import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <div className='flex'>
      <nav className="w-[312px] bg-normalGray h-screen">
        <Sidebar />
      </nav>
      <div className='w-full'>
        <header>
          <Header />
        </header>
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
