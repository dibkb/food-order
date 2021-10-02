import react,{useState} from "react";
import "./App.css";
import CartModal from "./components/cart/CartModal";
import Header from "./components/Header/Header";
import Meals from "./components/Meals/Meals";
function App() {
  const [cartIsShown,setCartIsShown] = useState(false);
  const showCartHandler = () =>{
    setCartIsShown(true);
  }
  const hideCartHandler = () =>{
    setCartIsShown(false);
  }
  return (
    <div className="container">
      {cartIsShown && <CartModal hideCartHandler ={hideCartHandler}/>}
      <Header showCartHandler ={showCartHandler}/>
      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
