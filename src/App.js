import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProduct from './components/ViewProduct';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path='/' element={<AddProduct/>}/>
     <Route path='/search' element={<SearchProduct/>}/>
     <Route path='/delete' element={<DeleteProduct/>}/>
     <Route path='/view' element={<ViewProduct/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
