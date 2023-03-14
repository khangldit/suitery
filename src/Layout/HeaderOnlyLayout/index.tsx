import * as React from 'react';
import { ConfigProvider, Layout as AntLayout } from 'antd';
const AntContent = AntLayout.Content;
const AntHeader = AntLayout.Header;

function DefaultLayout({ children }) {
  return (
    <div>
      <AntLayout style={{ height: '100vh' }}>
        <AntHeader className="h-auto py-2">This is Topbar</AntHeader>
        <AntContent style={{ overflow: 'auto' }}>{children}</AntContent>
      </AntLayout>
    </div>
  );
}

export default DefaultLayout;
