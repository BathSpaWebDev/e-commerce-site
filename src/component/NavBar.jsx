import "../scss/component/NavBar.scss";
import Cart from "./Cart";

export const NavBar = ({cart}) => {
  return (
    <div className="nav-container">
      <nav className="nav-list">
        <Cart cart={cart}/>
      </nav>
    </div>
  );
};
