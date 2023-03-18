import * as React from 'react';
import { Layout as AntLayout } from 'antd';
import Header from '@components/Layout/Header';
import Footer from '@components/Layout/Footer';
const AntContent = AntLayout.Content;
const AntHeader = AntLayout.Header;
// const AntFooter = AntLayout.Header;

function DefaultLayout({ children }) {
  return (
    <div>
      <AntLayout style={{ height: '100vh' }}>
        <AntHeader className="h-auto py-2">
          <Header />
        </AntHeader>
        <AntContent
          style={{
            overflow: 'auto',
            overflowX: 'hidden',
          }}
        >
          {children}
          <Footer />
        </AntContent>
      </AntLayout>
    </div>
  );
}

export default DefaultLayout;
