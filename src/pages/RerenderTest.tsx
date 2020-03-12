import React from 'react';
import {observer} from "mobx-react";
import {observable} from "mobx";

const store = observable([
    { name : 'item 1', cnt : 0},
    { name : 'item 2', cnt : 0},
    { name : 'item 3', cnt : 0},
    { name : 'item 4', cnt : 0},
    { name : 'item 5', cnt : 0},
    { name : 'item 6', cnt : 0},
    { name : 'item 7', cnt : 0},
    { name : 'item 8', cnt : 0},
    { name : 'item 9', cnt : 0},
])

const Optimized = observer( () => {
    console.log('Optimized')
    return (
        <div style = {{border : '1px solid #ccc', padding : '10px'}}>
            {store.map( item => <Item key = {item.name} item ={item}></Item>)}
        </div>
    )
})

const Item = observer( (props : any) => {
    const { item } = props;
    console.log(item.name + ' changed')
    return (
        <div className ='item'>{item.name} : {item.cnt}</div>
    )
})

const UnOptimized = observer( () => {
    console.log('UnOptimized')
    return (
        <div style = {{border : '1px solid #ccc', padding : '10px'}}>
            {store.map(item => <div className ='item' key = {item.name}>{item.name} : {item.cnt}</div>)}
        </div>
    )
})

const RerenderTest = () => {
    const onClick = () => {
        store.forEach(item => {
            if(item.name === 'item 1') item.cnt += 1;
        })
    }

    const onChangeStore = () => {
        store.replace([{name : 'new 1', cnt : 1}, {name : 'new 2', cnt : 1}]);
    }
    return (
        <div style = {{display : 'flex'}}>
            <Optimized></Optimized>
            <UnOptimized></UnOptimized>
            <button onClick = {onClick}>Change item 1</button>
            <button onClick = {onChangeStore}>Change Store</button>
        </div>
    )
}

export default RerenderTest;
