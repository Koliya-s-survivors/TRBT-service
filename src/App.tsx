import React, { Component } from 'react';

// material
import { Container } from '@material-ui/core';

// components
// import { Uploader } from './commons/components/uploader';
import { FirstModelImpl } from './commons/models';

// styles
import './App.css';

import { StateInspector } from "reinspect"

// const App: React.FC<any> = () => {
//   return (
//     <>
//       <StateInspector name="App">
//         <Container fixed>
//           <div>Start</div>
//         </Container>
//       </StateInspector>

//     </>
//   );
// }

class App extends Component {
  // inst: FirstModelImpl;
  constructor(public inst: FirstModelImpl, props: any) {
    super(props);
    this.inst = new FirstModelImpl('Hamed');
  }
  render() {
    return (
      <>
        <StateInspector name="App">
          <Container fixed>
            <div>Start</div>

          </Container>
        </StateInspector>

      </>
    );
  }
}

export default App;
