import { useNavigate } from 'react-router-dom';
import './style.css';
import NewMeetupForm from '../components/meetups/NewMeetupForm';

function NewMeetupsPage() {
    const navigate = useNavigate();

    function addMeetupHandler(meetupData){
        fetch(
            'https://react-getting-started-2cc66-default-rtdb.firebaseio.com/meetups.json',
            {
                method:'POST',
                body:JSON.stringify(meetupData),
                header:{
                    'Content-Type' : 'application/json'
                }
            }
        ).then(() => {
            navigate('/all');
            alert("Added Sucessfully.Click Okay to continue.");
        });
    }

    return (
        <div className="divInfo">
            <h1>Add New Meetup</h1>
            <NewMeetupForm onAddMeetup = {addMeetupHandler}/>
        </div>
    )
}

export default NewMeetupsPage;