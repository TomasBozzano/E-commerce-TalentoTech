import { Route, Routes } from 'react-router-dom'
import {HomePage} from './pages/home/HomePage'
import {ProductPage} from './pages/products/ProductPage'
import {NotFoundPage} from './pages/notFound/NotFoundPage'
import { CartPage } from './pages/cart/CartPage'
import { ProductDetailPage } from './pages/productDetail/ProductDetailPage'


function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/products' element={<ProductPage/>} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
