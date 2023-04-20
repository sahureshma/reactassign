
import './App.css';
import Invitation from './invitation/invitation';
function App() {
  return (
    <div className="App">
     <Invitation
  subject="Birthday party Invitation"
  to="jaGdish@gmail.com"
  name="jaGdish"
  date="next Friday"
  time="my Home"
  location="behind our school, near Green field Avenue"
  attendees="Ritu, Saurabh, Kartik"
/>
      
    </div>
  );
}

export default App;