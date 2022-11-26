import React from 'react'
import CompCreateProducts from '../Product/CreateProduct'
import CompEditProducts from '../Product/EditProduct'
import CompShowProducts from '../Product/ShowProducts'

const ListProduct = () => {
  return (
    <>
    <div className='main'>
   <CompCreateProducts />
    <CompShowProducts />
  
    </div>
    </>
  )
}

export default ListProduct