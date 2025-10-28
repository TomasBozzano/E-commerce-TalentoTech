import { Route, Routes } from 'react-router-dom'
import {HomePage} from './pages/home/HomePage'
import {ProductPage} from './pages/products/ProductPage'
import {NotFoundPage} from './pages/notFound/NotFoundPage'
import { CartPage } from './pages/cart/CartPage'
import { ProductDetailPage } from './pages/productDetail/ProductDetailPage'
import { PrivateRoute } from './pages/route/PrivateRoute'
import { LoginPage } from './pages/login/LoginPage'
import { RegisterPage } from './pages/register/RegisterPage'
import { LogoutPage } from './pages/logout/LogoutPage'


function App() {




  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        {/* <PrivateRoute>
          <Route path='/cart' element={<CartPage />} />
        </PrivateRoute> */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
