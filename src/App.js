import './assets/css/base/base.css';
import './assets/css/componentes/card.css'
import Home from './pages/Home'
import Sobre from './pages/Sobre'
function App() {

  const location = window.location.pathname

  const Router =() =>{
   if ( location === "/" )return <Home/>

   else  return <Sobre/>
  
  }

  return (
    <>
    {Router()}
    </>
  );
}

export default App;
