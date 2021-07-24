
import { JwtContext } from './Context';
import React from 'react'
import {createCheckout} from 'API/index'
import {getHistory,confirmReceived} from 'API'

export function useApplyJWT(){
    const test=React.useContext(JwtContext)
    const onSetJWT=({jwt})=>{
        console.log('running',test);
        if(test?.setJWT){

            test.setJWT(jwt)
        }
    }
    return onSetJWT
    
}

export function useCreateCheckout(){
    const ctx=React.useContext(JwtContext)
    const onSubmit=async({order_infor,cart})=>{
        return await createCheckout({cart,order_infor,jwt:ctx.jwt}).then(res=>{
            return res
        })
    }

    return onSubmit
}

export function useHistoryCheckout(){
    const {jwt}=React.useContext(JwtContext)
    const onGetHistory=async({filter})=>{
        return await getHistory({filter,jwt}).then(res=>res)
    }

    return onGetHistory
}

export function useReceived(){
    const {jwt}=React.useContext(JwtContext)
    const onConfirm=async({SID})=>{
        return await confirmReceived({SID,jwt}).then(res=>res)
    }

    return onConfirm
}