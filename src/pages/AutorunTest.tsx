import React from 'react';
import {observable, autorun} from "mobx";
import {observer} from "mobx-react";

class Store {
    @observable a : number = 1;
    @observable b : number = 1;

    disposerForA = autorun((reaction) => {
        console.log('autorun for A', this.a)

    }, { delay : 1000})

    disposerForB = autorun((reaction) => {
        console.log('autorun for B', this.b)
    })

}
const store = new Store();
const AutorunTest = observer(() => {
    const onChangeA = () => {
        store.a += 1;
    }
    const onChangeB = () => {
        store.b+= 1;
    }

    const disposeA = () => {
        store.disposerForA();
    }

    const disposeB = () => {
        store.disposerForB();
    }

    return (
        <div>
            <p> a : {store.a}</p>
            <p> a : {store.b}</p>
            <button onClick={onChangeA}>A</button>
            <button onClick={onChangeB}>B</button>
            <button onClick={disposeA}>dispose A</button>
            <button onClick={disposeB}>dispose B</button>
        </div>
    )
})

export default AutorunTest;