
import './App.css';
import { Routes , Route}  from 'react-router-dom';
import Home from './pages/Home';
import AllMeetupsPage from './pages/AllMeetups';
import NewMeetupsPage from './pages/NewMeetups';
import FavouritesPage from './pages/Favourites';
import MainNavigation from './components/layout/MainNavigation';


function App() {
  return (
    <div>  
    <MainNavigation />
    <Routes>
        <Route exact path="/"       element={<Home />} />

        <Route exact path="/all"    element={<AllMeetupsPage />} />
      
        <Route exact path="/new"    element={<NewMeetupsPage />}  />
      
        <Route exact path="/fav"    element={<FavouritesPage />} />
    </Routes>
    </div>
  );
}

export default App;
