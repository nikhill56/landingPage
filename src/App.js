//import HomePage from "./Homepage/HomePage";
import Landing from "./LandingNew/LandingNew";
import LandingMobile from "./LandingNew/LandingMobile";
import Sidebar from "./Shared/Sidebar";
import Chats from './Communities/Chats';
import AppRoutes from './AppRoutes';
import './App.css';
// import "../src/App.scss";
function App() {
  
  return (
    <div className="App" >
      {/* <Sidebar/> */}
      <Chats />
      {/* <Landing /> */}
      {/* <LandingMobile/> */}
    </div>
  );
}

export default App;
