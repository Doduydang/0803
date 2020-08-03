const privateRoutes=[
    {
        path: '/',
        icon: 'home',
        label: 'HOME',
        menu: {
            exact: true,
        },
        loader: ()=>import('view/home/HomePage'),
        permissionRequired: null,
        exact: true,
    },
    {
        path: '/profile',
        loader: ()=>import('view/auth/ProfileFormpage'),
        permissionRequired: null,
        exact: true,
        menu: false,
    },
    {
        path: '/iam',
        loader: ()=>import('view/iam/list/IamPage'),
        permissionRequired: null,
        exact: true,
        icon: 'user-add',
        label: "Profile page",
        menu: true,
    }
];
const publicRoutes=[
    {
        path: '/auth/signin',
        loader: ()=> import('view/auth/SigninPage'),
    },

]