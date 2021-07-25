import React from "react";
import styles from "Assets/Stylesheets/SCSS/Components/Order.module.scss";
import { getProductInfor } from "API";
import { useReceived } from "Hooks/authenHook";
const Entities = require("html-entities").AllHtmlEntities;
const entities = new Entities();
export default function Processing({ queue, onReiceived }) {
  const onConfirm = useReceived();
  const onClick = (i) => {
    return async () => {
      return await onConfirm({ SID: queue[i].SID }).then((res) => {
        if (res.status) {
          onReiceived({ index: i });
        }

        return true;
      });
    };
  };
  return (
    <div className={styles.content}>
      {queue.map((e, i) => (
        <Product
          onClick={onClick(i)}
          isQueue={true}
          key={`${e.SID}-${e.ORDER_ID} ${e.PRODUCT_ID}`}
          e={e}
        />
      ))}
    </div>
  );
}

const Product = ({
  e,
  isQueue = false,
  isSuccess = false,
  isCancel = false,
  onClick,
}) => {
  const [detail, setDetail] = React.useState({});
  const [lock, setLock] = React.useState(false);
  React.useEffect(() => {
    getProductInfor({ id: e.PRODUCT_ID }).then((res) => {
      if (!res.err) {
        setDetail(res);
      }
    });
  }, [e]);
  React.useEffect(() => {
    if (lock) {
      onClick();
    }
  }, [lock]);
  return (
    <div className={styles.order}>
      <div className={styles.product}>
        <div className={styles.image}>
          <img src={detail?.img} alt="product" />
        </div>
        <div className={styles.info}>
          <div className={styles.nameAndQuantity}>
            <p className={styles.name}>{entities.decode(detail?.NAME)}</p>
            <p className={styles.quantity}>X{e.QUANTITY}</p>
          </div>
          <p className={styles.price}>{parseFloat(e.TOTAL_PRICE).toFixed(2)}</p>
        </div>
      </div>
      <div className={styles.groupButton}>
        {isQueue && (
          <button
            disabled={lock}
            onClick={() => {
              setLock(true);
            }}
          >
            Received
          </button>
        )}
        {isSuccess && <button>Rating</button>}
        {isCancel && <button>Rebuy</button>}
        <p className={styles.total}>
          <strong>Total:</strong>
          <span>
            {(parseFloat(e.TOTAL_PRICE) * parseInt(e.QUANTITY)).toFixed(2)}
          </span>
        </p>
        {/* <div className={styles.buttonGroup}>
        <button className={styles.mainButton}>{e.button}</button>
        <button className={styles.sideButton}>CONTACT SELLER</button>
      </div> */}
      </div>
    </div>
  );
};
export { Product };
