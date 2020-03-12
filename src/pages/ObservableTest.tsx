import React from 'react';
import {observable} from 'mobx';
import {observer} from "mobx-react";

const ObservableTest = () => {
    @observable const count = 0;
}

export default ObservableTest;