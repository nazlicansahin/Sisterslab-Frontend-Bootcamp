import CoinHead from '../../../public/head.png';
import CoinTail from '../../../public/tail.png';


import styles from "./Coin.module.css"
const Coin = (props) => {
    const { currentStatus, rotate } = props;

    return (
        <div className={styles.CoinContainer}>
            <div className={`${styles.Coin} ${rotate && styles.CoinRotate}`}>
                <img
                    src={CoinTail}
                    alt=""
                    className={currentStatus === 'Heads' ? styles.CoinBack : styles.CoinFront}
                ></img>
                <img
                    src={CoinHead}
                    alt=""
                    className={currentStatus === 'Tails' ? styles.CoinFront : styles.CoinBack}
                ></img>
            </div>
        </div>
    );
};

export default Coin;