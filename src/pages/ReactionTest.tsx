import React from 'react';
import {computed, observable, reaction} from 'mobx';
import {observer, useLocalStore, Observer} from "mobx-react";

type MyType = {
    name : string;
    cnt : number;
}

class Store{
    @observable a : Array<MyType> = [
        {name : 'minsik', cnt : 1},
        {name : 'walter', cnt : 1},
    ];
    @observable b : number = 2;

    lengthReaction = reaction( () => {
        return this.a.length;
    }, (length) => {
        console.log('length', length)
    } )

    countReaction = reaction( () => {
        return this.a.map( el => el.cnt);
    }, (cnts) => {
        console.log('cnts', cnts);
    })
}
const store = new Store();

const ReactionTest = observer( () => {

    const onChangCnt = (item : MyType) => () => {
        item.cnt += 1;
    }

    const onAddItem = () => {
        store.a.push( { name : 'new item', cnt : 1});
    }

    const onChangeName = (item : MyType) => () => {
        item.name = item.name.substr(1);
    }

    return (
        <div>
            {store.a.map( item => (
                <p>{item.name} , {item.cnt} <button onClick ={onChangCnt(item)}>+</button><button onClick = {onChangeName(item)}>Change Name</button></p>
            ))}
            <button onClick ={onAddItem}>ADD</button>
        </div>
    )
})

export default ReactionTest;