import React from 'react';
import logo from './logo.svg';
import BillGenerator from './components/billGenerator'


class App extends React.Component {
  render() { 
    return (
      <div className="App">
        <header className="App-header">
          <BillGenerator/>
          
        </header>
      </div>
    );
  }
}
export default App;
