import CartWidget from "../CartWidget";


const NavBar = () => {
  return (
    <div className="container">
      <header className="menu">
        <nav>
          <ul>
            <li>
              <a href="#">Inicio</a>
            </li>
            <li>
              <a href="#">Productos</a>
            </li>
            <li>
              <a href="#">Contacto</a>
            </li>
          </ul>
        </nav>
      </header>
        <CartWidget /> 
    </div>
  );
};

export default NavBar;
