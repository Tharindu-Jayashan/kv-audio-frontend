
import './App.css'
import Adminpage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homePage';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';
import RegisterPage from './pages/register/register';
import Testing from './components/testing';


function App() {

  return (
 
      <BrowserRouter>
      <Toaster/>
           <Routes path="/*">
               <Route path='/testing' element={<Testing/>} />
               <Route path='/login' element={<LoginPage/>} />
               <Route path='/register' element={<RegisterPage/>} />
               <Route path="/admin/*" element={<Adminpage/>} />
               <Route path="/*" element={<Homepage/>} />
           </Routes>
      </BrowserRouter>
   
  )
}

export default App
