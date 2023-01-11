import { useContext } from 'react';
import './style.css';
import FavouritesContext from '../store/favourites-context';
import MeetupList from '../components/meetups/MeetupList';


function FavouritesPage() {
    const favouritesCtx = useContext(FavouritesContext);

    let content;

    if(favouritesCtx.totalFavourites === 0){
        content = <p>You got no favourites</p>
    }else{
        content = <MeetupList list={favouritesCtx.favourites}/>
    }

    return (
        <div className="divInfo">
            <h1>My Favourite</h1>
            {content}
        </div>
    );
}
export default FavouritesPage;