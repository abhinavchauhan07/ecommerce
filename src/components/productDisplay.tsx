import React, { useEffect, useState, useRef } from "react";
import Card from "./common/Card/Card.tsx";
import "./common/UI.css"
import { Products } from "./DataTypes.ts";

type ProductDisplayProps = {
  res: Products[];
  page: number;
  value: number;
};

const ProductDisplay: React.FC<ProductDisplayProps> = ({ res, page, value }) => {
  const [pageData, setPageData] = useState<Products[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const LIMIT = value;
    const skip = LIMIT * (page - 1);
    const dataskip = res.slice(skip, skip + LIMIT);
    setPageData(dataskip);
  }, [res, page, value]);

  const handleScroll = () => {
    if (
      containerRef.current &&
      containerRef.current.scrollTop + containerRef.current.clientHeight >=
        containerRef.current.scrollHeight
    ) {
      // TODO: Trigger a callback to parent component to load more data
    }
  };

  return (
    <div className="show-container" ref={containerRef} onScroll={handleScroll}>
      {pageData.map((element, index) => (
        <Card key={index} res={element} />
      ))}
    </div>
  );
};

export default ProductDisplay;
