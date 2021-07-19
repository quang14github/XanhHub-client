import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
import { useHistory } from "react-router-dom";
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
  const [current, SetCurrent] = React.useState(0);
  return (
    <div className={styles.container}>
      <div className={styles.tabsContainer}>
        {tabs.map((e, i) => (
          <div
            onClick={() => {
              SetCurrent(i);
              url.push(`/user/order/${e.id}`);
            }}
            key={e.id}
            className={`${styles.tabItem} ${
              i === current ? styles.selected : ""
            }`}
          >
            {e.name}
          </div>
        ))}
      </div>
      <Processing />
      <Completed />
      <Canceled />
      {/* <Switch>
        <Route exact path="/user/order/processing"></Route>
      </Switch> */}
    </div>
  );
}
