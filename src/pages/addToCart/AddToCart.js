import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchCart } from '../../store/AddSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { addListener } from '@reduxjs/toolkit';



function AddToCart() {
    const { data, status } = useSelector((state) => state.cardAdd)

    const [Address, setAddress] = useState("")


    const Location = () => {
        const addres = prompt("Enter a Address")
        setAddress(addres)
    }






    const dispatch = useDispatch()


    useEffect(() => {
        dispatch(fetchCart())



    }, [])




    const date = new Date()





    // order place

    const FinalOrder = async (id, name, price) => {
        const baseUrl = process.env.REACT_APP_BASE_URL
        const url = `${baseUrl}/orders/createOrder`;


        await axios.post(url, {
            product: id,

            quantity: "1",
            name: name,
            price: price,
            date: date,
            address: Address,



        }).then((result2, err) => {
            console.log(result2);
            alert("your order done Please wait one Hour  ")
            if (err) {
                console.log(err);
            }
        }


        ).catch(err => { console.log(err); })
    }


    // delete cart
    const deleteCart = (id) => {
        const baseUrl = process.env.REACT_APP_BASE_URL
        axios.delete(`${baseUrl}/orders/deleteOrder/${id}`).then((resp)=>
        rep.filter !=filter
        )




    }

















    return (
        <div>
            <div className="container">
                <div className="row ">
                    <h2>Today Add to Cart</h2>
                    <marquee direction="left" height="100" width="200" Color="red">Location Send Otherwise Order not Done ThankYou</marquee>


                    {
                        data.map((ca, i) => {

                            return <div className='col-lg-4 col-sm--12 col-md-4  mt-3  '  >
                                <div className="card" >
                                    <div className="card-body">
                                        <h4 className='text-danger'> {ca.name}  </h4>
                                        <p className='fw-bold  '>RS. {ca.price}</p>
                                        <br />
                                        <button type='button' className='  btn btn-dark ' onClick={() => Location()}>Location</button>

                                        <br />
                                        <br />
                                        <button type='button' className='  btn btn-primary  fw-bold' onClick={() => deleteCart(ca._id)}>delete</button>

                                        <button type='button' className='  btn btn-danger  fw-bold' onClick={() => FinalOrder(ca._id, ca.name, ca.price)}>Order</button>






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




