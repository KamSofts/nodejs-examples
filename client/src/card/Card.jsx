import userPic from "../assets/hero.png";
import Styles from "./Card.module.css";

const Card = () => {
    return(
        <div className={Styles.card}>
            <img src={userPic} alt="User Image" className={Styles.cardImage} />
            <h2 className={Styles.cardTitle}>User Name</h2>
            <p className={Styles.cardText}>Description about user like profession, hobby., etc.,</p>
        </div>
    );
};

export default Card;