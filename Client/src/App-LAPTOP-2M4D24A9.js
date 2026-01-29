import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import 'animate.css';
import Header from './CoreFit/Header';
import Footer from './CoreFit/Footer';
import Home from './CoreFit/Home';
import Shop from './CoreFit/Shop';
import About from './CoreFit/About';
import Collections from './CoreFit/Collections';
import Contact from './CoreFit/Contact';
import Routing from './CoreFit/Routing';
import StateExample from './Hooks/StateExample';
import UsersData from './CRUDCalls/UsersData';
import StudentsData from './CRUDCalls/StudentsData';
import AddStudent from './CRUDCalls/AddStudent';
import ViewCollections from './CoreFit/Admin/ViewCollections';
import AddProduct from './CoreFit/Admin/AddProduct';
import AdminLogin from './CoreFit/Admin/AdminLogin';
import EditProduct from './CoreFit/Admin/EditProduct';
import MainComp from './Context/MainComp';
import { createContext, useState } from 'react';
import Welcome from './CoreFit/Admin/Welcome';
import Memo from './Hooks/Memo';
import AddSize from './CoreFit/Admin/AddSize';
import RefExample from './Hooks/RefExample';

export const loginStatus = createContext()

function App() {
  const [login, setLogin] = useState(false)
  return (
    <div className="App">
      <loginStatus.Provider value={ [login, setLogin]}>
      <Header />
      <Routing />
      <Footer />
      </loginStatus.Provider>
    </div>
  );
}

export default App;
