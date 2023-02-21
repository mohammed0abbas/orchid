import React, { useEffect } from 'react'

import './home.css'
import SectionAdvertising from './home/Section_Advertising'
import Sectioncontact from './home/section_contact/Section_contact'
import SectionCard from './home/sectioncard/SectionCard'
import Loader from '../../loader/Loader'
import { useState } from 'react'
import  Slider from './home/slider/Slider' 





export default function Home() {
    const [load, setload] = useState(true)



    const [lang, setlang] = useState('en')

    const changeLang = (e) => {
        setlang(e.target.value)
    }

    useEffect(() => {
        setTimeout(() => {
            setload(false)
        }, 1000);
    }, [SectionAdvertising, Sectioncontact, SectionCard])



    return (
        <>



            
            <Slider />
            
            {/* <SectionAdvertising /> */}

            <div className="div-home">
                {
                    load ? <Loader /> : <div className="div-continer">




                        

                        <SectionCard />
                        <Sectioncontact />






                    </div>
                }

            </div>



        </>
    )
}
