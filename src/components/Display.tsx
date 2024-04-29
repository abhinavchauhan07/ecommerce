import React, { useEffect, useState } from "react";
import Card from "./common/Card/Card.tsx";
import "./Display.css";
import ApiCalling from "./common/ApiCalling.tsx";
import { Products } from "./DataTypes.ts";

const Display = () => {
  // console.log(dataa)
  const [data, setData] = useState<Products[]>([]);
  const [pageData, setPageData] = useState<Products[]>([]);
  const [page, setPage] = useState<number>(1);
  const [pageCount, setPageCount] = useState<number>(0);
  const [value,setValue]=useState<number>(8);

  const getData = async () => {
    try {
      let response = await ApiCalling();
      setData(response.products);
    } catch {
      throw new Error();
    }
  };
  const handlePrev = () => {
    if (page === 1) return page;
    setPage(page - 1);
  };

  const handleNext = () => {
    if (page === pageCount) return page;
    setPage(page + 1);
  };
  useEffect(() => {
    getData();
  }, [page])

  const offsetValue=(e:React.ChangeEvent<HTMLInputElement>):void=>{
    setValue(+e.target.value);
  }
  useEffect(() => {
    const pageDataCount = Math.ceil(data.length / (value===0 ? 6 : value));
    setPageCount(pageDataCount);

    if (page) {
      const LIMIT = value;
      const skip = LIMIT * page;
      const dataskip = data.slice(page === 1 ? 0 : skip - LIMIT, skip);
      setPageData(dataskip);
    }
  }, [data,value]);

  
  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <>
      <div className="show-container">
        {pageData?.length > 0 ? (
          pageData?.map((element, index) => {
            return <Card key={pageData[index].id} res={pageData[index]} />;
          })
        ) : (
          <div>loading</div>
        )}
      </div>
      <div className="page-numbers">
        <button className="nav-btn" id="prev-btn" onClick={handlePrev}>
          Prev
        </button>  
         {(pageCount>0 || pageCount) ?Array(pageCount)
          ?.fill(null)
          ?.map((element, index) => {
            return (
              <div
                className={
                  page === index + 1
                    ? "page-number curr-page-number"
                    : "page-number"
                }
                onClick={() => setPage(index + 1)}
              >
                {index + 1}
              </div>
            );
          }):<div>load</div>}
        <button className="nav-btn" id="next-btn" onClick={handleNext}>
          Next
        </button>
        <input type="number" id="offset" min={1} onChange={offsetValue} value={value} />
      </div>
    </>
  );
};

export default Display;
