import React, { useContext } from 'react';
import './card.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { AddShoppingCart } from '@mui/icons-material'
import { AddTask } from '@mui/icons-material'

import { Itemcontext } from '../../../context/Itemscon';


export default function Card(props) {
    const [item,set] = useState(
        {
            id: props.id,
            titele: props.titele,
            img: props.img,
            gender: props.gender,
            prand: props.prand,
            incart: false,
        }
    )
   
    const context = useContext(Itemcontext)

    const incart = context.cart.cartcon.find((item) => item.id === props.id)
    if (incart) {
        item.incart = true
        
    }

    var isman = ''
    if (item.gender === 0) {
        isman = 'man';

    }
    else if (item.gender === 1) {
        isman = 'weman'
    }
    else {
        isman = 'foreach'
    }

    const Navigate = useNavigate()

    const handlink = () => {
        Navigate(`/item/${item.id}`)
    }

    const handladd = () => {
        const itemcart = {
            id: item.id,
            count: 1,
            total: props.price,
            
      
          }
          
          context.cart.addtocart(itemcart);
    }



    return <span>
        <div  className='div-card shadw mb-5 ' dir='rtl'>

            <div className='pman_img'><img src={`${item.img}`} alt="image_item" className='img-card ' width={245} height={245} />
                <p className={`pman ${isman}`}>{isman}</p>
            </div>

            <div className="divcard-2">


                <span className='d-flex justify-content-around m-0 pl-3'>

                    <span className='d-flex justify-content-between'>
                        <h5 className='text-left'>{item.titele}</h5>

                    </span>
                </span>
                <span className=' m-0 pl-3 d-flex justify-content-around'>

                    <p className='price '>{`${props.price} IQD`}</p>
                    {props.oldprice ? (<del className='price-del'>{`${props.oldprice} IQD`}</del>) : null}
                    <p className='prand'>{props.prand}</p>

                </span>




                <span className=' btn-card row'>


                    <span onClick={handlink} className='col-9 span-det det-2'>
                      Details
                    </span>

                    
                    {
                        item.incart ?
                        <span   className='col-3 span-det det'>
                        <AddTask></AddTask> 
                        
                        </span>
                        :
                        
                        <span  onClick={handladd} className='col-3 span-det det'>
                        <AddShoppingCart />
                        </span>
                    }
                    
                    
                    
                     
                    


                    
                </span>

            </div>
        </div>




    </span>;
}
