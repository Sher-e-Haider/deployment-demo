import React from 'react'
import "./featured.scss"
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';


function Featured() {
  return (
    <div className='featured'>
      <div className="horizon">
       <div className="heading">Total Revenue</div>
      <MoreHorizIcon className="horizonIcon"/>

      </div>
      <div className="bar" style={{width:"70px"}}><CircularProgressbar value={70} text={'80%'} strokeWidth={5.5} styles={buildStyles({textColor:"green"})}/></div>
      <div className="container">
          <p>Total Sales Made Today</p>
          <p className="dollar">$420</p>
          <p style={{fontSize:'11px'}}>previous transaction processing Last Payments may not be included</p>
          <div className="details">
              <div className="left">
                  <p>Target</p>
                  <div className="most">
                  <KeyboardArrowDownIcon style={{color:"red"}}/>
                  <h5 style={{color:"red"}}>$12.4k</h5>
                  </div>
              </div>
              <div className="middle">
                  <p>Last Week</p>
                  <div className="most">
                  <KeyboardArrowDownIcon/>
                  <h5>$12.4k</h5>
                  </div>
              </div>
              <div className="right">
                  <p>Last Month</p>
                  <div className="most">
                  <KeyboardArrowDownIcon style={{color:"green"}} />
                  <h5>$12.4k</h5>
                  </div>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Featured