import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      employees: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3005/getSogetiEmployees')
    .then(employees => employees.json())
    .then(_employees => {
      console.log(_employees)
      this.setState({
        employees: _employees })
    }).catch(err=>console.log(err))
  }

  render(){
  return (
<div className="App">
      <h1>Sogeti Employee Directory</h1>
      {this.state.employees.map((employee,index) => {
        return (
          <div className="media" key={index}>
          <img className="mr-3 directory-image" src={employee.image} ></img>
          <div className= "media-body">
          <h5 className="mt-8">{employee.name}</h5>
          <p>{employee.location}</p>
          </div>
          </div>
        )
      })}
    </div>
  )
}
}
export default App;
