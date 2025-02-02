
import './App.css'
import Adminpage from './pages/admin/adminPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homePage';

function App() {

  return (
 
      <BrowserRouter>
           <Routes>
               <Route path="/admin" element={<Adminpage/>} />
               <Route path="/*" element={<Homepage/>} />
           </Routes>
      </BrowserRouter>
   
  )
}

export default App
