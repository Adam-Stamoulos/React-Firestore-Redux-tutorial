import React, { Component, Fragment } from 'react'
import EventListItem from './EventListItem'

class EventList extends Component {
    render() {
        
        const {events, selectEvent, removeEvent} = this.props;

        return (
            <Fragment>
                {events.map(event => (
                    <EventListItem key={event.id} event ={event} selectEvent={selectEvent} removeEvent={removeEvent}/>
                ))}
            </Fragment>
        )
    }
}

export default EventList;