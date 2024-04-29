
import ProductState from './Context/ProductState';
import Category from './components/Navbar/Category';
import ParticularCategory from './components/pages/ParticularCategory';
function App() {

  return (
    <>
    <ProductState>
      <ParticularCategory/>
    </ProductState>

    {/* change it  */}
    {/* <productContext.Provider value={{ res, setRes, fetchMoreData }}>
      <Navbar category={category}/>
      <Table res={res}/>
    </productContext.Provider> */}

    </>
  );
}
export default App;















// import React, { useEffect, useState, useContext } from 'react';
// import Navbar from './components/Navbar';
// import ProductState, { productContext } from './Context/ProductState';
// import { Products } from './components/DataTypes';
// import UI from './components/common/UI';

// function App() {
//   const [data, setData] = useState<Products[]>([]); 

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch('https://dummyjson.com/products');
//         const result = await response.json();
//         setData(result.products);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchData();
//   }, []);

//   const context = useContext(productContext);
//   const { res, setRes } = context ?? { res: data, setRes: () => {} };


//   useEffect(() => {
//     if (data.length > 0) {
//       setRes(data);
//     }
//   }, [data, setRes]);

//   // console.log(res)
//   return (
//     <ProductState>
//       <Navbar />
//       {/* <UI res={res}/> */}
//     </ProductState>
//   );
// }

// export default App;