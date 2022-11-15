import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component.module.css";

const Component = () => {
  const navigate = useNavigate();

  const onRectangle1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onAMAFITTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onBackTextClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImage52Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.rectangleDiv} />
      <div className={styles.div1}>ไข่</div>
      <div className={styles.div2}>{`นายกอไก่ `}</div>
      <div className={styles.div3}>ไข่หวาน</div>
      <div className={styles.div4}>180</div>
      <div className={styles.div5}>65</div>
      <div className={styles.cmDiv}>cm.</div>
      <div className={styles.kgDiv}>kg.</div>
      <div className={styles.dummygmailcomDiv}>Dummy@gmail.com</div>
      <div className={styles.rectangleDiv1} onClick={onRectangle1Click} />
      <div className={styles.editDiv}>Edit</div>
      <div className={styles.uploadDiv}>{`Upload `}</div>
      <div className={styles.profilePictureDiv}>Profile Picture</div>
      <div className={styles.rectangleDiv2} />
      <b className={styles.aMAFITB} onClick={onAMAFITTextClick}>
        <p className={styles.aMAFITP}>
          <span>{`AMA `}</span>
          <span className={styles.fITSpan}>FIT</span>
        </p>
      </b>
      <b className={styles.profileB}>Profile</b>
      <img className={styles.image19Icon} alt="" src="../image-19@2x.png" />
      <div className={styles.rectangleDiv3} />
      <div className={styles.backDiv} onClick={onBackTextClick}>
        Back
      </div>
      <img
        className={styles.image52Icon}
        alt=""
        src="../image-51@2x.png"
        onClick={onImage52Click}
      />
      <div className={styles.displayNameDiv}>Display Name</div>
      <div className={styles.rectangleDiv4} />
      <div className={styles.testaddressDiv}>testaddress</div>
      <div className={styles.lastnameDiv}>Lastname :</div>
      <div className={styles.displayName}>Display name :</div>
      <div className={styles.emailDiv}>Email :</div>
      <div className={styles.addressDiv}>Address :</div>
      <div className={styles.heightDiv}>Height :</div>
      <div className={styles.weightDiv}>Weight :</div>
      <div className={styles.nameDiv}>Name :</div>
      <img className={styles.polygonIcon} alt="" src="../polygon-5.svg" />
    </div>
  );
};

export default Component;
