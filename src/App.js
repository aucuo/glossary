import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Preloader from './components/Preloader/Preloader';
const Index = React.lazy(() => import('./components/Index/Index'));
const Offer = React.lazy(() => import('./components/Offer/Offer'));
const Add = React.lazy(() => import('./components/Add/Add'));
const Sign = React.lazy(() => import('./components/Sign/Sign'));
const Article = React.lazy(() => import('./components/Article/Article'));

function App() {
    const [showPreloader, setShowPreloader] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setShowPreloader(false);
        }, 1000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <BrowserRouter>
            {showPreloader ? <Preloader /> : null}
            <div className='app-wrapper'>
                <Header />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' element={<Index />} />
                        <Route path='/offer' element={<Offer />} />
                        <Route path='/add' element={<Add />} />
                        <Route path='/article' element={<Article />} />
                        <Route path='/sign' element={<Sign />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App