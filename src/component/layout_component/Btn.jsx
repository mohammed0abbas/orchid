import React from 'react'
import { Link } from 'react-router-dom'
import './Btn.css'

export default function Btn(props) {
    return (
        <div>
            <button type="button" className="btn btn-warning " >
 <Link to={props.link} className='link-btn'>
                {props.value}</Link>

            </button>
        



        </div>
    )
}
