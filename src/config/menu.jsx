import { lazy } from 'react';

const TermsOfService = lazy(() => import('../pages/TermsOfService'));
const Home = lazy(() => import('../pages/home'));

// 初始化路由
const allMenu = [
    {
        page: '/',
        component: <Home />
    },
    { 
        page: '/termsOfService',
        component: <TermsOfService /> 
    },
];

export { allMenu };
