import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css'; 
import Header from './CoreFit/Header';
import Footer from './CoreFit/Footer';
import Routing from './CoreFit/Routing';



function App() {
  
  return (
    <div className="App">
      <Header />
      <Routing />
      <Footer />
      {/* <AdminLogin /> */}
      {/* <AddProduct /> */}
      {/* <AddSize /> */}
      {/* <Dashboard /> */}
      {/* <EditProduct /> */}
      {/* <ViewCollections /> */}
      {/* <Welcome /> */}
      
    </div>
  );
}

export default App;
