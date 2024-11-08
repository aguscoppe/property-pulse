import React from 'react';
import '@/assets/styles/globals.css';
import NavBar from '@/components/NavBar';

export const metadata = {
  title: 'PropertyPulse | Find the Perfect Rental',
  description: 'Find your Dream Rental Property',
  keywords: 'rental, find rentals, find properties',
};

const MainLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
};

export default MainLayout;
