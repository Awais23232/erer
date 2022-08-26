import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../../store/productSlice';
import { useState, useEffect } from 'react';


import axios from 'axios';


function GetProduct() {
  const { data, status } = useSelector((state) => state.product)






  const dispatch = useDispatch()


  useEffect(() => {
    dispatch(fetchProduct())



  }, [])


  // Order Now


  const createCart = async (id, name, price) => {
    const url = "https://finalpractise.herokuapp.com/carts/createCart";


    await axios.post(url, {
      product: id,

      quantity: "1",
      name: name,
      price: price,




    }).then((result2, err) => {
      console.log(result2);
      if (err) {
        console.log(err);
      }
    }


    ).catch(err => { console.log(err); })
  }




  return (
    <div>
      <div className="container">
        <div className="row ">

          {
            data.map((cat, i) => {

              return <div className='col-lg-4 col-sm--12 col-md-4  mt-3  '  >
                <div className="card" >
                  <img src={cat.image} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h4 className='text-danger'> {cat.name}  </h4>

                    <p className="card-text">{cat.description}</p>
                    <p className='fw-bold  '>RS. {cat.price}</p>

                    <button type='button' className='btn btn-danger' onClick={() => createCart(cat._id, cat.name, cat.price,)}>Add to Cart</button>



                  </div>

                </div>
              </div>


            })
          }


        </div>


      </div>


    </div>





  )
}


export default GetProduct



