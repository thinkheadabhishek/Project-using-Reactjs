
import './NewMeetupForm.css';
import { useRef } from 'react';


function NewMeetupForm(props){

    const titleInputRef = useRef();
    const imageInputRef = useRef();
    const addressInputRef = useRef();
    const descriptionInputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredDescription = descriptionInputRef.current.value;

        const meetupData = {
            title : enteredTitle,
            image : enteredImage,
            address : enteredAddress,
            description : enteredDescription
        };

        props.onAddMeetup(meetupData);

        titleInputRef.current.value="";
        imageInputRef.current.value="";
        addressInputRef.current.value="";
        descriptionInputRef.current.value="";
    }
    return(
            <form className="form" onSubmit={submitHandler}>
                <div className="control">
                    <label htmlFor="title">Meetup Tile</label>
                    <input type="text" id="title" required ref={titleInputRef}></input>
                </div>
                <div className="control">
                    <label htmlFor="image">Meetup Image</label>
                    <input type="url" id="image" required ref={imageInputRef}></input>
                </div>
                <div className="control">
                    <label htmlFor="address">Address</label>
                    <input type="text" id="address" required ref={addressInputRef}></input>
                </div>
                <div className="control">
                    <label htmlFor="description">Description</label>
                    <textarea id="description" rows="5" required ref={descriptionInputRef}></textarea>
                </div>
                <div className="actions">
                    <button>Add Meetup</button>
                </div>
            </form>
    );
}

export default NewMeetupForm;