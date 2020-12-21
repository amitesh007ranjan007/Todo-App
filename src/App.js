import React,{ Component } from 'react';
import List from './components/list/list';
import Input from './components/input/input';
import Button from './components/button/button';
class App extends Component {

  state = {
    tasks: [],
    taskName: ''
  }

  addHandler = () => {
    let newTaskName = this.state.taskName
    if (newTaskName.trim() === '') {
      alert('Please enter a task')
      return
    }
    const tempTasks = [ ...this.state.tasks]
    tempTasks.push(newTaskName)
    this.setState({tasks: tempTasks})
  }

  removeHandler = (id) => {
    const tempTasks = [ ...this.state.tasks]
    tempTasks.splice(id, 1);
    this.setState({tasks: tempTasks})
  }

  inputHandler = (event) => {
    let newTaskName = event.target.value
    this.setState({taskName: newTaskName})
  
  }


  render(){
    let listOfTasks = null;
    if (this.state.tasks.length > 0) {
      listOfTasks = this.state.tasks.map((task, index) => <List
        key={index} keyId={index} text={task} click={(id) => this.removeHandler(id)} />)
    }
  return (
    <div style={{textAlign: 'center'}}>
    <h2>My Todo App</h2>
    <Input value={this.state.taskName} 
        inputChanged={(event) => this.inputHandler(event)} />
    <Button clicked={this.addHandler} type="green" />
    {listOfTasks}

  </div>);
  }


}

export default App;
