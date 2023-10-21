import { useState } from "react";
import "./CoinFlipper.module.css";
import Coin from "./Coin";

const options = ["Heads", "Tails"];


//Random Item
const getRandomElFromArray = (arr) => {
    const randomItem = arr[Math.floor(Math.random() * arr.length)];
    return randomItem
};
const CoinFlipper = () => {
    const [rotate, setRotate] = useState(false);
    const [currentStatus, setCurrentStatus] = useState(options[0]);
    const [result, setResult] = useState([]);



    const start = () => {
        setRotate(true);
        const randomElement = getRandomElFromArray(options);
        setTimeout(() => {
            setCurrentStatus(randomElement);
            setResult([...result, randomElement]);
            setRotate(false);
        }, 1000);
    }
    return (
        <>
            <h1>Yazı Tura</h1>
            <Coin currentStatus={currentStatus} rotate={rotate} />
            <button type="button" className="btn btn-primary m-4 mr-2 " onClick={start}>Flip</button>
            {/* Tura geldi

      Toplam 24 atış yapıldı

      11 kez Yazı geldi

      13 kez Tura geldi */}
        </>
    )

}


export default CoinFlipper;