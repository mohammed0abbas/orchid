import React from 'react'
import { useState, useEffect,useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import API from '../../../API'
import './itemdesc.css'
import Loader from '../../../loader/Loader'

import { Itemcontext } from '../../../context/Itemscon'


export default function ItemDesc() {

  let { id,total,image } = useParams();
  const context = useContext(Itemcontext);
  const navget =useNavigate()
  

  const [item, setitem] = useState({
    image: ''
  })

  const [load, setload] = useState(true)
  const [count, setcount] = useState(0)
  const inc = () => { setcount(count + 1) }
  const dec = () => {
    if (count > 0)
      setcount(count - 1)
  }
  total = count * item.price




  useEffect(() => {
   
    API.get(`/api/products/showProduct?id=${id}`)
      .then(res => {
        const temp = res.data.data;
        setitem(temp);
        image = item.image
       
        setload(false)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])



  const addtocart = (e) => {
    e.preventDefault();
    const item = {
      id: id,
      count: count,
      total: total,
      

    }
    if(count > 0){
    context.cart.addtocart(item);
    navget('/cart')
    }

   
 
    
  }

  return (<>


    {
      load? <Loader/> :

      

      <div className=' p-5 row  d-flex justify-content-center gap-0'>
          
        <div className='col-12 col-md-6 col-xl-5 '>
          <img src={item.image} alt="" className='item-img' width={'100%'} />
        </div>
        <div className='col-12 col-md-6 col-xl-5  div-dec p-5' >
          <div><h1 className='titel-dec'>{item.name} </h1>
          <h5 className='brand-des'>{` ${item.brand.name}`}</h5>
            
           
              
              
               
              
                
               <p className="p-dec">
               {item.description}
            </p>
           
            <div className='d-flex justify-content-center m-4'>
              <span className='btn-inc' onClick={dec}>-</span> <span className='item-count'>{count}</span> <span className='btn-inc' onClick={inc}>+</span>
            </div>
            <h4 className="p-dec">
              {`price : ${item.price} IQD`}
            </h4>


            <div>
              <h4 className='text-center '>{`totale price : ${total} IQD`}</h4>
             
            </div>
            
            <div className='d-flex justify-content-center mt-5'><button  className='btn-add' onClick={addtocart}>Add to card</button>
            </div></div>

        </div>



      </div>
    }
  </>
  )
}