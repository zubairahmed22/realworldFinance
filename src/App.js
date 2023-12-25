
import { Routes,Route } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './App.css';
import Footer from './Component/Footer';
import { HeaderComponent } from './Component/header';
import PreSale from './preSale';


import { Home } from './Home';
import About from './about';
import { Contact } from './Contact';
import { Team } from './Component/Team';
import Home2 from './Home2';
import Admin from './admin';

function App() {
 let  navigate = useNavigate();

console.log("checking page",window.location.pathname )
  return (
    <>
  
    <div className="App">
     {window.location.pathname=="/Home2"? <> <Home2/> 
	</>:<><HeaderComponent/>
  <Routes>

<Route path="/" element={<Home/>}/>

<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/presale' element={<PreSale/>}/>
<Route path='/admin' element={<Admin/>}/>


  
	
  <Route path='/team' element={<Team/>}/>
  
  {/* <Faq/> */}
  </Routes>
  <Footer/></>}
    
    </div>
    
   
    </>
  );
}

export default App;
