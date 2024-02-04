import './App.css';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Footer from './components/footer/Footer';
import Product from './components/product/Product';
import { Routes, Route } from 'react-router-dom';
import SingleRoute from './router/single-route/SingleRoute';


function App() {
  return (
    <div className="App container">
   <Navbar/>
   <Banner/>
   <br />
   <br />
   <br />
   <br />
   <div className="content">
      <Routes>
        <Route path='/product/:id' element={<SingleRoute/>}/>
      </Routes>
      </div>
   <Product/>
   <br />
   <br />
   <br />
   <br />
   <br />
   <Footer/>
    </div>
  );
}

export default App;
