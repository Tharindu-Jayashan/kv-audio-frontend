
import './App.css'
import Adminpage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homePage';
import LoginPage from './pages/login/login';
import { Toaster } from 'react-hot-toast';

function App() {

  return (
 
      <BrowserRouter>
      <Toaster/>
           <Routes path="/*">
               <Route path='/login' element={<LoginPage/>} />
               <Route path="/admin/*" element={<Adminpage/>} />
               <Route path="/*" element={<Homepage/>} />
           </Routes>
      </BrowserRouter>
   
  )
}

export default App
