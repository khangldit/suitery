// import logo from "./logo.svg";
// import './customize.scss';
import React from 'react';
import 'antd/dist/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from '@routes/routes';
import { DefaultLayout } from '@components/Layout';

function Layout() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map(
            (item: { path: string; component: any; layout?: any }, index) => {
              const Layout =
                item.layout === null
                  ? React.Fragment
                  : item.layout || DefaultLayout;
              const Page = item.component;

              return (
                <Route
                  key={index}
                  path={item.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            }
          )}
          <Route path="*" element={<div>Not found</div>} />
        </Routes>
      </div>
    </Router>
  );
}

export default Layout;
