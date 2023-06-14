import React from 'react';
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
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header />
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/' Component={Index} />
                        <Route path='/offer' Component={Offer} />
                        <Route path='/add' Component={Add} />
                        <Route path='/article' Component={Article} />
                        <Route path='/sign' Component={Sign} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </BrowserRouter>
    )
}

export default App