import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { useState, useEffect } from 'react';


function Order() {






    const dispatch = useDispatch()


    useEffect(() => {
        // dispatch(())



    }, [])

    





    













    return (
        <div>
            <div className="container">
                <div className="row ">
                    <h2>Today Add to Cart</h2>

                    {
                        result.map((ca, i) => {

                            return <div className='col-lg-4 col-sm--12 col-md-4  mt-3  '  >
                                <div className="card" >
                                    <div className="card-body">
                                        <h4 className='text-danger'> {ca.name}  </h4>
                                        <p className='fw-bold  '>RS. {ca.price}</p>
                                        <p className='fw-bold  '>ProductID: {ca._id}</p>
                                        





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


export default AddToCart





