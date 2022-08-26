import React from 'react'

function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className=" col-md-2 col-lg-2"></div>
          <div className="col-sm-12  col-md-8 col-lg-8 mt-5">
            <h1 className='text-center text-danger'>Contact Us</h1>
            <div className="row">
              <div className='col-sm-12 col-md-6 col-lg-6'>
                <div class="mb-3">
                  <label class="form-label">First Name</label>
                  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter First Name" />
                </div>

              </div>

              <div className='col-sm-12 col-md-6 col-lg-6'>
                <div class="mb-3">
                  <label class="form-label">Last Name</label>
                  <input type="email" class="form-control" placeholder="Enter Last Name" />
                </div>

              </div>

            </div>

            <div class="mb-3 mt-2">
              <label for="exampleFormControlInput1" class="form-label">Email address</label>
              <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
            </div>
            <div class="mb-3  mt-2">
              <label for="exampleFormControlTextarea1" class="form-label">Write a Message</label>
              <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>


          </div>

          <div className=" col-md-2 col-lg-2"></div>

          <div className="row">
            <div className=" col-md-4 col-lg-4 "></div>
            <div className="col-sm-12 col-md-4 col-lg-4 text-center  mt-2">
              <button type="button" class="btn btn-danger">SUBMIT</button>



            </div>

            <div className=" col-md-4 col-lg-4 "></div>

          </div>


        </div>
      </div>

    </div>



  )
}
export default Contact