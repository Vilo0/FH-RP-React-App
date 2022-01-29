import { BrowserRouter, Navigate } from 'react-router-dom';
import { Routes, Route, NavLink } from 'react-router-dom';

// import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages/index';
import { routes } from './routes';
import logo from '../logo.svg';

export const Navigation = () => {
  return (
    <BrowserRouter>
        <div className="main-layout">
            <nav>
                <img src={logo} alt="React Logo" />
                <ul>
                    { routes.map((route, i) => (
                        <li key={i}>
                            <NavLink to={route.to} className={ ({ isActive }) => isActive ? 'nav-active': '' }>{route.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>

            <Routes>
                { routes.map((route, i) => (
                    <Route key={i} path={ route.path } element={ <route.Component /> } />
                ))}
                {/* <Route path="lazy1" element={ <LazyPage1 /> } />
                <Route path="lazy2" element={ <LazyPage2 /> } />
                <Route path="lazy3" element={ <LazyPage3 /> } /> */}

                {/* <Route path="/*" element={ <Navigate to="/lazy-1" replace /> } /> */}
            </Routes>
        </div>
    </BrowserRouter>
  );
};
