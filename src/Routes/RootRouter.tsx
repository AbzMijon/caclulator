import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ROUTES } from '../constans/routes';
import TodoPage from '../Scenes/TodoPage';

function RootRoute() {
    return (
        <Routes>
            <Route path={ROUTES.homePage} element={<TodoPage />}></Route>
            <Route path='*' element={<h2 className='erorr--not-found'>Ресурс не найден!</h2>}></Route>
        </Routes>
    )
}

export default RootRoute;