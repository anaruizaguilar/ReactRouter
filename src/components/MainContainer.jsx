import Blue from "./Blue";
import Red from "./Red";
import Yellow from "./Yellow";
import Purple from "./Purple";
import Green from "./Green";
import Home from "./Home";
import { Routes, Route } from 'react-router-dom';

function MainContainer() {
    return (
        <div id="main-section">
        <Routes>
          <Route path='/blue' element={<Blue />}></Route>
          <Route path='/red' element={<Red />}></Route>
          <Route path='/' element={<Home />}></Route>
          <Route path='/yellow' element={<Yellow />}></Route>
          <Route path='/purple' element={<Purple />}></Route>
          <Route path='/green' element={<Green />}></Route>
        </Routes>
      </div>
    )
}

export default MainContainer;