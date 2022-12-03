import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constans/routes';
import Scene from '../Scenes/Scene';

function RootRoute() {
    return (
        <Routes>
            <Route path={ROUTES.homePage} element={<Scene />}></Route>
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;