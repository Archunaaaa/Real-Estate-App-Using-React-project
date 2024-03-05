import React from "react"
import Back from "../Common/Back"
import PriceCard from "../Home/Price/PriceCard"
import img from "../Images/pricing.jpg"
import "../Home/Price/Price.css"

const Pricing = () => {
  return (
    <>
      <section className='pricing mb'>
        <Back name='30 days money back guarantee' title='No Extra Fees. Friendly Support' cover={img} />
        <div className='price container'>
          <PriceCard />
        </div>
      </section>
    </>
  )
}

export default Pricing
