import React from 'react'
import Layout from 'Components/Layout'
import DashBoard from 'Components/DashBoard'
import { useSelector ,useDispatch} from 'react-redux'
import TYPE from 'Store/CONSTANT'
export default function UserPage() {
    const isLogin=useSelector(state=>state.user.logInStatus)
    const dispatch = useDispatch()
    React.useEffect(()=>{
        if(!isLogin){
            dispatch({type:TYPE.tryLoginUser})
        }
    },[isLogin])


   
        return (
            <Layout>
                {isLogin&&<DashBoard/>}
            </Layout>
        )
    }
    

