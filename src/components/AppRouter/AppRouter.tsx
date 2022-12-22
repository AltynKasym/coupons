import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppSelector } from '../../hooks/reduxHook';
import { privateRoute, publicRoute } from './routeObj/routeObj'
import ScrollToTop from './ScrollToTop';

const AppRouter: FC = () => {

    const selector = useAppSelector;
    const user = selector(state => state.user.user);

    return (
        <>
        <Routes>
            {
                !user
                ?
                publicRoute.map(obj => 
                    <Route key={obj.path} path={obj.path} element={<obj.component />} />
                )
                :
                privateRoute.map(obj => 
                    <Route key={obj.path} path={obj.path} element={<obj.component />} />
                )
            }
        </Routes>
        <ScrollToTop />
        </>
    )
}

export default AppRouter