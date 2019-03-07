import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';


 const TaskForm = (props) => {
     return (
        <Form className="taskForm" onSubmit={props.addTask}>
            <FormGroup>
                <Label for="taskName">Task Name</Label>
                <Input type="text" name="taskName" id="taskName" value={props.currentValue} onChange={props.updateTask} />
            </FormGroup>
            <Button color="success">Add Task</Button>
        </Form>
     );
 }

 export default TaskForm; 