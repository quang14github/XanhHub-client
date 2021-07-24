import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
import { useHistory,useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Processing from "./Order/Processing";
import Completed from "./Order/Completed";
import Canceled from "./Order/Canceled";
import {useHistoryCheckout} from 'Hooks/authenHook'
import { JwtContext } from "Hooks/Context";
const tabs = [
  { name: "Processing", id: "processing",filter:'queue' },
  { name: "Completed", id: "completed",filter:'success'  },
  { name: "Canceled", id: "canceled",filter:'cancel'  },
];
export default function Order() {
  const url = useHistory();
  const ctx=React.useContext(JwtContext)
  const params=useLocation();
  const [now,setNow]=React.useState('')
  const [queue,setQueue]=React.useState([])
  const [success,setSuccess]=React.useState([])
  const [cancel,setCancel]=React.useState([])
  const getHistory=useHistoryCheckout()
  React.useEffect(()=>{
    setNow(params.pathname.split('/')[3]);
  },[params])
  React.useEffect(()=>{
   
  },[])
  React.useEffect(()=>{
if(ctx.jwt!==''){
  getHistory({filter:'queue'}).then(res=>{
    if(!res.err){
        setQueue(res)
    }
  })
  getHistory({filter:'success'}).then(res=>{
    if(!res.err){
        setSuccess(res)
    }
  })
  getHistory({filter:'cancel'}).then(res=>{
    if(!res.err){
        setCancel(res)
    }
  })
}
  },[ctx.jwt])
 

  const onReiceived=({index})=>{
      const found=queue[index]
      setSuccess(s=>[found,...s])
      setQueue(s=>s.filter((e,i)=>i!==index))
  }
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        {tabs.map((e, i) => (
          <div
            onClick={() => {
              url.push(`/user/order/${e.id}`);
            }}
            key={e.id}
            className={`${styles.tabItem} ${
              now===e.id ? styles.selected : ""
            }`}
          >
            {e.name}
          </div>
        ))}
      </div>
      <Switch>
        <Route exact path="/user/order/processing">
      <Processing onReiceived={onReiceived} queue={queue} />

        </Route>
        <Route exact path="/user/order/completed">
      <Completed success={success} />

        </Route>
        <Route exact path="/user/order/canceled">
      <Canceled cancel={cancel} />

        </Route>
      </Switch>
    </div>
  );
}
