import React from 'react';
import {observable} from 'mobx';
import {observer, useLocalStore, Observer} from "mobx-react";

const store = observable( {
    a : 1,
    b : 1,
})


const ObservableTest = () => {

    const onChangeA = () => {
        store.a += 1;
    }

    const onChangeB = () => {
        store.b += 1;
    }

    const A = () => {
        console.log('Change A');
        return <div> A : {store.a}</div>
    }

    const B = () => {
        console.log('change B');
        return <div> B : {store.b}</div>
    }

    return (
        <div>
            {store.a}
            <Observer>{A}</Observer>
            <Observer>{B}</Observer>
            <button onClick = {onChangeA}>A</button>
            <button onClick = {onChangeB}>B</button>
        </div>
    )
}

export default ObservableTest;