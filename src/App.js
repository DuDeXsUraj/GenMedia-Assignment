import logo from './logo.svg';
import './App.css';
import ProductsPage from './Pages/ProductsPage';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'

function App() {
  return (
  //  <ProductsPage></ProductsPage>
  <BrowserRouter>
    <h1 className='title' >GenMedia Assignment</h1>
    <div className='underline'></div>
    <Routes>
     <Route path='/' element={<ProductsPage/>}/>
    </Routes>
   </BrowserRouter>
  );
}

export default App;
