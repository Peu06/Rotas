import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import HomePage from '../components/HomePage';
import Santos from '../components/Santos';
import Palmeiras from '../components/Palmeiras';
import Corinthians from '../components/Corinthians';
import SaoPaulo from '../components/SaoPaulo';

const MyRoutes = () => (
    <BrowserRouter>
        <Routes>
            <Route exact path='/' element={ <HomePage />} />
            <Route path='/Santos' element={ <Santos /> } />
            <Route path='/Palmeiras' element={ <Palmeiras /> } />
            <Route path='/Corinthians' element={ <Corinthians /> } />
            <Route path='/SaoPaulo' element={ <SaoPaulo /> } />
        </Routes>
    </BrowserRouter>
);
export default MyRoutes;