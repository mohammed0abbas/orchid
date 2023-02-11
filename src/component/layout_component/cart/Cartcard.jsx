import React, { useContext } from 'react';
import API from '../../../API';
import ClearIcon from '@mui/icons-material/Clear';
import { Itemcontext } from '../../../context/Itemscon';

const Cartcard = (props) => {
    const [product, setProduct] = React.useState({});
    React.useEffect(() => {
        API.get(`/api/products/showProduct?id=${props.item.id}`)
            .then(res => {
                const temp = res.data.data;
                setProduct(temp);
            }
            )
    }, []);

    const handleincrement = (e) => {
        e.preventDefault()
        context.cart.increment(props.item.id,product.price)
    }
    const handldec = (e) => {
        if(props.item.count > 0){
        e.preventDefault()
        context.cart.decrement(props.item.id,product.price)
        }
        else
        {
            props.deleteItem(props.item.id)
        }
       
    }
    
    const context = useContext(Itemcontext)

    return (

        <div className=" card border-success m-0 mt-5 m-md-5" style={{ "maxWidth": "30rem",'minWidth':'20rem' }}>
            <div className="card-header bg-transparent border-success" >{product.name}
                <span className='' style={{
                    'float': 'right'
                    , cursor: 'pointer',
                }



                } onClick={() => props.deleteItem(props.item.id)}><ClearIcon color={'error'} /></span>

            </div>
            <div className="card-body " >
                <div className="card-title row" >
                    <img className='col-12 col-md-6' src={product.image} alt="" />
                    <span className='col-12 col-md-6  '>
                        <div>
                            <span className='row'>
                                <span className='col-6'>price</span>
                                <span className='col-6'>{product.price}IQD</span>
                            </span>
                            <span className='row'>
                                <span className='col-6'>quantity</span>
                                <span className='col-6'>{props.item.count}</span>
                            </span>
                            <span className='row'>
                                <span className='col-6'>total</span>
                                <span className='col-6'>{props.item.total}IQD</span>
                            </span>
                            <span className='row m-4'>
                                <button className='col-3 inc' onClick={handleincrement} >{'+'}</button>
                                <span className='col-3 count-cart'>{props.item.count}</span>
                                <button className='col-3 inc' onClick={handldec}>{'-'}</button>

                            </span>

                        </div>
                        
                        


                    </span>
                </div>

            </div>
            <div className="card-footer bg-transparent border-success">{`Total : ${props.item.total} IQD`}</div>

        </div>
    );
}

export default Cartcard;
