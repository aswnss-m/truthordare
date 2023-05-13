import "../Assets/App.css";
import Main from "./Main/Main";
import {Routes,Route} from 'react-router-dom'
import Lounge from "./Lounge/Lounge";
import Game from "./Game/Game";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={'/'} element = {<Main />} />
        <Route path={'/lounge/:id'} element = {<Lounge />} />
        <Route path={'/game/:id'} element = {<Game />} />

      </Routes>
    </div>
  );
}

export default App;
