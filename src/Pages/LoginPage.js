import React from "react";
import styles from "Assets/Stylesheets/SCSS/Pages/LoginPage.module.scss";
import { useDispatch } from "react-redux";
import TYPE from "Store/CONSTANT";
import { loginUser } from "API";

export default function LoginPage({canClose}) {
  const [isLogin, setMode] = React.useState(true);
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
          const { user } = res;
          dispatch({
            type: TYPE.loginUserOk,
            payload: { userid: user.USER_ID, role: user.USER_ROLE },
          });
        } else {
          console.log("here");
          alert(res.err);
        }
      });
    }
  };
  const onClose = () => {
    dispatch({ type: TYPE.exitLoginUser });
  };
  return (
    <div onSubmit={onSubmit} className={styles.container}>
     
     


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
        {!isLogin && (
          <input
            value={user.rePassword}
            onChange={onChange("rePassword")}
            type="password"
            placeholder="re-password"
          />
        )}
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
        {canClose&&<button onClick={onClose}>
        close
      </button>}
    </div>
  );
}
