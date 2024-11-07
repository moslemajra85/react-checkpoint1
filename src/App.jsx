import products from './data/product';
import Product from './components/Product';

const App = () => {
  return (
    <div className='products'>
      {
        products.map(product => <Product data={product} />)
      }
    </div>
  );
};

export default App;
