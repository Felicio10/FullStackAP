import DetailClient from '<importalias>/app/components/detail/DetailClient';
import {products} from "../../../utils/Products"
import React from 'react'
type DetailProps ={
  productId? : string
}

const Detail = ({params}: {params: DetailProps}) => {

  const {productId} = params;

  const product = products.find(product => product.id == productId)
  console.log(product, "product")
  return (
    <div>
      <DetailClient/>
    </div>
  )
}

export default Detail
