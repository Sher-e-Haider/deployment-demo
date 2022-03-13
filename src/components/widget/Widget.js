import React from 'react'
import './widget.scss'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined'
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined'


function Widget({type}) {
   let data;
   const amount=100
   const diff=20
    switch(type){
        case "user":
        data={
             title:"USERS",
             isMoney:false,
             link:"see all users",
             icon:<PersonOutlinedIcon style={{color:"crimson",background:"rgba(255,0,0,0.2)"}} />
        }
        break;
        case "order":
        data={
             title:"ORDERS",
             isMoney:false,
             link:"view all orders",
             icon:<ShoppingCartOutlinedIcon style={{color:"yellow",background:"rgba(255,0,0,0.2)"}}/>
        }
        break
        case "earning":
        data={
             title:"EARNINGS",
             isMoney:true,
             link:"view net earnings",
             icon:<MonetizationOnOutlinedIcon style={{color:"green",background:"rgba(255,0,0,0.2)" }}/>
        }
        break
        case "balance":
        data={
             title:"BALANCE",
             isMoney:true,
             link:"see all details",
             icon:<AccountBalanceWalletOutlinedIcon style={{color:"violet",background:"rgba(255,0,0,0.2)"}}/>
        }
        break;
        default:
        break
       

    }
  return (
    <div className="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="counter">{data.isMoney&& "$"}{amount}</span>
            <span className="link">{data.link}</span>
        </div>
        <div className="right">
         <div className="percentage positive">
         <KeyboardArrowUpIcon/>
         {diff} %
          
         </div>
         {/* <PersonOutlinedIcon className='icon'/> */}
     {data.icon}
        </div>
    </div>
  )
}

export default Widget