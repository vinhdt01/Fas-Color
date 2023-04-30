import {useState , useEffect } from "react";
import axios from 'axios'
import ProductsFeatured from "@containers/products-featured";
import ShowMoreBtn from '@components/show-more/show-more-button'

const NewProduct = ({data , title}) => {

  return (
     <>
      <ProductsFeatured data={data} sectionHeading="text-featured-products" title={title}/>
      </>
  )
}
export default NewProduct