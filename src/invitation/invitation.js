
import React from 'react';
import './invitation.css'

function Invitation(props) {
  const {subject, to, name, date, time, location, attendees}  = props;

  return (
    <div>
      <p className='primary'>subject: {subject}</p>
      <p className='primary'>To: {to}</p>
      <p className='primary'>Hi, {name}</p>
      
      <p>
        I am having a {date} birthday party at {time} in {location}. Would you like to come? It will be fun. Lots of people are coming, including {attendees}.
      </p>
      <p>My house is behind our school, near Green field Avenue.</p>
      <p>I hope you will come and see you soon.</p>
      <p>From,</p>
      <p className='primary'>Reshma</p>
    </div>
  );
}

export default Invitation;