import { Fragment } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";

function App() {
  return (
    <div>
      <Fragment>
        <Cart />
        <Header />
        <main>
          <Meals />
        </main>
      </Fragment>
    </div>
  );
}

export default App;
