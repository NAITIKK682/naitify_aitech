import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import SocialPanel from '../ui/SocialPanel';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 dark:bg-dark text-gray-900 dark:text-gray-100">
      <Sidebar />
      <div className="flex flex-col flex-grow md:pl-48 lg:pl-48"> {/* reserve space for sidebar on md+ */}
        <Header />
        <main className="flex-grow px-4 sm:px-6 lg:px-8 py-6 pt-20"> {/* top padding for fixed header (h-16) + extra spacing */}
          <Outlet />
        </main>
        <Footer />
      </div>
      <SocialPanel />
    </div>
  );
};

export default Layout;