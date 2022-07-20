import React, {useContext} from 'react';
import {Routes, Route, Navigate, BrowserRouter} from "react-router-dom";
import {authRoutes, publicRoutes} from "../routes";
import Auth from "../pages/Auth";
import Shop from "../pages/Shop";
import {Context} from "../index";


const AppRouter = () => {
    const {user} = useContext(Context)
    console.log(user)
    return (
        user.isAuth
            ?
            <Routes>
                {authRoutes.map(route =>
                    <Route
                        element={<route.Component/>}
                        path={route.path}
                        exact={true}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Shop/>} />
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        element={<route.Component/>}
                        path={route.path}
                        exact={true}
                        key={route.path}
                    />
                )}
                <Route path="*" element={<Auth/>} />
            </Routes>
    );
};

export default AppRouter;