import './App.css';
import productImage from '../images/image-product-desktop.jpg';
import cartIcon from '../images/icon-cart.svg';

function App() {
  return (
    <div className='bg-primary-cream h-screen flex items-center justify-center'>
      <div className='bg-white w-600px h-500px flex rounded-xl'>
        <img src={productImage} alt="Product" className='w-1/2 h-full object-cover rounded-tl-xl rounded-bl-xl' />
        <div className='mt-4 flex flex-col p-7 gap-8 w-1/2'>

          <h4 className='font-sans tracking-wide text-neutral-dark-grayish-blue'>PERFUME</h4>

          <h1 className='font-serif font-black text-4xl leading-8'>Gabrielle Essence Eau De Parfum</h1>

          <p className='text-neutral-dark-grayish-blue text-base font-sans'>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.</p>

          <div className=' flex items-center gap-9 max-h-full '>
            <h1 className='text-primary-dark-cyan font-black text-3xl font-serif'>$149.99 </h1>
            <span className='text-sm line-through text-neutral-dark-grayish-blue'>$169.99</span>
          </div>

          <button className='bg-primary-dark-cyan text-neutral-white flex items-center py-2 justify-center gap-3 font-semibold font-sans rounded-lg'><img src={cartIcon} alt="cartIcon"/>Add to Cart</button>

        </div>
      </div>
    </div>
  );
}

export default App;
