import React from "react";
import styles from "Assets/Stylesheets/SCSS/Pages/LoginPage.module.scss";
import { useDispatch } from "react-redux";
import TYPE from "Store/CONSTANT";
import { loginUser ,signUpUser} from "API";
import { useApplyJWT } from "Hooks/authenHook";
import useSession from 'Hooks/useSession'

export default function LoginPage({canClose}) {
  const [isLogin, setMode] = React.useState(true);
  const {saveUser}=useSession()
  const onSet=useApplyJWT()
  const [user, setUser] = React.useState({
    username: "",
    password: "",
    email: "",
    rePassword: "",
  });
  const dispatch = useDispatch();
  const onChange = (key) => {
    return (e) => {
      setUser((s) => ({ ...s, [key]: e.target.value }));
    };
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      loginUser(user).then((res) => {
        if (!res.err) {
          const { user,jwt } = res;
          dispatch({
            type: TYPE.loginUserOk,
            payload: { userid: user.USER_ID, role: user.USER_ROLE },
          });
          onSet({jwt})
          saveUser(res)
        } else {
          console.log("here");
          alert(res.err);
        }
      });
    }else{

      signUpUser(user).then(res=>{
        console.log(res);
        if (!res.err) {
          const { user,jwt } = res;
          dispatch({
            type: TYPE.loginUserOk,
            payload: { userid: user.USER_ID, role: user.USER_ROLE },
          });
          onSet({jwt})
          saveUser(res)
        } else {
          console.log("here");
          alert(res.err);
        }

      })
    }
  };
  const onClose = () => {
    dispatch({ type: TYPE.exitLoginUser });
  };
  return (
    <div onSubmit={onSubmit} className={styles.container}>
     
     
     {canClose&&<button className={styles.closeButton} onClick={onClose}>
        X
      </button>}

      <form className={styles.formContainer}>
        <input
          type="text"
          value={user.username}
          onChange={onChange("username")}
          placeholder="username"
        />
        {!isLogin && (
          <input
            value={user.email}
            onChange={onChange("email")}
            type="email"
            placeholder="email"
          />
        )}
        <input
          type="password"
          value={user.password}
          onChange={onChange("password")}
          placeholder="password"
        />
        
        <button className="button bg-second" type="submit">
          {isLogin ? "Login" : "Signup"}
        </button>
        <button
          onClick={() => {
            setMode((s) => !s);
          }}
          className="button"
        >
          {isLogin ? "Don't have account?" : "Already Signed up?"}
        </button>
      </form>
       
    </div>
  );
}
