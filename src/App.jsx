import products from './data/product';
import Product from './components/Product';

const App = () => {
  return (
    <div>
      <Product data={products[0]} />
    </div>
  );
};

export default App;
