import React, { useContext, useEffect, useState } from 'react';
import API from '../../../API';
import { Itemcontext } from '../../../context/Itemscon';


const Serch = () => {

    const [brand, setbrand] = useState(null)
    
    const [price, setprice] = useState({

    })
    
    


    const context=useContext(Itemcontext)

    useEffect(() => {
        return (
            API.get(`/api/brand/getBrands`)
                .then(res => {

                    console.log(res.data.data.brands)
                    setbrand(res.data.data.brands)
                })
                .catch(err => {
                    console.log(err)
                })
        )
    }, [])

    const handileprice = (e) => {
        e.preventDefault()
        var upprice = null
        var downprice = null
        if(e.target.value === '1'){
            upprice = 25000
            downprice = 0
        }
        else if(e.target.value === '2'){
            upprice = 50000
            downprice = 25000
        }
        else if(e.target.value === '3'){
            upprice = 100000
            downprice = 50000
        }
        else if(e.target.value === '4'){
           
            downprice = 100000
            upprice = 999999
        }
        else{
            upprice = 0
            downprice = 0
        }
        

        setprice(e.target.value)
        context.setserch({
            ...context.serch,
            upprice: upprice,
            downprice: downprice
        })
    }

    



    return (
        <div className='row justify-content-center m-2 '>

            <form className=' serch-div row ' dir='ltr' >

                <span className='col-5 col-md-3  mt-2 p-0'>
                    <input type="text" placeholder='Serch .... '  onChange={(e)=>context.setserch({
                        ...context.serch,
                        name: e.target.value
                    })}  className='serch p-2 m-2 small' />
                </span>
                <span className='col-5 col-md-2  m-3 p-0'>
                    <select className="form-select " defaultValue={-1} onChange={(e)=>{
                       
                        
                        context.setserch({
                        ...context.serch,
                        brand:e.target.value
                    })}}>
                        <option hidden value={-1} >Brand</option>

                        

                        {
                            brand && brand.map((index) => {
                                return (
                                    <option key={index.id} value={index.id}>{index.name}</option>
                                )
                            })
                        }




                    </select>
                </span>
                <span className='col-4 col-md-2   m-3 p-0'>
                    <select className="form-select " defaultValue={-1} onChange={(e)=>context.setserch({
                        ...context.serch,
                        gender: e.target.value
                    })}>
                        <option hidden value={-1}>Gender</option>
                        <option value={0}>Man</option>
                        <option value={1}>Weman</option>
                        <option value={2}>Foreach</option>
                    </select>
                </span>
                <span className='col-4 col-md-2  m-3 p-0'>
                    <select className="form-select" defaultValue={-1} onChange={handileprice} >

                        <option hidden value={-1} >Price</option>
                        <option value={-1} >{" All"}</option>

                        <option value={'1'}>{' 0 - 25.000 '}</option>
                        <option value={'2'}>{' 25.000 - 50.000 '}</option>
                        <option value={'3'}>{' 50.000 - 100.000 '}</option>
                        <option value={'4'}>{' up to 100.000 '}</option>
                    </select>
                </span>

            </form>
        </div>
    );
}

export default Serch;
