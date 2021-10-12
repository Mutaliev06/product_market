import { Route, Switch } from 'react-router-dom';
import ProductModal from './components/ProductModal';
import Categories from './components/Categories';
import Products from './components/Products';

function App() {
  return (
    <Switch>
      <Route path="/" exact>
        <Categories />
      </Route>
      <Route path="/category/:category_id">
        <Products />
      </Route>
      <Route path="/product/:id">
        <ProductModal />
      </Route>
    </Switch>
  );
}

export default App;
