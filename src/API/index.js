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


const getHeaders=(body,method,jwt='')=>{
    return {
        method: method, 
        headers: {
          'Content-Type': 'application/json',
          'Authorization':`Bearer ${jwt}`
        },
        body: JSON.stringify(body)
    }
}