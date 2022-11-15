import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  const navigate = useNavigate();

  const onRectangle9Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const onConfirmTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImage51Click = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  return (
    <div className={styles.register}>
      <div className={styles.rectangleDiv} />
      <b className={styles.createANewAccount}>Create a new account</b>
      <div className={styles.passwordDiv}>Password :</div>
      <div className={styles.nameDiv}>Name :</div>
      <div className={styles.lastnameDiv}>Lastname :</div>
      <div className={styles.heightDiv}>Height :</div>
      <div className={styles.cmDiv}>cm.</div>
      <div className={styles.kgDiv}>kg.</div>
      <div className={styles.weightDiv}>Weight :</div>
      <div className={styles.rectangleDiv1} />
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.rectangleDiv4} />
      <div className={styles.rectangleDiv5} />
      <div className={styles.rectangleDiv6} />
      <div className={styles.rectangleDiv7} />
      <div className={styles.ex120019thStreetNWSuite}>
        <p className={styles.ex120019th}>ex. 1200 19th Street, NW Suite 1110</p>
        <p className={styles.washingtonDC20036}>Washington, DC 20036</p>
      </div>
      <div className={styles.ex123456Div}>ex.123456</div>
      <div className={styles.exDiv}>ex. สมหญิง</div>
      <div className={styles.exDiv1}>ex. กินขนมหวาน</div>
      <div className={styles.ex160Div}>ex. 160</div>
      <div className={styles.ex48Div}>ex. 48</div>
      <div className={styles.exSomyingswegenerationcomDiv}>
        ex. somying.swe@generation.com
      </div>
      <div className={styles.rectangleDiv8} />
      <div className={styles.rectangleDiv9} onClick={onRectangle9Click} />
      <div className={styles.rectangleDiv10} />
      <b className={styles.confirmB} onClick={onConfirmTextClick}>
        Confirm
      </b>
      <div className={styles.uploadDiv}>{`Upload `}</div>
      <div className={styles.addressDiv}>Address :</div>
      <div className={styles.profilePictureDiv}>Profile Picture</div>
      <div className={styles.rectangleDiv11} />
      <b className={styles.aMAFITB}>
        <p className={styles.ex120019th}>
          <span>{`AMA `}</span>
          <span className={styles.fITSpan}>FIT</span>
        </p>
      </b>
      <b className={styles.cancleB}>Cancle</b>
      <div className={styles.div}>*</div>
      <div className={styles.div1}>*</div>
      <div className={styles.div2}>*</div>
      <div className={styles.div3}>*</div>
      <img
        className={styles.image51Icon}
        alt=""
        src="../image-51@2x.png"
        onClick={onImage51Click}
      />
      <div className={styles.emailDiv}>Email :</div>
      <div className={styles.rectangleDiv12} />
      <div className={styles.displayName}>Display name :</div>
      <div className={styles.div4}>*</div>
      <div className={styles.measurementsDiv}>
        <div className={styles.lineDiv}>
          <img className={styles.vectorIcon} alt="" src="../vector.svg" />
          <div className={styles.labelDiv}>
            <b className={styles.pxB}>488px</b>
          </div>
          <div className={styles.lineDiv1} />
          <div className={styles.lineDiv2} />
        </div>
        <div className={styles.lineDiv3}>
          <img className={styles.vectorIcon1} alt="" src="../vector1.svg" />
          <div className={styles.labelDiv1}>
            <b className={styles.pxB}>576px</b>
          </div>
          <div className={styles.lineDiv4} />
          <div className={styles.lineDiv5} />
        </div>
      </div>
    </div>
  );
};

export default Register;
