//import HomePage from "./Homepage/HomePage";
import Footer from "./Mobile/Footer";
import Landing from "./LandingNew/LandingNew";
import {useState} from "react";
import LandingMobile from "./LandingNew/LandingMobile";
import Sidebar from "./Shared/Sidebar";
import Chats from './Communities/Chats';
import ExploreMobile1 from "./Mobile/ExploreMobile1";
import ExploreMobile2 from "./Mobile/ExploreMobile2";
import ChatMobile from "./Mobile/ChatMobile";
import ActivityMobile from "./Mobile/ActivityMobile";
import AppRoutes from './AppRoutes';
import './App.css';
// import "../src/App.scss";
function App() {
  const [activeTab, setActiveTab] = useState(1);
  
  return (
    <div className="App" >
      {/* <Sidebar/> */}
      {/* <Chats />  */}
      {/* <Landing /> */}
      {/* <LandingMobile/> */}
      {
        activeTab === 2 && 
        <ExploreMobile2 setActiveTab={setActiveTab} />                                     
      }
      {
        activeTab === 4 &&
        <ExploreMobile1 setActiveTab={setActiveTab}/>
      }
      {
        activeTab === 3 &&
        <ChatMobile />
      }
      {
        activeTab === 1 &&
        <ActivityMobile/>
      }
      <Footer activeTab={activeTab} setActiveTab={setActiveTab}></Footer>
    </div>
  );
}

export default App;
