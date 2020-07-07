import React from "react";

// Images
import pinkTshirt from "../images/cover-3.jpg";
import { connect } from "react-redux";
import { addBasket } from "../actions/addAction";

const Home = (props) => {
  //console.log(props);
  // const [basketNumbers, setBasketNumbers] = useState(0);

  // const addToBasket = () => {
  //   setBasketNumbers(basketNumbers + 1);
  // };

  return (
    <div className="container">
      <div className="image">
        <img src={pinkTshirt} className="imgKirby" alt="kirby :v" />
        <h3>Kirby Tshirt</h3>
        <h3>$12,00</h3>
        <a
          onClick={() => props.addBasket("kirbyTshirtUno")}
          className="addToCart cart1"
          href="#1"
        >
          Add to Cart
        </a>
      </div>
      <div className="image">
        <img src={pinkTshirt} className="imgKirby" alt="kirby :v" />
        <h3>Kirby Tshirt</h3>
        <h3>$13,00</h3>
        <a
          onClick={() => props.addBasket("kirbyTshirtDos")}
          className="addToCart cart2"
          href="#2"
        >
          Add to Cart
        </a>
      </div>
      <div className="image">
        <img src={pinkTshirt} className="imgKirby" alt="kirby :v" />
        <h3>Kirby Tshirt</h3>
        <h3>$14,00</h3>
        <a
          onClick={() => props.addBasket("kirbyTshirtTres")}
          className="addToCart cart3"
          href="#3"
        >
          Add to Cart
        </a>
      </div>
      <div className="image">
        <img src={pinkTshirt} className="imgKirby" alt="kirby :v" />
        <h3>Kirby Tshirt</h3>
        <h3>$15,00</h3>
        <a
          onClick={() => props.addBasket("kirbyTshirtCuatro")}
          className="addToCart cart4"
          href="#4"
        >
          Add to Cart
        </a>
      </div>
    </div>
  );
};
export default connect(null, { addBasket })(Home);
