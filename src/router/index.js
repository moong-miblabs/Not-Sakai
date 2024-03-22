import { createRouter, createWebHistory } from 'vue-router';
import AppLayout from '@/layout/AppLayout.vue';

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'dashboard',
                    component: () => import('@/views/Dashboard.vue')
                }
            ]
        },
        {
            path: '/uikit/formlayout',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'formlayout',
                    component: () => import('@/views/uikit/FormLayout.vue')
                }
            ]
        },
        {
            path: '/uikit/input',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'input',
                    component: () => import('@/views/uikit/Input.vue')
                }
            ]
        },
        {
            path: '/uikit/floatlabel',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'floatlabel',
                    component: () => import('@/views/uikit/FloatLabel.vue')
                }
            ]
        },
        {
            path: '/uikit/invalidstate',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'invalidstate',
                    component: () => import('@/views/uikit/InvalidState.vue')
                }
            ]
        },
        {
            path: '/uikit/button',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'button',
                    component: () => import('@/views/uikit/Button.vue')
                }
            ]
        },
        {
            path: '/uikit/table',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'table',
                    component: () => import('@/views/uikit/Table.vue')
                }
            ]
        },
        {
            path: '/uikit/list',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'list',
                    component: () => import('@/views/uikit/List.vue')
                }
            ]
        },
        {
            path: '/uikit/tree',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'tree',
                    component: () => import('@/views/uikit/Tree.vue')
                }
            ]
        },
        {
            path: '/uikit/panel',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'panel',
                    component: () => import('@/views/uikit/Panels.vue')
                }
            ]
        },
        {
            path: '/uikit/overlay',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'overlay',
                    component: () => import('@/views/uikit/Overlay.vue')
                }
            ]
        },
        {
            path: '/uikit/media',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'media',
                    component: () => import('@/views/uikit/Media.vue')
                }
            ]
        },
        {
            path: '/uikit/menu',
            component: AppLayout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '',
                            component: () => import('@/views/uikit/menu/PersonalDemo.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/uikit/menu/seat',
            component: AppLayout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '',
                            component: () => import('@/views/uikit/menu/SeatDemo.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/uikit/menu/payment',
            component: AppLayout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '',
                            component: () => import('@/views/uikit/menu/PaymentDemo.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/uikit/menu/confirmation',
            component: AppLayout,
            children: [
                {
                    path: '',
                    component: () => import('@/views/uikit/Menu.vue'),
                    children: [
                        {
                            path: '',
                            component: () => import('@/views/uikit/menu/ConfirmationDemo.vue')
                        }
                    ]
                }
            ]
        },
        {
            path: '/uikit/message',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'message',
                    component: () => import('@/views/uikit/Messages.vue')
                }
            ]
        },
        {
            path: '/uikit/file',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'file',
                    component: () => import('@/views/uikit/File.vue')
                }
            ]
        },
        {
            path: '/uikit/charts',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'charts',
                    component: () => import('@/views/uikit/Chart.vue')
                }
            ]
        },
        {
            path: '/uikit/misc',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'misc',
                    component: () => import('@/views/uikit/Misc.vue')
                }
            ]
        },
        {
            path: '/blocks',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'blocks',
                    component: () => import('@/views/utilities/Blocks.vue')
                }
            ]
        },
        {
            path: '/utilities/icons',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'icons',
                    component: () => import('@/views/utilities/Icons.vue')
                }
            ]
        },
        {
            path: '/pages/timeline',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'timeline',
                    component: () => import('@/views/pages/Timeline.vue')
                }
            ]
        },
        {
            path: '/pages/empty',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'empty',
                    component: () => import('@/views/pages/Empty.vue')
                }
            ]
        },
        {
            path: '/pages/crud',
            component: AppLayout,
            children: [
                {
                    path: '',
                    name: 'crud',
                    component: () => import('@/views/pages/Crud.vue')
                }
            ]
        },
        {
            path: '/documentation',
            component: AppLayout,
            children: [                
                {
                    path: '',
                    name: 'documentation',
                    component: () => import('@/views/utilities/Documentation.vue')
                }
            ]
        },
        {
            path: '/landing',
            name: 'landing',
            component: () => import('@/views/pages/Landing.vue')
        },
        {
            path: '/pages/notfound',
            name: 'notfound',
            component: () => import('@/views/pages/NotFound.vue')
        },

        {
            path: '/auth/login',
            name: 'login',
            component: () => import('@/views/pages/auth/Login.vue')
        },
        {
            path: '/auth/access',
            name: 'accessDenied',
            component: () => import('@/views/pages/auth/Access.vue')
        },
        {
            path: '/auth/error',
            name: 'error',
            component: () => import('@/views/pages/auth/Error.vue')
        },
        {
            path: '/bs-album',
            name: 'bs-album',
            component: () => import('@/views/bs-example/Album.vue')
        },
        {
            path: '/bs-carousel',
            name: 'bs-carousel',
            component: () => import('@/views/bs-example/Carousel.vue')
        },
        {
            path: '/bs-checkout',
            name: 'bs-checkout',
            component: () => import('@/views/bs-example/Checkout.vue')
        },
        {
            path: '/bs-cover',
            name: 'bs-cover',
            component: () => import('@/views/bs-example/Cover.vue')
        },
        {
            path: '/bs-jumbotron',
            name: 'bs-jumbotron',
            component: () => import('@/views/bs-example/Jumbotron.vue')
        },
        {
            path: '/bs-pricing',
            name: 'bs-pricing',
            component: () => import('@/views/bs-example/Pricing.vue')
        },
        {
            path: '/bs-product',
            name: 'bs-product',
            component: () => import('@/views/bs-example/Product.vue')
        },
        {
            path: '/bs-sign-in',
            name: 'bs-sign-in',
            component: () => import('@/views/bs-example/SignIn.vue')
        },
        // {
        //     path: '/bs-sticky-footer',
        //     name: 'bs-sticky-footer',
        //     component: () => import('@/views/bs-example/StickyFooter.vue')
        // },
        // {
        //     path: '/bs-sticky-footer-navbar',
        //     name: 'bs-sticky-footer-navbar',
        //     component: () => import('@/views/bs-example/StickyFooterNavbar.vue')
        // },
        {
            path: '/datatable',
            component: AppLayout,
            children: [                
                {
                    path: '',
                    name: 'datatable',
                    component: () => import('@/views/bs-example/datatable.vue')
                }
            ]
        },
        {
            path: '/register',
            component: AppLayout,
            children: [                
                {
                    path: '',
                    name: 'register',
                    component: () => import('@/views/bs-example/register.vue')
                }
            ]
        },
        {
            path: '/delete/:id',
            component: AppLayout,
            children: [                
                {
                    path: '',
                    name: 'delete/:id',
                    component: () => import('@/views/bs-example/delete.vue')
                }
            ]
        },
        {
            path: '/detail/:id',
            component: AppLayout,
            children: [                
                {
                    path: '',
                    name: 'detail/:id',
                    component: () => import('@/views/bs-example/detail.vue')
                }
            ]
        },
        {
            path: '/update/:id',
            component: AppLayout,
            children: [                
                {
                    path: '',
                    name: 'update/:id',
                    component: () => import('@/views/bs-example/update.vue')
                }
            ]
        },
    ]
});

export default router;
