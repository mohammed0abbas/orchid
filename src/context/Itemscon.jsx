import { useState, createContext, React, useEffect } from "react";




export const Itemcontext = createContext()

const Itemscxtprovider = (props) => {

   
    const [cartcon, setcart] = useState([])
    const [serch, setserch] = useState({
        name:'',
        gender:'',
        brand:'',
        upprice:'',
        downprice:''
    })


    // const serchapi = () => {
    //    const api = ''
    //      if(serch.name){
    //          api = api + `&name=${serch.name}`
    //      }

    //         if(serch.price){
    //             api = api + `&price=${serch.price}`
    //         }

    //     if(serch.brand){
    //         api = api + `&brand=${serch.brand}`
    //     }
    //     if(serch.gender){
    //         api = api + `&gender=${serch.gender}`
    //     }
    //     return api
    // }

    useEffect(() => {
        removezero()
        if (!localStorage.getItem('cart')) {
            localStorage.setItem('cart', JSON.stringify([]))
        }
        const cart = JSON.parse(localStorage.getItem('cart'))
        if (cart) {
            setcart(cart)
        }



    }, []);




    const addtocart = (item) => {


        //check if item is already in cart
        const temp = [...cartcon]

        const index = temp.findIndex((item1) => item1.id === item.id)
        if (index === -1) {
            temp.push(item)
            setcart(temp)
            localStorage.setItem('cart', JSON.stringify(temp))
           
        }
        else {
            temp[index].count = temp[index].count + item.count
            temp[index].total = temp[index].total + item.total
            setcart(temp)
            localStorage.setItem('cart', JSON.stringify(temp))
        }


    }
    const increment = (id,price) => {
        const temp = [...cartcon]
        const index = temp.findIndex((item1) => item1.id === id)
        if (index !== -1) {
            temp[index].count = temp[index].count + 1
            temp[index].total = temp[index].total + price
            setcart(temp)
            localStorage.setItem('cart', JSON.stringify(temp))
        } else {
            console.log('error')
        }
    }
    const decrement = (id,price) => {
        const temp = [...cartcon]
        const index = temp.findIndex((item1) => item1.id === id)
        if (index !== -1) {
            temp[index].count = temp[index].count - 1
            temp[index].total = temp[index].total - price
            setcart(temp)
            localStorage.setItem('cart', JSON.stringify(temp))
        } else {
            console.log('error')
        }
    }



    const removezero = () => {
       
        const temp = [...cartcon]
        const index = temp.filter((item1) => (item1.count !== 0) || (item1.total !== 0))
        setcart(index)
        

    }


    const removefromcart = (id) => {
        const temp = [...cartcon]
        const index = temp.findIndex((item1) => item1.id === id)
        if (index !== -1) {
            temp.splice(index - 1, 1)
            setcart(temp)
            localStorage.setItem('cart', JSON.stringify(temp))
        }



    }

    const clearcart = () => {
        setcart([])
        localStorage.setItem('cart', JSON.stringify([]))
    }

    return (

        <div>
            <Itemcontext.Provider value={{serch,setserch, cart: { cartcon, addtocart, removefromcart,increment,decrement,clearcart } }}>
                {props.children}
            </Itemcontext.Provider>
        </div>



    );
}

export default Itemscxtprovider;
