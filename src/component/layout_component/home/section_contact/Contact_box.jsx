import React from 'react';

export default function Contact_box(props) {
    return <div className='box-contact flex-column ' id={props.id} >




        <h4 className='dark-hader'>{props.name}</h4>


        <a href={props.link} style={{'textDecoration':'none','color':'#676f77'}}>
        <div className='d-flex gap-2'>
            <img className='mr-4' src={props.img1} alt="" />
            <h5 >{props.contact1}</h5>
        </div>
        </a>

        {   
            props.img2 && <a href={props.link1} style={{'textDecoration':'none','color':'#676f77'}}>
            <div className='d-flex gap-2'>
                <img src={props.img2} alt="" />
                <h5>{props.contact2}</h5>
            </div>
            </a>

        }
        {
            props.img3 && <a href={props.link2} style={{'textDecoration':'none','color':'#676f77'}}>
                <div className='d-flex gap-2'>
                <img src={props.img3} alt="" />
                <h5>{props.contact3}</h5>
            </div>
            </a>
        }


    </div>;
}
