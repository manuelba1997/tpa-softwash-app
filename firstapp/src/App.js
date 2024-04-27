import './App.css';
import NavBar from './componet/NavBar';
import MainContent from './componet/MainContent';
import Home from './componet/Home';
import Footer from './componet/Footer';
import OurProductContainer from './componet/OurProductsContainer';
function App() {
  
  return (
    <div className="App">
         <NavBar />
         <Home />
         <OurProductContainer/>
         <Footer />
        

    </div>
    
  );
}

export default App;

