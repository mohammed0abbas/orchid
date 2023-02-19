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



                    <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">

                            {
                                img && img.map((e, i) => {
                                    var x = i === 0 ? 'active' : '';
                                    return <div class="carousel-item x " key={e.id}>
                                        <img src={e.image} class="d-block w-100" alt="..." />
                                    </div>

                                })
                            }
                            {
                                img.map(e => {
                                    return <span className=' mt-4 mt-md-0 col-12 col-md-6 m-0 ' key={e.id}>
                                        <Link to={e.url}>
                                        <div class="carousel-item x " key={e.id}>
                                            <img src={e.image} alt="" className=' col-12  shadow' style={{ maxHeight: '400px' }} />
                                    </div>
                                        </Link>
                                    </span>
                                })
                            }

                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>








                </div>
            </section>
        </div>
    )
}
