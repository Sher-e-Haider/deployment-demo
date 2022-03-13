import React from 'react'
import Chart from '../../components/chart/Chart'
import Featured from '../../components/featured/Featured'
import Navbar from '../../components/navbar/Navbar'
import Sidebar from '../../components/sidebar/Sidebar'
import Widget from '../../components/widget/Widget'
import Tablet from "../../components/tablet/Tablet";
import "./home.scss"
import '../../style/style.scss'

function Home({state,setState}) {
  
  console.log(state,'lllllliii');
  
  return (
    <div className='home dark' >
      <Sidebar state={state} setState={setState}/>
      <div className="homeContainer">
        <Navbar/>
       <div className="widgets">
         <Widget type="user"/>
         <Widget type="order"/>
         <Widget type="earning"/>
         <Widget type="balance"/>
       </div>
       <div className="charts">
        
         <Chart className="charts"/>
         <Featured/>
       </div>
       <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Tablet />
        </div>
      </div>
    </div>
  )
}

export default Home