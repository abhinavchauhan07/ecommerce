import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { productContext } from '../../Context/ProductState';
import { Products } from '../DataTypes';
import { fetchCategoriesItems } from '../common/ApiCalling';
import Table, { covertToGridDisplay } from '../common/GridDisplay';
import GridDisplay from '../common/GridDisplay';
type ParticularCategoryType={
  element?:string|any;
}
const ParticularCategory = () => {
  const { element } = useParams<ParticularCategoryType>();
      const [data, setData] = useState<Products[]>([]);

      const context = useContext(productContext);

      // read about mutex
      const { res, setRes } = context ?? { res: data, setRes: () => {} };

      const getData = async (element:string) => {
        try {
          const response = await fetchCategoriesItems(element);
          setData(response.products);
          setRes(response.products); 
          console.log("hello",response.products)
        } catch {
          throw new Error('Could not fetch the products');
        }
      };
    useEffect(()=>{
        getData(element);
    },[element])

    // const gD = covertToGridDisplay(res,{'brand':'desc'})

   return (
    <div>
      <GridDisplay res={res}/>
    </div>
  )
}

export default ParticularCategory
