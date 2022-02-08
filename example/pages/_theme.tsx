import React from 'react';
import { createTheme } from 'vite-pages-theme-doc';
import pkg from '../../package.json';

export default createTheme({
  logo: <h3>react-photo-view@{pkg.version}</h3>,
  topNavs: [
    {
      label: '首页',
      path: '/',
    },
    { label: 'Github ⭐', href: 'https://github.com/MinJieLiu/react-photo-view' },
  ],
});
