import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'


function Widget({type}) {
    let data
    switch(type){
        case "user":
        data={
             title:"USERS",
             isMoney:false,
             link:"see all users",
             icon:<PersonOutlinedIcon/>
        }
        case "order":
        data={
             title:"ORDERS",
             isMoney:false,
             link:"view all orders",
             icon:<ShoppingCartOutlinedIcon/>
        }
        case "earning":
        data={
             title:"EARNINGS",
             isMoney:true,
             link:"view net earnings",
             icon:<MonetizationOnOutlinedIcon/>
        }
        case "balance":
        data={
             title:"BALANCE",
             isMoney:true,
             link:"see all details",
             icon:<AccountBalanceWalletOutlinedIcon/>
        }
        break;
        default:
        break
       

    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">USERS</span>
            <span className="counter">21312</span>
            <span className="link">see alls users</span>
        </div>
        <div className="right">
         <div className="percentage positive">
         <KeyboardArrowUpIcon/>
          20%
         </div>
         <PersonOutlinedIcon className='icon'/>
        </div>
    </div>
  )
}

export default Widget