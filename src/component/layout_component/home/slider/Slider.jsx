import React,{useEffect,useState} from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import API from '../../../../API'







const Slider = () => {

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







    return (
        <div
        className="slide-container"
        >
            <Zoom indicators={index => <div className="indicator ">{index + 1}</div>} scale={1.4}
            duration={3000}
            >
        
        {
            img && img.map(e => {
                return <div className="each-slide-effect">
                    <a href={e.url}>
                    <div style={{
                       

                        width: '100%',
                        height: '41vw',
                        backgroundImage: `url(${e.image})`,
                        backgroundSize: 'cover',

                    }}>
                        
                     
                    </div>
                    </a>
                </div>
            })
        }
        
    </Zoom>
        </div>
    );
}

export default Slider;
