import React, { Component } from "react";
import { Button, Form, Segment } from "semantic-ui-react";

class EventForm extends Component {
  
  state= {
    title:"",
    date: '',
    city:'',
    venue:'',
    hostedBy:''
  }

  compoentDidMount(){
    if (this.props.selectedEvent !== null ){
      this.setState({
        ...this.props.selectedEvent
      })
    }
  }

  handleFormSubmit = (evt) => {
    evt.preventDefault();
    this.props.createEvent(this.state);
  }

  handleTitleChange = ({target:{name, value}}) => {
    this.setState({
      [name]:value
    })
  }
  
  render() {
      const {cancelFormOpen} = this.props.cancelFormOpen;
      const {title, date, city, venue, hostedBy} = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleFormSubmit}>
          <Form.Field>
            <label>Event Title</label>
            <input name='title' onChange={this.handleTitleChange} value={title} placeholder='Event title' />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input name='date' onChange={this.handleTitleChange} value={date} type='date' placeholder='Event Date' />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input name='city' onChange={this.handleTitleChange} value={city} placeholder='City event is taking place' />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input name='venue' onChange={this.handleTitleChange} value={venue} placeholder='Enter the Venue of the event' />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input name='hostedBy' onChange={this.handleTitleChange} value={hostedBy} placeholder='Enter the name of person hosting' />
          </Form.Field>
          <Button positive type='submit'>
            Submit
          </Button>
          <Button type='button' onClick={cancelFormOpen}>Cancel</Button>
        </Form>
      </Segment>
    );
  }
}

export default EventForm;
