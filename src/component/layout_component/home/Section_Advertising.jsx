import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import API from '../../../API'
import img3 from '../../../image_orched/1.webp'
import img2 from '../../../image_orched/2.webp'


export default function Section_Advertising(props) {

   

    const [img, setimg] = useState([])



    useEffect(() => {

        API.get(`/api/shop/getAds`)
            .then(res => {
                console.log(res.data.data)
                const img = res.data.data;
                setimg(img);
                


            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const img1 = [];

    img.map(e => {
        return img1.push(e.image)
    })




    return (
        <div>


            <section className='container'>
                <div className="row d-flex justify-content-between justify-content-md-between">
                    {
                        img.map(e => {
                            return <span  className=' mt-4 mt-md-0 col-12 col-md-6 m-0 ' key={e.id}>
                                <Link to={e.url}>
                                <img src={e.image} alt="" className=' col-12  shadow' style={{maxHeight: '400px'}} />
                                </Link>
                            </span>
                        })
                    }

                </div>
            </section>
        </div>
    )
}
