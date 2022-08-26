import React from 'react'
import GetProduct from '../../commomComponents/getProduct/GetPtoduct'
import Slider from '../../commomComponents/slider/Slider'
import Footer from '../../commomComponents/footer/Footer'
import Contact from '../contact/Contact'

function Home() {
  return (
    <div>
      <Slider />

      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-4 col-sm-4"></div>
          <div className="col-md-4 col-lg-4 col-sm-4 text-center mt-5">
            <h2>OUR SERVICE </h2>

          </div>
          <div className="col-md-4 col-lg-4 col-sm-4"></div>
        </div>

        {/* product part */}
        <GetProduct />


        {/* footer part */}
        <Footer />


      </div>







    </div>
  )
}
export default Home
