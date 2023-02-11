
import React, { useState, useEffect, useContext } from 'react';
import Card from '../../card/Card';
import API from '../../../../API';
import Btn from '../../Btn';

import './sectioncard.css'
import Serch from '../../prodect/Serch';

import { Itemcontext } from '../../../../context/Itemscon';





export default function SectionCard(props) {



    const items = useContext(Itemcontext)
    const [item, setitem] = useState([])




    useEffect(() => {
        const context = items
        var apistring = `name=${context.serch.name}&minPrice=${context.serch.downprice}&maxPrice=${context.serch.upprice}&brand=${context.serch.brand}&category=1&gender=${context.serch.gender}`

        API.get(`/api/products/getProduct?${apistring}`)
            .then(res => {
                const item = res.data.data.products;
                setitem(item);


            })
            .catch(err => {
                console.log(err)
            })
    }, [items])







    return <div>
        
        <section className='section-card row p-0  m-4'>

           
            <Serch></Serch>
         

            <div className=' d-flex p-md-5 mt-4 justify-content-center' >


          
                    <h1>Prodect</h1>
               
    
            </div>

            <div className="container justify-content-center" >
                <div className="row d-flex justify-content-between justify-content-xl-start ">


                    {
                        item.map((index, key) =>
                            key < 16 &&
                            <div key={index.id} className=" col-xxl-3  d-flex justify-content-center p-0 m-0 col-lg-4 col-sm-6 col-6 mt-4 ">
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



            <div className=' d-flex p-md-5 justify-content-center' >


               
                <span>
                    <Btn value=" More" link='/prodect' />
                </span>

                


            </div>






        </section>

    </div>;
}

