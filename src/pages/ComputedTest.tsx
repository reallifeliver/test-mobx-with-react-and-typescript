import React from 'react';
import {observer} from "mobx-react";
import {observable, computed, autorun} from "mobx";

class Store{
    @observable a : number = 1;
    @observable b : number = 2;
    @computed get total() : number {
        console.log('computed')
        return this.a + this.b;
    }
}
const store = new Store();

const ComputedTest = observer(() => {

    return (
        <div>
            <p> a : {store.a}</p>
            <p> b : {store.b}</p>
            <p> total : {store.total}</p>
            <p> total : {store.total}</p>
            <button onClick = { () => store.a++}>A</button>
            <button onClick = { () => store.b++}>B</button>
        </div>
    )
})

export default ComputedTest;