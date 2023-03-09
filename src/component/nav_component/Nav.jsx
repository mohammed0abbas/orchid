import React, { useState, useContext } from 'react'
import './nav.css';
import logo1 from '../../image_orched/logo.png'

import { NavLink, Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import { Itemcontext } from '../../context/Itemscon';



export default function Nav() {


    const Itemcon = useContext(Itemcontext)
    const [dropdownclass, setdropdown] = useState('close');
    const [temp, settemp] = useState(0);
    React.useEffect(() => {
        settemp(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')).length : 0)
    }, [Itemcon.cart])




    const handldrop = (e) => {
        e.preventDefault();
        if (dropdownclass === "close")
            setdropdown("open");
        else
            setdropdown('close')
    }


    return (
        <div className='div-con'>

            <nav className=''>
                <div className='row'>

                    <img src={logo1} alt="" className='col-6 col-md-6 col-lg-4'/>
                </div>
                
                <span className='cart-span'>
                    <Link to='/cart'>
                    <IconButton aria-label="Example" >
                        <ShoppingCartIcon color="action" />
                        { 
                            temp > 0 && <span className='cart-span-count'>{temp}</span>
                        
                        }

                    </IconButton></Link>
                </span>


                <div className='nav_link larg-screen' dir='rtl' >
                    <NavLink activeclassname="active" to={"/"} className='m-3 link-nav' >Home</NavLink>
                    <NavLink activeclassname="active" to={"/prodect"} className='m-3 link-nav' >prodect</NavLink>
                    <NavLink activeclassname="active" to={"/contact"} className='m-3 link-nav' >{'contact'}</NavLink>
                    <NavLink activeclassname="active" to={"/other"} className='m-3 link-nav' >other </NavLink>
                  

                </div>

                <div className="medlle-screen" >
                    <div className={dropdownclass} onClick={handldrop}>
                        <div className='dropdown dropdown1'></div>
                        <div className='dropdown dropdown2'></div>
                        <div className='dropdown dropdown1'></div>
                    </div>

                    {(dropdownclass === "open") && <ul>
                        <li><NavLink onClick={() => { setdropdown('close') }} activeclassname="active" to={"/"} className='m-3 link-nav' >Home</NavLink>  </li>
                        <li><NavLink onClick={() => { setdropdown('close') }} activeclassname="active" to={"/prodect"} className='m-3 link-nav' >Prodect</NavLink> </li>
                        <li><NavLink onClick={() => { setdropdown('close') }} activeclassname="active" to={"/contact"} className='m-3 link-nav' >contact us </NavLink></li>
                        <li><NavLink onClick={() => { setdropdown('close') }} activeclassname="active" to={"/other"} className='m-3 link-nav' >other</NavLink></li>


                    </ul>}</div>
            </nav>



        </div>
    )
}
