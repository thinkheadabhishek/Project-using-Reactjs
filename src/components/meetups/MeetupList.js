import MeetupItem from './MeetupItem';
import './MeetupList.css'

function MeetupList(props){
    return(
            <div className="list-content">
                {props.list.map( meetup => <MeetupItem 
                    key={meetup.id}  
                    id={meetup.id} 
                    image={meetup.image} 
                    title={meetup.title} 
                    address={meetup.address} 
                    description={meetup.description} 
                />)}
            </div>
    );
}

export default MeetupList;