import React from 'react'
import Charts from '../../charts/Charts';
import Featured from '../../featuredInfo/Featured';
import './home.css';
import { Userdata } from  '../../../dummData';
import WidgetLarge from '../../WidgetLArge/WidgetLarge';
import Widgetsmall from '../../widgetsmall/Widgetsmall';
export default function Home() {
    return (
        <div className = "Home">
            <Featured />
            <Charts data ={Userdata} title ="User Anlytics" grid dataKey ="Active Users" />
             <div className="home-widgets">
                 <Widgetsmall />
                 <WidgetLarge />
             </div>
        </div>
    )
}
