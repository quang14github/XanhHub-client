import { useDispatch } from "react-redux";
import TYPE from "Store/CONSTANT";
import React from 'react'
import { JwtContext } from "./Context";

export default function useSession() {
  
    const saveUser=(user)=>{

        window.localStorage.setItem('session-user',JSON.stringify(user))
    }
    
    

    return {saveUser}
}
export function useRestore(){
    const dispatch = useDispatch();
    const ctx=React.useContext(JwtContext)
    const restoreUser=()=>{
        let fromStorage=window.localStorage.getItem('session-user')
        if(fromStorage!==null){
            fromStorage=JSON.parse(fromStorage)
            const {user,jwt}=fromStorage
            
            dispatch({
                type: TYPE.loginUserOk,
                payload: { userid: user.USER_ID, role: user.USER_ROLE },
              });
            ctx.setJWT(jwt)
            
        }
        
    }
    React.useEffect(()=>{
        restoreUser()
        
    },[])
}