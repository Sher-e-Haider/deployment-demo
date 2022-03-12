import React from 'react'
import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import VignetteIcon from '@mui/icons-material/Vignette';
import SettingsSystemDaydreamRoundedIcon from '@mui/icons-material/SettingsSystemDaydreamRounded';
import AirportShuttleIcon from '@mui/icons-material/AirportShuttle';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import BrightnessLowIcon from '@mui/icons-material/BrightnessLow';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DiamondRoundedIcon from '@mui/icons-material/DiamondRounded';
import LogoutIcon from '@mui/icons-material/Logout';

function Sidebar() {
  return (
    <div className='sidebar' >
     <div className="top"> <span className="logo">SahilAdmin</span> </div>
     <hr />
     <div className="center">
         <ul>
           <p className="title">MAIN</p>
             <li>
                <DashboardIcon className='icon' />
                 <span> Dashboard</span>
             </li>
             <p className="title">LISTS</p>
             <li>
             <PeopleOutlineIcon className='icon' />
             <span>Users</span>
             </li>
             <li>
             <Inventory2Icon className='icon' />
             <span> Products</span>
             </li>
             <li>
             <VignetteIcon className='icon' />
             <span>Orders</span>
             </li>
             <li>
             <AirportShuttleIcon className='icon' ></AirportShuttleIcon>
                 <span> Delevery</span>
             </li>
             <p className="title">USEFUL</p>
             <li>
             <QueryStatsIcon className='icon' />
             <span>Stats</span>
             </li>
             <li>
             <NotificationsNoneIcon className='icon' />
             <span>Notification</span>
             </li>
             <p className="title">SERVICE</p>
             <li>
             <SettingsSystemDaydreamRoundedIcon className='icon' />
             <span>System Health</span>
             </li>
             <li>
             <DiamondRoundedIcon className='icon' />
                 <span> Logs</span>
             </li>
             <li>
             <BrightnessLowIcon className='icon' />
             <span>Setting</span>
             </li>
             <p className="title">USER</p>
             <li>
             <AccountCircleIcon className='icon' />
             <span>Profile</span>
             </li>
             <li>
             <LogoutIcon className='icon' />
             <span>Logout</span>
             </li>
         </ul>
     </div>
     <div className="bottom">
         <div className="colorOptins"></div>
         <div className="colorOptins"></div>
        

     </div>
    </div>
  )
}

export default Sidebar