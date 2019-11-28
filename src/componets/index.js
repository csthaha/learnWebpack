// 因为 Show 函数当作 react ，所以需要 引入 react
import React, { useState } from 'react';

import { Button } from 'antd'

function Show() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <span>learn build webpack !</span><br />
            {count}
            <div>
                <Button type="primary" onClick={add}> + </Button>
                <Button type="danger" onClick={reduce}>-</Button>
            </div>
        </div>
    )

    function add() {
        setCount(count + 1);
    }

    function reduce() {
        setCount(count - 1);
    }
}

export default Show;