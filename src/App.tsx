import React, {ReactElement} from 'react';
import ObservableTest from "./pages/ObservableTest";
import RerenderTest from "./pages/RerenderTest";
import ComputedTest from "./pages/ComputedTest";
import AutorunTest from "./pages/AutorunTest";
import ReactionTest from "./pages/ReactionTest";
import MobxNotWorkCaseTest from "./pages/MobxNotWorkCaseTest";
const Session = ({name, children } : {name : string, children : ReactElement} ) => {
    return (
        <>
            <h2>{name}</h2>
            {children}
        </>
    )
}

function App() {
  return (
    <div className="App">
        <Session name ='Observable Test'>
          <ObservableTest/>
        </Session>
        <Session name ='Rerender Test'>
          <RerenderTest/>
        </Session>
        <Session name ='Computed Test'>
            <ComputedTest/>
        </Session>
        <Session name ='Autorun Test'>
            <AutorunTest/>
        </Session>
        <Session name ='Reaction Test'>
            <ReactionTest/>
        </Session>
        <Session name ='MobxNotWorkCase Test'>
            <MobxNotWorkCaseTest/>
        </Session>
    </div>
  );
}

export default App;
