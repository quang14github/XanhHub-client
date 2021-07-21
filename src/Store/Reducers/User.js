import TYPE from '../CONSTANT'
const defaultState={
    userid:null,
    logInStatus:false,
    role:null,
    tryLogin:false,
    

}


const user=(state=defaultState,action)=>{
    if(action.type===TYPE.tryLoginUser){
        return {...state,tryLogin:true}
    }else if(action.type===TYPE.exitLoginUser){
        return {...state,tryLogin:false}
    }else if(action.type===TYPE.loginUserOk){
        return {...state,...action.payload,logInStatus:true,tryLogin:false}
    }else if(action.type===TYPE.logOutUser){
        return defaultState
    }
    return state
}

export {user}