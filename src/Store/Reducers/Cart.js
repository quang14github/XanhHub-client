import TYPE from '../CONSTANT'


const defaultState={
    cart:[],
    status:false,
    lastUpdate:null
}

const cart=(state=defaultState,action)=>{
    if(action.type===TYPE.addToCart){
        const newCart=[...state.cart.filter(e=>e.id!==action.payload.id),action.payload]
        return {...state,cart:newCart}
    }

    return state
}


export default cart