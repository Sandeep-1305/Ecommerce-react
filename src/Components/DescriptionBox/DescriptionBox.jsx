import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Description</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p> An E-commerce website is an online platform that facilitates the buying and selling of goods or services over the internet.
            It allows businesses and consumers to connect, browse products, compare prices, and make secure transactions from anywhere at
            any time. E-commerce platforms often provide features such as product catalogs, shopping carts, secure payment gateways, order tracking, 
            and customer reviews, making online shopping convenient, efficient, and accessible to a global audience.</p>
        <p>
            E-Commerce websites typically display Products or services along with
            detailed descriptions, images,prices,and any available variations
            (e.g.,sizes, colors).Each product usually has its own dedicated page with relevant information
        </p>
      </div>
    </div>
  )
}

export default DescriptionBox
