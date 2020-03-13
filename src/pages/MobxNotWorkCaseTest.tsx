import React from "react";
import {observer} from "mobx-react";
import {autorun, observable, trace} from "mobx";

type Store = {
    a : number;
    list : Array<string>;
    obj : { val : number};

}

const store : Store = observable({
    a : 1,
    list : ['a', 'b', 'c', 'd'],
    obj : {
        val : 1
    }
})
const storedObj = store.obj;

autorun( () => {
    console.log("autorun " ,storedObj.val);
})

const MobxNotWorkCaseTest = observer( () => {

    const onClick = () => {
        setTimeout( () => {
            store.a += 1;
        }, 1000)
    }

    const changeStoreObjVal = () => {
        store.obj.val += 1;
    }

    const changeObjVal = () => {
        storedObj.val += 1;
    }

    const changeStoreObj = () => {
        store.obj = { val : 10};
    }

    return (
        <div>
            {trace()}
            {/*<p>A : {store.a} -> it works </p>*/}
            <button onClick = {onClick}>Wait 1 second and change value a</button>
            <hr/>
            <p> storedObj.val : {storedObj.val}</p>
            <p> store.obj.val : {store.obj.val}</p>
            <button onClick = {changeStoreObjVal}>Change store.obj.value</button>
            <button onClick = {changeObjVal}>Change storedObj.value</button>
            <button onClick = {changeStoreObj}>Change store.obj</button>
        </div>
    )
})

export default MobxNotWorkCaseTest;