import { Route, Routes } from 'react-router-dom'
import { HomePage } from './pages/home/HomePage'
import { ProductPage } from './pages/products/ProductPage'
import { NotFoundPage } from './pages/notFound/NotFoundPage'
import { CartPage } from './pages/cart/CartPage'
import { ProductDetailPage } from './pages/productDetail/ProductDetailPage'
import { PrivateRoute } from './pages/route/PrivateRoute'
import { LoginPage } from './pages/login/LoginPage'
import { RegisterPage } from './pages/register/RegisterPage'
import { LogoutPage } from './pages/logout/LogoutPage'
import { useEffect, useState } from 'react'
import { getValidUser } from './services/auth.service'
import { StoredAuth } from './store/StoredAuth'
import { DashboardPage } from './pages/dashboard/DashboardPage'
import { PrivateRouteAdmin } from './pages/route/PrivateRouteAdmin'
import { UserPage } from './pages/user/UserPage'
import { DashboardUserPage } from './pages/dashboard/components/DashboardUserPage'
import { DashboardProductPage } from './pages/dashboard/components/DashboardProductPage'


function App() {
  const authStore = StoredAuth((state) => state);
  const userStored = localStorage.getItem("auth");
  const {email, password, role} = userStored ? JSON.parse(userStored) : {email: null, password: null, role: null};


  useEffect(() => {
    if(!email || !password) return;
    const isAuth = async() => {
      const user = await getValidUser(email, password);
      authStore.login();
      authStore.setEmail(user[0].email);
      authStore.setPassword(user[0].password);
      authStore.setRole(user[0].role);
    }
    isAuth();
  }, [])

  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/api/users' element={<UserPage />} />
        <Route path='/products' element={<ProductPage />} />
        <Route path='/products/:id' element={<ProductDetailPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/logout' element={<LogoutPage />} />
        <Route element={<PrivateRoute email={email} password={password} />}>
          <Route path='/cart' element={<CartPage />} />
        </Route>
        <Route element={<PrivateRouteAdmin role={role} />}>
          <Route path='/dashboard' element={<DashboardPage />} />
          <Route path='/dashboard/users' element={<DashboardUserPage />} />
          <Route path='/dashboard/products' element={<DashboardProductPage />} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  )
}

export default App
