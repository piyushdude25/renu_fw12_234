import { Books } from './component/Books';
import { Pens } from './component/Pens';
import { Notebooks } from './component/Notebooks';
import { InkPens } from './component/InkPens';

import './App.css';

function App() {
  return (
    <div className="App">
      <Books/>
      <Pens/>
    <Notebooks/>
    <InkPens/>
    <div className="total"></div>
  
     
    </div>
  );
}

export default App;
