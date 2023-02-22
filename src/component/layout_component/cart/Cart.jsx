import React, { useEffect, useState } from 'react';
import './cart.css'
import Cartcard from './Cartcard';
import { useContext } from 'react';
import { Itemcontext } from '../../../context/Itemscon';
import API from '../../../API';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = () => {
    const [info, setinfo] = useState({
        totalprice: 0,
        discount: 0,
        totaldicount: 0,
        phone: '',
        address: '',
        promo: '',
        name: '',
        shippingId: 1


    })

    const [getShippings, setgetShippings] = useState([])

    const context = useContext(Itemcontext);
    const Navigate = useNavigate()
    useEffect(() => {
        API.get('api/shop/getShippings').then(res => {
            setgetShippings(res.data.data)
        })
        console.log(context.cart.cartcon)
        const temp = context.cart.cartcon ? context.cart.cartcon : [];
        let totalprice = 0;
        let discount = info.discount;
        let totaldicount = 0;
        temp.forEach((item) => {
            totalprice += item.total

            discount ? totaldicount = totalprice - totalprice * discount / 100 : totaldicount = totalprice


        })


        setinfo({
            ...info,
            totalprice: totalprice,
            discount: discount,
            totaldicount: totaldicount
        })

    }, [info.totalprice, info.discount, info.totaldicount, context])




    const [cards, setcard] = useState([]);
    React.useEffect(() => {

        setcard(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);
        console.log(cards)

    }, [context]);

    const deleteItem = (id) => {
        context.cart.removefromcart(id)
    }



    const handlpromo = (e) => {
        e.preventDefault();
        API.get(`/api/shop/checkPromo?promo=${info.promo}`)
            .then(res => {

                const temp = res.data.data;
                if (temp) {
                    setinfo({
                        ...info,
                        discount: temp.discount,
                        promo: temp.code
                    })
                }
                else {
                    setinfo({
                        ...info,
                        discount: 0
                    })
                }
            })
            .catch(err => {
                console.log(err)
            })
    }

    const handlsupmit = (e) => {
        e.preventDefault();
        const temparr = [];
        cards.forEach((item) => {
            var x = ''
            x = item.id.toString()
            temparr.push({
                pid:x,
                count: item.count
            })
        })


        const temp = {
            "products":temparr ,
            "promo": info.promo,
            "name": info.name,
            "phone": info.phone,
            "address": info.address,
            "shippingId": info.shippingId,
        }

    if(!(info.name===''||info.phone===''||info.address==='' || temparr.length === 0)){
        API.post('/api/shop/checkOut', temp
        
        )
            .then(res => {
                console.log(res.data)
                context.cart.clearcart();
                setcard([]);
                e.target.reset();
                setinfo({
                    totalprice: 0,
                    discount: 0,
                    totaldicount: 0,
                    phone: '',
                    address: '',
                    promo: '',
                    name: ''
                })
                Navigate('/')

                
            })
            .catch(err => {
                console.log(err)
            })}
    }








    return (
        <div className='rel-pos'>
            <div className="row d-flex m-md-5 justify-content-center">
                <div className="col-11 col-md-6">

                    <div>
                        {cards.map((item) => {
                            return <Cartcard key={item.id} item={item} deleteItem={deleteItem} />
                        })
                        }

                    </div>
                </div>
                <div className="cart-info col-12 col-md-5 mt-5">
                    <h3>Cart information</h3>
                    <h5 className='h6'>{`total price : ${info.totalprice} IDQ`}</h5>
                    <span className='span-promo'>

                        <input type="text" className='promo ' onChange={e => {
                            setinfo({
                                ...info,
                                promo: e.target.value
                            })
                        }} />
                        <button className={`btn-promo chick chick${info.discount}`} onClick={handlpromo}>chick</button>

                    </span>
                    <h5 className='h6'>{`Discount : ${info.discount} %`}</h5>
                    <h5 className='h6 '>{`total price : ${info.totaldicount} IQD`}</h5>
                    <hr algin={'center'} width={'50%'} />

                    <form className='col-12 col-md-6' Validate onSubmit={handlsupmit}>

                        <span className='span-promo'>

                            <input type="text" className='promo '
                                placeholder=' phone number'

                                onChange={e => {
                                    setinfo({
                                        ...info,
                                        phone: e.target.value
                                    })

                                }} />


                        </span>
                        <span className='span-promo '
                        style={{
                            borderRadius: '16px',
                        }}
                        >
                            <select name="getshop" id="" className='promo'
                            style={{
                                borderRadius: '8px',
                                transform: 'translatex(-5px)',
                                margin: '5px 0',
                            }}
                            onChange={e=>{
                                setinfo({
                                    ...info,
                                    shippingId: e.target.value
                                })
                            }}
                            >
                                {getShippings.map((item) => {
                                    const temp = item.id === 1 ? true : false
                                    return <option selected={temp} value={item.id} >{`${item.price}  ${item.name}`}</option>
                                })}
                            </select>
                        </span>

                        <span className='span-promo'>

                            <input type="text" className='promo '
                                placeholder=' address'
                                onChange={e => {
                                    setinfo({
                                        ...info,
                                        address: e.target.value
                                    })
                                }} />


                        </span>

                        <span className='span-promo'>

                            <input type="text" className='promo '
                                pattern='*'
                                placeholder=' name'
                                onChange={e => {
                                    setinfo({
                                        ...info,
                                        name: e.target.value
                                    })
                                }} />


                        </span>
                        <span className='span-promo'>

                            <input type='submit' className='promo  supmit-chik ' value={'supmit'} />


                        </span>



                    </form>

                </div></div>
        </div>
    );
}

export default Cart;
