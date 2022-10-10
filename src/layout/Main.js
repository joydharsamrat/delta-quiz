import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/Header/NavBar';

const Main = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;