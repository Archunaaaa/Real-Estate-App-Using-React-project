import React from "react"
import img from "../Images/services.jpg"
import Back from "../Common/Back"
import "../Home/Featured/Featured.css"
import FeaturedCard from "../Home/Featured/FeaturedCard"

const Services = () => {  
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services;  