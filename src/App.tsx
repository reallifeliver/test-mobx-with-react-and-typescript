import React, {ReactElement} from 'react';
import ObservableTest from "./pages/ObservableTest";
import RerenderTest from "./pages/RerenderTest";
import ComputedTest from "./pages/ComputedTest";
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
        <Session name ='ObservableTest'>
          <ObservableTest/>
        </Session>
        <Session name ='RerenderTest'>
          <RerenderTest/>
        </Session>
        <Session name ='RerenderTest'>
            <ComputedTest/>
        </Session>
    </div>
  );
}

export default App;
