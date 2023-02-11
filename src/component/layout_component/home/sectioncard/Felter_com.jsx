import React from 'react';

const FelterCom = () => {
    return (
        <div className='m-5'>
            <input type="text" placeholder='name' className='p-3' />
            <select name="forwhate" id="" defaultValue={2} >
                <option value={0}>man</option>


                <option value={1}>weman</option>
                
                <option value={2}>foreach</option>

            </select>
            <select name="brand" id="" >
                <option value="man">man</option>


                <option value="weman">weman</option>
                <option  selected hidden>brand</option>
                <option value="foreach">foreach</option>

            </select>
            
        </div>
    );
}

export default FelterCom;
