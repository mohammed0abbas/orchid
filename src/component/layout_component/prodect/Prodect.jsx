import React, { useState, useEffect, useContext } from 'react';
import API from '../../../API';
import Loader from '../../../loader/Loader';
import Card from '../card/Card';
import Btn from '../Btn';
import Serch from './Serch';
import img from '../../../image_orched/1.jpg'
import { Itemcontext } from '../../../context/Itemscon';





export default function Prodect() {

    const [items, setitems] = useState([])
    const [load, setload] = useState(true)
    const context = useContext(Itemcontext)
    
    useEffect(()=>{
        
        var apistring = `name=${context.serch.name}&minPrice=${context.serch.downprice}&maxPrice=${context.serch.upprice}&brand=${context.serch.brand}&category=1&gender=${context.serch.gender}`
        API.get(`/api/products/getProduct?${apistring}`)
           .then(res => {
               const item = res.data.data.products;
               setitems(item);
                setload(false)
           })
           .catch(err=>{
               console.log(err)
           })
   },[context])




    return <>



{load ? <Loader></Loader> : 

        <section className='section-card row p-0  m-4'>
           <Serch></Serch>
           

            <div className='d-flex justify-content-between' style={{
                "width": '100%',
                "display": 'flex',
                
                "paddingLeft": '6%',
                'paddingRight': '6%'
            }}>


               
                
                 {/* <span>
                   <Filter_card></Filter_card>
            </span> */}
          
                
            </div>

            <div className="container justify-content-center" >
                <div className="row d-flex justify-content-md-between justify-content-xl-start ">


                    {
                        items.map((index) =>
                            <div key={index.id} className="col-xl-3  d-flex justify-content-center p-0 m-0 col-lg-4 col-sm-6 col-12 mt-4 ">
                               <Card
                                    id={index.id}
                                    price={index.price}
                                    titele={index.name}
                                    prand={index.brand.name}
                                    gender={index.gender}
                                    img={index.image}
                                    oldprice={index.oldPrice}

                                />
                            </div>)
                    }




                </div>
            </div>


           



        </section>
}
    </>;
}
