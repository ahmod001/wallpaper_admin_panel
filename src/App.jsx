import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from './Components/Dashboard/Dashboard';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import MainLayout from './Components/MainLayout/MainLayout';
import SignIn from './Components/SignIn/SignIn';
import Categories from './Components/Categories/Categories';
import Reports from './Components/Reports/Reports';
import Users from './Components/Users/Users';
import PushNotification from './Components/PushNotification/PushNotification';
import Wallpapers from './Components/Wallpapers/Wallpapers';
import { createContext, useState } from 'react';
import WallpaperEdit from './Components/WallpaperManeger/WallpaperEdit/WallpaperEdit';
import WallpaperAdd from './Components/WallpaperManeger/WallpaperAdd/WallpaperAdd';
import CategoryAdd from './Components/CategoryManeger/CategoryAdd/CategoryAdd';
import CategoryEdit from './Components/CategoryManeger/CategoryEdit/CategoryEdit';
import Settings from './Components/Settings/Settings';
import AdMobAds from './Components/AdMobAds/AdMobAds';


export const AdminContext = createContext();

function App() {
  const [currentPage, setCurrentPage] = useState('')

  return (
    <BrowserRouter>
      <AdminContext.Provider value={{
        CurrentPage: [currentPage, setCurrentPage]
      }}>

        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<Dashboard />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/categories' element={<Categories />} />
            <Route path='/reports' element={<Reports />} />
            <Route path='/users' element={<Users />} />
            <Route path='/push_notification' element={<PushNotification />} />
            <Route path='/wallpapers' element={<Wallpapers />} />
            <Route path='/wallpapers/add' element={<WallpaperAdd />} />
            <Route path='/wallpapers/edit/:wallpaperId' element={<WallpaperEdit />} />
            <Route path='/categories/add' element={<CategoryAdd />} />
            <Route path='/categories/edit/:categoryId' element={<CategoryEdit />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/ads' element={<AdMobAds />} />
            <Route path='/*' element={<PageNotFound />} />
          </Route>
          <Route path='/sign_in' element={<SignIn />} />
        </Routes>
      </AdminContext.Provider>
    </BrowserRouter>

  )
}

export default App
