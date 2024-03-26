import React from 'react';
import './Events.css';

const Events = () => {
    return (
        <div className="events-container">
            <h1 className="events-title">Events</h1>
            <div className="event">
                <img src="event1.jpg" alt="Event 1" className="event-image" />
                <div className="event-details">
                    <h2 className="event-title">Event 1 Title</h2>
                    <p>Date: March 30, 2024</p>
                    <p>Venue: Venue 1</p>
                    <p>Description: Description of Event 1</p>
                </div>
            </div>
            <div className="event">
                <img src="event2.jpg" alt="Event 2" className="event-image" />
                <div className="event-details">
                    <h2 className="event-title">Event 2 Title</h2>
                    <p>Date: April 5, 2024</p>
                    <p>Venue: Venue 2</p>
                    <p>Description: Description of Event 2</p>
                </div>
            </div>
            <div className="event">
                <img src="event3.jpg" alt="Event 3" className="event-image" />
                <div className="event-details">
                    <h2 className="event-title">Event 3 Title</h2>
                    <p>Date: April 10, 2024</p>
                    <p>Venue: Venue 3</p>
                    <p>Description: Description of Event 3</p>
                </div>
            </div>
            <div className="event">
                <img src="event4.jpg" alt="Event 4" className="event-image" />
                <div className="event-details">
                    <h2 className="event-title">Event 4 Title</h2>
                    <p>Date: April 15, 2024</p>
                    <p>Venue: Venue 4</p>
                    <p>Description: Description of Event 4</p>
                </div>
            </div>
            <div className="event">
                <img src="event5.jpg" alt="Event 5" className="event-image" />
                <div className="event-details">
                    <h2 className="event-title">Event 5 Title</h2>
                    <p>Date: April 20, 2024</p>
                    <p>Venue: Venue 5</p>
                    <p>Description: Description of Event 5</p>
                </div>
            </div>
        </div>
    );
}

export default Events;
