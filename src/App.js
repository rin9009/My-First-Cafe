import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/section/Main';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const My = lazy(() => import('./pages/My'));
const Sort = lazy(() => import('./pages/Sort'));
const Store = lazy(() => import('./pages/Store'));
const News = lazy(() => import('./pages/News'));

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Main />}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/my' element={<My />} />
          <Route path='/sort' element={<Sort />} />
          <Route path='/store' element={<Store />} />
          <Route path='/news' element={<News />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

export default App;