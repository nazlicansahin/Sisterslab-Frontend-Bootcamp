
import "bootstrap/dist/css/bootstrap.min.css"; // Import bootstrap CSS
import { useState } from 'react';

const Counter = ({ initalCount, minCount, maxCount }) => {



    const [count, setCount] = useState(initalCount);
    const increment = () => {
        if (count < maxCount) {
            setCount(count + 1)
        };

    }
    const decrement = () => {
        if (count > minCount) {
            setCount(count - 1)
        }
    };
    return (
        <div>
            <div className="d-grid d-md-block">

                <h1 type="button" class="btn btn-light m-4 px-4 d-grid gap-2  ">{count}</h1>

                <button type="button" class="btn btn-primary m-4" onClick={increment}>increase</button>
                <button type="button" className="btn btn-primary m-4 mr-2 " onClick={decrement}>decrease</button>
            </div>
        </div>
    );
}

export default Counter;