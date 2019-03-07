import React, { Component } from 'react';
import { Container, Row, Col, ListGroup } from 'reactstrap';

import Menu from '../Menu';
import TaskForm from './TaskForm';
import TaskList from './TaskList';

class ToDo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      currentValue: ''
    }
  } 

  //updateTask
  updateTask = (event) => {
      this.setState({
        currentValue: event.target.value
      })
  }

  //addTask
  addTask = (event) => {
      event.preventDefault();
      let currentValue = this.state.currentValue;
      let tasks = this.state.tasks;
      tasks.push({name: currentValue});
      this.setState({
        tasks,
        currentValue: ''
      })
  }

  //deleteTask
  deleteTask = (index) => {
    let tasks = this.state.tasks;
    tasks.splice(index, 1);
    this.setState({
      tasks
    })
  }

  //editTask
  editTask = (index, value) => {
    let tasks = this.state.tasks;
    let task = tasks[index];
    task['name'] = value;
    this.setState({
      tasks
    })
  }

  render() {
    const {tasks} = this.state;
    const taskList = tasks.map( (task, index) => {
      return <TaskList details={task} key={index} index={index} update={this.handleChange} deleteTask={this.deleteTask} editTask={this.editTask}/>
    })
    return (
        <Container>
        <div className="App">
          
            <Menu></Menu>
        
            <Row>
                <Col xl={3} lg={3} md={12} xs={12} >        
                <TaskForm currentValue={this.state.currentValue} updateTask={this.updateTask} addTask={this.addTask}/>
                </Col>
                <Col xl={9} lg={9} md={12} xs={12} >        
                <ListGroup>{taskList}</ListGroup>
                </Col>
            </Row>
          
        </div>
      </Container>
        
            
    );
  }
}

export default ToDo;