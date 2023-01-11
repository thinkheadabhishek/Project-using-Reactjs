import { Link } from 'react-router-dom';
import { useContext } from 'react';
import FavouritesContext from '../../store/favourites-context';
import './MainNavigation.css';

function MainNavigation(){
    const favouritesCtx = useContext(FavouritesContext);
    return(
    <header className='header'>
        <div className="logo"><Link to='/'>React Meetups</Link></div>
        <nav>
            <ul>
                <li><Link to='/all'>All meetup</Link></li>
                <li><Link to='/new'>Add new meetup</Link></li>
                <li><Link to='/fav'>Favourites 
                <span className="badge"> {favouritesCtx.totalFavourites}</span></Link></li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;