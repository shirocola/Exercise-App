import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  const navigate = useNavigate();

  const onRectangle4Click = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  const onRectangle5Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onSignInTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.loginDiv}>
      <div className={styles.rectangleDiv} />
      <div className={styles.rectangleDiv1} />
      <b className={styles.aMAFITB}>
        <span>{`AMA `}</span>
        <span className={styles.fITSpan}>FIT</span>
      </b>
      <b className={styles.loginB}>Login</b>
      <b className={styles.passwordB}>Password:</b>
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <b className={styles.emailB}>Email :</b>
      <div className={styles.rectangleDiv4} onClick={onRectangle4Click} />
      <div className={styles.rectangleDiv5} onClick={onRectangle5Click} />
      <b className={styles.registerB}>Register</b>
      <b className={styles.signInB} onClick={onSignInTextClick}>
        Sign in
      </b>
      <div className={styles.forgotPasswordDiv}>forgot password?</div>
      <img className={styles.arrowIcon} alt="" src="../arrow-1.svg" />
      <div className={styles.aMAFITDiv}>
        <span>AMA</span>
        <span className={styles.span}>{`     `}</span>
        <span className={styles.fITSpan1}>FIT</span>
      </div>
      <img className={styles.icon} alt="" src="../3-1@2x.png" />
      <img className={styles.image51Icon} alt="" src="../image-51@2x.png" />
    </div>
  );
};

export default Login;
