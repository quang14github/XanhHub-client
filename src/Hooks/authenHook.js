
import { JwtContext } from './Context';
import React from 'react'
import {createCheckout} from 'API/index'
import {getHistory} from 'API'

export function useApplyJWT(){
    const test=React.useContext(JwtContext)
    const onSetJWT=({jwt})=>{
        
        test.setJWT(jwt)
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
        
    }

    return onGetHistory
}