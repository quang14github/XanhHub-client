import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
import { useHistory,useLocation } from "react-router-dom";
import { Route, Switch } from "react-router-dom";
import Processing from "./Order/Processing";
import Completed from "./Order/Completed";
import Canceled from "./Order/Canceled";
const tabs = [
  { name: "Processing", id: "processing" },
  { name: "Completed", id: "completed" },
  { name: "Canceled", id: "canceled" },
];
export default function Order() {
  const url = useHistory();
  const params=useLocation();
  const [now,setNow]=React.useState('')
  React.useEffect(()=>{
    setNow(params.pathname.split('/')[3]);
  },[params])
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
      <Processing />

        </Route>
        <Route exact path="/user/order/completed">
      <Completed />

        </Route>
        <Route exact path="/user/order/canceled">
      <Canceled />

        </Route>
      </Switch>
    </div>
  );
}
