import React, {Component, Fragment} from 'react'
import { Button, ListGroupItem, Row, Col, Form } from 'reactstrap';

class TaskList extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            isEdit: false
        }

        this.renderTask = this.renderTask.bind(this);
        this.renderUpdateForm = this.renderUpdateForm.bind(this);
        this.toggleState = this.toggleState.bind(this);    
    }

    renderTask = () => {
        return (
            <ListGroupItem>
                <Row>
                    <Col xl={7} lg={7} md={12} xs={12}>
                        <span>{this.props.details.name}</span>
                    </Col>
                    <Col xl={2} lg={2} md={6} xs={6}>
                        <Button color="secondary" onClick={() => {this.toggleState()}}>Edit</Button>
                    </Col>
                    <Col xl={3} lg={3} md={6} xs={6}>
                        <Button color="danger" onClick={() => {this.props.deleteTask(this.props.index)}}>Delete</Button>
                    </Col>   
                </Row>
            </ListGroupItem>
        )
    }

    toggleState = () => {
        let {isEdit} = this.state;
        this.setState({
            isEdit: !isEdit
        })
    }

    updateTaskItem = (event) => {
        event.preventDefault();
        this.props.editTask(this.props.index, this.input.value);
        this.toggleState();
    }

    renderUpdateForm = () => {
        return(
            <ListGroupItem>
                <Form onSubmit={this.updateTaskItem}>
                    <Row>
                        <Col xl={9} lg={9} md={12} xs={12}>
                            <input type="text" name="editTaskName" id="editTaskName" ref={(value) => {this.input = value}} defaultValue={this.props.details.name} />
                        </Col>
                        <Col xl={3} lg={3} md={12} xs={12}>
                            <Button color="success">Update</Button>
                        </Col>
                    </Row>
                </Form>
            </ListGroupItem>
        )
    }
    
    render() {
        let {isEdit} = this.state;
        return (
            <Fragment>
                { isEdit ? this.renderUpdateForm() : this.renderTask()}
            </Fragment>
        );
    }
}

export default TaskList;