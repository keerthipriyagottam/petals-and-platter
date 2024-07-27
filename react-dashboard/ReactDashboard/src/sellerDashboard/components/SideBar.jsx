import React from 'react'

const SideBar = ({showCompanyHandler,showProductHandler}) => {
  return (
    <div className="sideBarsection">
        <ul>
            <li onClick={showCompanyHandler}>Add Company</li>
            <li onClick={showProductHandler}>Add Product</li>
            <li>All Products</li>
            <li>User Details</li>
        </ul>
    </div>
  )
}

export default SideBar