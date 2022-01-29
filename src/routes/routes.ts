import { LazyPage1 } from '../01-lazyload/pages/LazyPage1';
import { LazyPage3 } from '../01-lazyload/pages/LazyPage3';
import { LazyPage2 } from '../01-lazyload/pages/LazyPage2';

interface Route {
    to: string;
    path: string;
    name: string;
    Component: () => JSX.Element;
}

export const routes: Route[] = [
    {
        to: '/lay-1',
        path: 'lay-1',
        Component: LazyPage1,
        name: 'Lazy-1'
    },
    {
        to: '/lay-2',
        path: 'lay-2',
        Component: LazyPage2,
        name: 'Lazy-2'
    },
    {
        to: '/lay-3',
        path: 'lay-3',
        Component: LazyPage3,
        name: 'Lazy-3'
    }
];