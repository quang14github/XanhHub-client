import React,{useState} from 'react'
import styles from 'Assets/Stylesheets/SCSS/Components/SliderMenu.module.scss'
import leftButton from "Assets/Images/left.svg";

export default function SliderMenu({words,color="primary",type="small",select="one",height=30,radius=0}) {
    const Ref = React.useRef(null);
  const [showLeft, setLeft] = useState(false);
  const [showRight, setRight] = useState(false);
  React.useEffect(()=>{
   if(Ref.current){
    const { scrollWidth } = Ref.current;
    const { width } = Ref.current.getBoundingClientRect();
    if(scrollWidth>width){
        setRight(true)
    }
   }
  },[Ref])
    const onClick = (dir) => {
        return () => {
          if (Ref.current) {
            const { scrollWidth, scrollLeft } = Ref.current;
            const { width } = Ref.current.getBoundingClientRect();
            const check = scrollWidth - (scrollLeft + width);
            if (dir === "left") {
              Ref.current.scrollLeft -= 100;
              if (scrollLeft < 5) {
                setLeft(false);
              } else {
                setLeft(true);
              }
              if (check < 5) {
                setRight(false);
              } else {
                setRight(true);
              }
            } else {
              Ref.current.scrollLeft += 100;
    
              if (scrollLeft < 5) {
                setLeft(false);
              } else {
                setLeft(true);
              }
              if (check < 5) {
                setRight(false);
              } else {
                setRight(true);
              }
            }
          }
        };
      };
    
      React.useEffect(() => {
        let timeout = true;
        const handler = (evt) => {
          evt.preventDefault();
          if (timeout) {
            timeout = false;
            const amount = evt.deltaY;
            Ref.current.scrollLeft += amount * 4;
            const { scrollWidth, scrollLeft } = Ref.current;
            const { width } = Ref.current.getBoundingClientRect();
            const check = scrollWidth - (scrollLeft + width);
            if (scrollLeft < 5) {
              setLeft(false);
            } else {
              setLeft(true);
            }
            if (check < 15) {
              setRight(false);
            } else {
              setRight(true);
            }
            setTimeout(() => {
              timeout = true;
            }, 300);
          }
        };
        Ref.current.addEventListener("wheel", handler);
      }, [Ref]);
    return (
        <div className={styles.keywords}>
        {showLeft && (
          <button
            title="move left"
            className={styles.left}
            onClick={onClick("left")}
          >
            <img src={leftButton} alt="left" />
          </button>
        )}
        <div className={styles.groupWords}  ref={Ref}>
          {[...words].map((e) => (
              <div style={{height:height,}} className={styles.wordItem}>

                  <p style={{borderRadius:radius,backgroundColor:color==="primary"?"var(--button-primary)":'var(--banner-primary-background)'}}>{e.name}</p>
              </div>
          ))}
        </div>
        {showRight && (
          <button
            title="move right"
            onClick={onClick("right")}
            className={styles.right}
          >
            <img
              src={leftButton}
              alt="right"
              style={{ transform: "rotate(180deg)" }}
            />
          </button>
        )}
      </div>
    )
}
