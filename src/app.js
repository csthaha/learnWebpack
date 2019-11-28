import React, { useEffect } from 'react';
import ReactDom from 'react-dom';

import Show from './componets';
import logo from './images/logo.png'

import './styles/app.css'
import './styles/app.less'

const reactjsKey = [
    {
        name: 'cst',
        age: 18
    },
    {
        name: 'qg',
        age: 11
    },
    {
        name: 'fh',
        age: 12
    },
]

function App({ person }) {
    console.log('the props is', person);

    useEffect(()  => {
        console.log('---', person);
        
    },[person])

    return (
        <div className="content">
            <h2 className="title">learn webpack</h2>
            <img src={logo}/>
            <ul>
                {
                    person.map((item, index) => {
                        const { name, age } = item;
                        return <li key={index} onClick={() => deleteItem(index, name)}>{name}:{age}</li>
                    })
                }
            </ul>
            <div className="show">
                <Show />
            </div>
            {/* {[{id:1,name: '张三'}, {id:2, name: '李四'}, {id: 2, name: "王五"}].map(u => <div key={u.id}>{u.id}:{u.name}</div>)} */}
        </div>
    )

    function deleteItem(index, name) {
        console.log('the index is ', index, name);
        person.splice(index, 1)
        console.log(person);
        
    }
}

ReactDom.render(
    <App person={reactjsKey} />,
    document.getElementById('root')
)