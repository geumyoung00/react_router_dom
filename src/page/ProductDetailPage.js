import React from "react";
import { useParams } from "react-router-dom";

const ProductDetailPage = () => {
  const { productId } = useParams();
  return (
    <>
      <p>게시글 {productId}</p>
    </>
  );
};

export default ProductDetailPage;
