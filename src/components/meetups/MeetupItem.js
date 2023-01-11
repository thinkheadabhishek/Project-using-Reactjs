import './MeetupItem.css';
import Card from '../../UI/Card';
import {useContext} from 'react'
import FavouritesContext from '../../store/favourites-context';

function MeetupItem(props){     
    const  favouritesCtx = useContext(FavouritesContext);
    const itemIsFavourite = favouritesCtx.itemIsFavourite(props.id);

    function toggleFavouriteStatusHandler(){
        if(itemIsFavourite){
            favouritesCtx.removeFavourite(props.id);
        }
        else{
            favouritesCtx.addFavourite({
                id:props.id,
                title:props.title,
                description:props.description,
                image:props.image,
                address:props.address,
            });
        }
    }
    return(
        <Card>
        <div className="item">
            <div className="image">
                <img src={props.image} alt={props.title} />
            </div>
            <div className="content">
                <h3>{props.title}</h3>
                <address>{props.address}</address>
                <p>"{props.description}"</p>
            </div>
            <div className="actions">
                <button onClick={toggleFavouriteStatusHandler}>{itemIsFavourite ? 'Remove from favourites' : 'To favourites'}</button>
            </div>
        </div>
        </Card>
    );
}

export default MeetupItem;