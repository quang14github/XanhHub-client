import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Checkout.module.scss";
const shipList = [
  { name: "Slow", id: "slow" },
  { name: "Medium", id: "medium" },
  { name: "Fast", id: "fast" },
];
const payList = [
  { name: "Internet Banking", id: "ipay" },
  { name: "Momo", id: "momo" },
  { name: "Khi nhận hàng", id: "later" },
];
export default function Checkout({ onSubmit,lock,setLock }) {
  const [infor, setInfor] = React.useState({
    ship: "slow",
    payment: "ipay",
    address: "",
    discount: "",
  });

  React.useEffect(() => {
    
    if (lock) {
      onSubmit({ order_infor: infor });
    }
  }, [lock]);

  const onChange = (key, select) => {
    return (e) => {
     if(!lock){
      setInfor((s) => ({ ...s, [key]: select || e.target.value }));
     }
    };
  };
  return (
    <div className={styles.container}>
      <div className={styles.groupShip_Payment}>
        <div className={`${styles.group}`}>
          <p> shipping method</p>
          <div className={styles.list}>
            {shipList.map((e) => (
              <div
                onClick={onChange("ship", e.id)}
                className={styles.listItem}
                key={e.id}
              >
                {e.name}
                {e.id === infor.ship && (
                  <div className={styles.itemchecked}>&#10004;</div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.group}>
          <p> payment method</p>
          <div className={styles.list}>
            {payList.map((e) => (
              <div
                onClick={onChange("payment", e.id)}
                className={styles.listItem}
                key={e.id}
              >
                {e.name}
                {e.id === infor.payment && (
                  <div className={styles.itemchecked}>&#10004;</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.groupAdd_Button}>
        <div className={styles.group}>
          <p>more</p>
          <form>
            <fieldset className>
              <legend>Address</legend>
              <input
              
                value={infor.address}
                onChange={onChange("address")}
                required
                type="text"
                placeholder="Where to receive"
              />
            </fieldset>
            <fieldset>
              <legend>Discount</legend>
              <input
              
                value={infor.discount}
                onChange={onChange("discount")}
                required
                type="text"
                placeholder="vd: FREE123"
              />
            </fieldset>
          </form>
        </div>
        <div className={styles.group}>
          <button
            onClick={() => {
              setLock(true);
            }}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
}
