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


const getHeaders=(body,method)=>{
    return {
        method: method, 
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }
}