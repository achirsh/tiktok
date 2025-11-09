import { lazy } from 'react';

const TermsOfService = lazy(() => import('../pages/TermsOfService'));


// 初始化路由
const allMenu = [
    { 
        page: '/termsOfService',
        component: <TermsOfService /> 
    },
];

export { allMenu };
