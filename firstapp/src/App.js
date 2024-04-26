import './App.css';
import NavBar from './componet/NavBar';
import MainContent from './componet/MainContent';
import Footer from './componet/Footer';
import OurProductContainer from './componet/OurProductsContainer';
function App() {
  
  return (
    <div className="App">
         <NavBar />
         <MainContent />
         <OurProductContainer/>
         <Footer />
        

    </div>
    
  );
}

export default App;

