import  {useEffect, useState, useRef} from 'react'
import React from 'react'
import StackedLineChartRoundedIcon from '@mui/icons-material/StackedLineChartRounded';
import ChatBubbleRoundedIcon from '@mui/icons-material/ChatBubbleRounded';
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import CurrencyBitcoinRoundedIcon from '@mui/icons-material/CurrencyBitcoinRounded';
import PersonIcon from '@mui/icons-material/Person';
import ExploreRoundedIcon from '@mui/icons-material/ExploreRounded';
import './Footer.css'

function Footer({activeTab, setActiveTab}) {
  return (
    <div  className="foot">
        <div className={`${activeTab ===6 && "crypto"} icotext`}>
            <div className="priceicon footicon">
            <StackedLineChartRoundedIcon/>
            </div>
            <div className="priceText">Price Tracker</div>
        </div>
        <div className={`${activeTab ===5 && "crypto"} icotext`}>
            <div className="chaticon footicon">
            <ChatBubbleRoundedIcon/>
            </div>
            <div className="chatText">Direct</div>
        </div>
        <div className={`${activeTab ===3 && "crypto"} icotext`} onClick={()=>setActiveTab(3)}>
            <div className="dashboardicon footicon">
            <DashboardRoundedIcon/>
            </div>
            <div className="dashboardText">Communities</div>
        </div>
        <div className={`${activeTab ===2 | activeTab===4 && "crypto"} icotext`} onClick={()=>setActiveTab(2)}>
            <div className="cryptoicon footicon">
            <ExploreRoundedIcon/>
            </div>
            <div className="cryptoText">Explore</div>
        </div>
        <div className={`${activeTab ===1 && "crypto"} icotext`} onClick={()=>setActiveTab(1)}>
            <div className="profileicon footicon">
            <PersonIcon/>
            </div>
            <div className="profileText">Your Profile</div>
        </div>
    </div>
  )
}

export default Footer