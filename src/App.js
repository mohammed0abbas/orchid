import React from "react";
import Nav from "./component/nav_component/Nav";
import Home from './component/layout_component/Home'
import Footer from "./component/footercomponent/Footer";
import Cart from './component/layout_component/cart/Cart'
import ItemDesc from "./component/layout_component/itemdesc/ItemDesc";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Other from "./component/layout_component/other/Other";
import Contact from "./component/layout_component/contact/Contact";
import Prodect from "./component/layout_component/prodect/Prodect";
import Itemscxtprovider from "./context/Itemscon";



function App() {
  return (
     <Itemscxtprovider>
      
   
    <div className="App">
    
    
     <BrowserRouter>
     
     <Nav/>
     
    <Routes>
      <Route path="/" index element={<Home/>}  />
      <Route path="/other" element={<Other/>} />
      <Route path="/prodect" element={<Prodect/>}/>
      <Route path="/contact" element={<Contact/>} />
      <Route path="/item/:id" element={<ItemDesc/>} />
      <Route path="/cart" element={<Cart/>} />
      
    </Routes>
    <Footer/>
    
  </BrowserRouter>
     
    </div>
    </Itemscxtprovider>
    
  );
}

export default App;
