const url='http://207.46.145.28'

exports.loginUser=async({username,password})=>{
    try{
        const data=await fetch(`${url}/v1/user/login`,getHeaders({username,password},"POST")).then(res=>res.json())

        if(data.err) throw new Error(data.err)

        return data
    }catch(e){
        return {err:e.message}
    }
}

exports.createCheckout=async({cart,order_infor,jwt})=>{
    try{
         return await fetch(`${url}/v1/shop/checkout`,getHeaders({cart,order_infor},"POST",jwt)).then(res=>res.json())
            
    }catch(e){
        return {err:true}
    }
}
exports.getHistory=async({filter,jwt})=>{
    try{
       const Header=getHeaders({noBody:true},"GET",jwt)
         return await fetch(`${url}/v1/shop/order?filter=${filter}`,Header).then(res=>res.json())
            
    }catch(e){
        return {err:true}
    }
}
exports.getProductInfor=async({id})=>{
    try{
        return await fetch(`${url}/v1/product/byid?id=${id}`).then(res=>res.json())
    }catch(e){

    }
}
exports.confirmReceived=async({SID,jwt})=>{
    try{
            return await fetch(`${url}/v1/shop/confirm`,getHeaders({SID},"PUT",jwt)).then(res=>res.json())
    }catch(e){
        return {err:e.message}
    }

}
const getHeaders=(body,method,jwt='')=>{
    return {
        method: method, 
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${jwt}`
        },
        body:method!=='GET'? JSON.stringify(body):null
    }
}