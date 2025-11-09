import { lazy } from 'react';

const TermsOfService = lazy(() => import('../pages/TermsOfService'));
const Home = lazy(() => import('../pages/home'));
const PrivacyPolicy = lazy(() => import('../pages/PrivacyPolicy'));

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
    {
        page: '/policy',
        component: <PrivacyPolicy />
    }
];

export { allMenu };
