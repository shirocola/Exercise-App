import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Component1.module.css";

const Component1 = () => {
  const navigate = useNavigate();

  const onRectangle10Click = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onEditTextClick = useCallback(() => {
    navigate("/1");
  }, [navigate]);

  const onImage51Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.div}>
      <div className={styles.rectangleDiv} />
      <div className={styles.nameDiv}>Name :</div>
      <div className={styles.lastnameDiv}>Lastname :</div>
      <div className={styles.rectangleDiv1} />
      <div className={styles.div1}>{`นายกอไก่ `}</div>
      <div className={styles.rectangleDiv2} />
      <div className={styles.rectangleDiv3} />
      <div className={styles.rectangleDiv4} />
      <div className={styles.div2}>ไข่หวาน</div>
      <div className={styles.rectangleDiv5} />
      <div className={styles.div3}>*</div>
      <div className={styles.div4}>*</div>
      <div className={styles.displayName}>Display name :</div>
      <div className={styles.rectangleDiv6} />
      <div className={styles.div5}>ไข่</div>
      <div className={styles.div6}>*</div>
      <div className={styles.div7}>*</div>
      <div className={styles.rectangleDiv7} />
      <div className={styles.rectangleDiv8} />
      <b className={styles.uploadB}>{`Upload `}</b>
      <div className={styles.emailDiv}>Email :</div>
      <div className={styles.addressDiv}>Address :</div>
      <div className={styles.profilePictureDiv}>Profile Picture</div>
      <div className={styles.rectangleDiv9} />
      <img className={styles.image5Icon} alt="" src="../image-5@2x.png" />
      <b className={styles.aMAFITB}>
        <p className={styles.aMAFITP}>
          <span>{`AMA `}</span>
          <span className={styles.fITSpan}>FIT</span>
        </p>
      </b>
      <b className={styles.editProfileB}>Edit Profile</b>
      <img className={styles.image20Icon} alt="" src="../image-19@2x.png" />
      <div className={styles.rectangleDiv10} onClick={onRectangle10Click} />
      <b className={styles.back}>Back</b>
      <b className={styles.editB} onClick={onEditTextClick}>
        Edit
      </b>
      <div className={styles.testaddressDiv}>testaddress</div>
      <div className={styles.heightDiv}>Height :</div>
      <div className={styles.weightDiv}>Weight :</div>
      <div className={styles.cmDiv}>cm.</div>
      <div className={styles.kgDiv}>kg.</div>
      <div className={styles.div8}>65</div>
      <div className={styles.div9}>180</div>
      <img
        className={styles.image51Icon}
        alt=""
        src="../image-511@2x.png"
        onClick={onImage51Click}
      />
      <div className={styles.somyingswegenerationcomDiv}>
        somying.swe@generation.com
      </div>
      <img className={styles.polygonIcon} alt="" src="../polygon-5.svg" />
      <div className={styles.displayNameDiv}>Display Name</div>
    </div>
  );
};

export default Component1;
