import React from 'react'
import './navbar.scss'
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';  
import LanguageIcon from '@mui/icons-material/Language';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import Avatar from '@mui/material/Avatar';


function Navbar() {
  return (
   <div className="navbar">
     <div className="wrappar">
       <div className="search">
         <input type="text" placeholder='Search' />
         <SearchIcon className='searchIcon'/>
       </div>
       <div className="items">
         <div className="item">
         <LanguageIcon className='icon' />
         English
         </div>
         <div className="item">
         <NightsStayIcon className='icon' />
        
         </div>
         <div className="item">
         <FullscreenExitIcon className='icon'/>
        
         </div>
         <div className="item">
         <NotificationsIcon className='icon'/>
           <div className="counter">1</div>
          
         </div>
         <div className="item">
         <ChatBubbleIcon className='icon'/>
         <div className="counter">2</div>
         </div>
         <div className="item">
         <FormatListBulletedIcon className='icon'/>
        
         </div>
         <div className="item">
         <Avatar>H</Avatar>
       
         </div>
        
  


    

       </div>
     </div>
   </div>
  )
}

export default Navbar