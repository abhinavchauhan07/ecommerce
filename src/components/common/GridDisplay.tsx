
import React, { useEffect, useState, useRef, useContext } from "react";
import Card from "./Card/Card.tsx";
import './Table.css'
import { Products } from "../DataTypes.ts";
import  { productContext } from "../../Context/ProductState.tsx";
import Pagination from "../Pagination.tsx";
import { GridDisp } from "../DataTypes.ts";


type TablePropsType = {
  res: Products[];
};

const GridDisplay = ({res}:TablePropsType) => {

  // const GridDisplay = ({ res }: { res: any[] }) => {
  //   const gridData: GridDisp[] = TypeConverter(res);
    
  // };
  const [pageData, setPageData] = useState<Products[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [value, setValue] = useState<number>(10);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const context = useContext(productContext);

  const handlePrev = () => {
    if (page === 1) return;
    setPage((prevPage) => prevPage - 1);
  };

  const handleNext = async () => {
    
    if (page === pageCount) {
      try {
        await context?.fetchMoreData(value);
        setPage((prevPage) => prevPage + 1);
      } catch {
        console.log("error in fetching data");
      }
    } else {
      setPage((prevPage) => prevPage + 1);
    }
  };
  
  const offsetValue = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setValue(+e.target.value);
    setPage(1);
  };

  useEffect(() => {
    const pageDataCount = Math.ceil(res.length / (value === 0 ? 10 : value));
    setPageCount(pageDataCount);

    const LIMIT = value;
    const skip = LIMIT * (page - 1);
    const dataskip = res.slice(skip, skip + LIMIT);
    setPageData(dataskip);
  }, [res, page, value]);

  const handleScroll = () => {
    if(pageCount===1)
      {
        return;
      }
    if (
      containerRef.current &&
      containerRef.current.scrollTop + containerRef.current.clientHeight >=
        containerRef.current.scrollHeight
    ) {
      if(page*value<90)
      handleNext();
    }
  };
  const handleScrollUp = () => {
    if (pageCount === 1 || page === 1) {
      return;
    }
    if (containerRef.current && containerRef.current.scrollTop === 0) {
        setPage((prevPage) => prevPage - 1);
    }
  };
  
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = 0;
    }
  }, [pageData]);

  return (
    <>
      <div
        className="show-container"
        ref={containerRef}
        onScroll={handleScroll}
        // onMouseEnter={handleScrollUp}
      >
        {pageData.map((element, index) => (
          <Card key={index} res={element}/>
          
        ))}
     
      </div>
      <Pagination currentPage={page} totalPages={pageCount} handleNextPage={handleNext} handlePrevPage={handlePrev} value={value} offsetChange={offsetValue}/>

     
    </>
  );
};

export default GridDisplay;

// export const covertToGridDisplay = <IType extends any>(res: IType[],mappingKeys:Partial<Record<keyof IType,keyof GridDisp>>): GridDisp[] => {
//   let data:GridDisp[];
//  res.forEach((d)=>{
//   let dp:GridDisp;

//   Object.entries(mappingKeys).forEach(([key,value])=>{
//     dp[value]=d[key];
//   })

//   data.push(dp);
//  })

//  return data;
// };
// function TypeConverter(res: any[]): GridDisp[] {
//   throw new Error("Function not implemented.");
// }

