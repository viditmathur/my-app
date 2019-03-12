import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
  state={
    persons: [
      30,
      35,
      39  
    ]
  }
switchage=()=>{
  console.log('button clicked');
}
  render() {
   return (
     
     <div className="App">
     <Person age={this.state.persons[0]}/> 
       <header className="App-header">
          
         <div>
             <h1>
               Hi there, this is my first React App. So please Don't React
         </h1>
           </div>
         </header>
         <button onClick={this.switchage()}>age</button>
         <Person age={this.state.persons[1]}/>
         <Person age= {this.state.persons[2]}>Hola!! wassup man</Person>
       </div>
  );
  //   return React.createElement('div',{className: 'App-header'},React.createElement('h1',{className: 'App'},"hi, I'm Vidit"));
   }
}

export default App;
