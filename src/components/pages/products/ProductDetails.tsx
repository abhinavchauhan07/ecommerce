// import { useEffect, useState,useContext } from 'react';
// import { useParams } from 'react-router-dom';
// import './ProductDetails.css';
// import { ToastContainer, toast } from 'react-toastify';
//   import 'react-toastify/dist/ReactToastify.css';
// import CartState, { cartContext } from '../../../Context/CartState';
// import { Products } from '../../DataTypes';
// import Cart from '../cart/Cart';
// const ProductDetails = () => {
//   type Result = {
//     title: string;
//     description?: string;
//     price?: number;
//     images: string[];
//   };

//   const { id } = useParams<{ id: string }>(); 
//   const [result, setResult] = useState<Result | null>(null); 
//   const[cart,setCart]=useState<Products[]>([]);
//   const context = useContext(cartContext);
//   const {setData}=context ?? { setData: () => {} };
//   const fetchFromId = async () => {
//     try {
//       const response = await fetch(`https://dummyjson.com/products/${id}`);
//       const resultData: Result = await response.json(); 
//       setResult(resultData);
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   useEffect(() => {
//     fetchFromId();
//   }, [id]); 

//   const addToCart = () => {
//     toast.success('Item Added', {
//       position: "top-right",
//       autoClose: 5000,
//       hideProgressBar: false,
//       closeOnClick: true,
//       pauseOnHover: true,
//       draggable: true,
//       progress: undefined,
//       theme: "light",
//       });
//       setCart((prevData:any) => [...prevData,result])
      
//     console.log(result)
//   };
//   setData((prevData: any) => [...prevData,result])
//   console.log(cart);

//   return (
//     <>
//     <ToastContainer
// position="top-right"
// autoClose={5000}
// hideProgressBar={false}
// newestOnTop={false}
// closeOnClick
// rtl={false}
// pauseOnFocusLoss
// draggable
// pauseOnHover
// theme="light"
// />
// <ToastContainer />
//       {result && ( 
//         <div className="product-details">
//           <div className="product-image">
//             <img src={result.images[0]} alt={result.title} />
//           </div>
//           <div className="product-info">
//             <h1 className="product-title">{result.title}</h1>
//             {result.description && <p className="product-description">{result.description}</p>}
//             <div className="product-footer">
//               <p className="product-price">${result.price}</p>
//               <button className='bttn'
//             onClick={addToCart}
//           >
//             Add To Cart
//           </button>
//             </div>
//           </div>
//         </div>
//       )}
      
//     </>
//   );
// };

// export default ProductDetails;

import { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './ProductDetails.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CartContext } from '../../../Context/CartState';
import { Products } from '../../DataTypes';

const ProductDetails = () => {
  type Result = {
    title: string;
    description?: string;
    price?: number;
    images: string[];
  };

  const { id } = useParams<{ id: string }>(); 
  const [result, setResult] = useState<any>(); 
  const context = useContext(CartContext);
  const { addToCart } = context ?? { addToCart: () => {} };

  const fetchFromId = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/products/${id}`);
      const resultData: Result = await response.json(); 
      setResult(resultData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchFromId();
  }, [id]); 

  const handleAddToCart = () => {
    if (result) {
      localStorage.setItem(JSON.stringify(result.id),JSON.stringify(result));
      addToCart(result);
      toast.success('Item Added', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      console.log(result)
    }
  };

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {result && ( 
        <div className="product-details">
          <div className="product-image">
            <img src={result.images[0]} alt={result.title} />
          </div>
          <div className="product-info">
            <h1 className="product-title">{result.title}</h1>
            {result.description && <p className="product-description">{result.description}</p>}
            <div className="product-footer">
              <p className="product-price">${result.price}</p>
              <button className='bttn' onClick={handleAddToCart}>Add To Cart</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
