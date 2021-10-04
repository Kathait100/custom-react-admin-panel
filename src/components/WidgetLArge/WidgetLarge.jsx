import React from 'react'
import './WIdgetLarge.css'
export default function WidgetLarge() {
    const Button = ({type}) =>{
        return <button className = {"WidgetLargeButton " + type}>{type}</button>
    }
    return (
        <div className = "WidgetLarge">
           <h3 className="widgetLargeTitle">Latest Transaction</h3>
            <table className="widgetLargeTable">
                <tr className="widgetLargerow">
                    <th className="widgetLargeth">Customer</th>
                    <th className="widgetLargeth">Date</th>
                    <th className="widgetLargeth">Amount</th>
                    <th className="widgetLargeth">Status</th>
                </tr>
                <tr className="widgetLargerow">
                    <td className="widgetLargerUser">
                        <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" className="WidgetLArgeImage" />
                    <span className="widgetLargeName">Susan</span>
                    </td>
                    <td className="widgetLargeDate">
                        1 Nov, 2020
                    </td>
                    <td className="widgetLargeAmount">
                        $5231
                    </td>
                    <td className="widgetLargeStatus">
                      <Button type ="Approved" />
                    </td>
                </tr>
                <tr className="widgetLargerow">
                    <td className="widgetLargerUser">
                        <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" className="WidgetLArgeImage" />
                    <span className="widgetLargeName">Susan</span>
                    </td>
                    <td className="widgetLargeDate">
                        1 Nov, 2020
                    </td>
                    <td className="widgetLargeAmount">
                        $5231
                    </td>
                    <td className="widgetLargeStatus">
                      <Button type ="Pending" />
                    </td>
                </tr>
                <tr className="widgetLargerow">
                    <td className="widgetLargerUser">
                        <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" className="WidgetLArgeImage" />
                    <span className="widgetLargeName">Susan</span>
                    </td>
                    <td className="widgetLargeDate">
                        1 Nov, 2020
                    </td>
                    <td className="widgetLargeAmount">
                        $5231
                    </td>
                    <td className="widgetLargeStatus">
                      <Button type ="Declined" />
                    </td>
                </tr>
                <tr className="widgetLargerow">
                    <td className="widgetLargerUser">
                        <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" className="WidgetLArgeImage" />
                    <span className="widgetLargeName">Susan</span>
                    </td>
                    <td className="widgetLargeDate">
                        1 Nov, 2020
                    </td>
                    <td className="widgetLargeAmount">
                        $5231
                    </td>
                    <td className="widgetLargeStatus">
                      <Button type ="Approved" />
                    </td>
                </tr>
                <tr className="widgetLargerow">
                    <td className="widgetLargerUser">
                        <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" className="WidgetLArgeImage" />
                    <span className="widgetLargeName">Susan</span>
                    </td>
                    <td className="widgetLargeDate">
                        1 Nov, 2020
                    </td>
                    <td className="widgetLargeAmount">
                        $5231
                    </td>
                    <td className="widgetLargeStatus">
                      <Button type ="Declined" />
                    </td>
                </tr>
            </table>
        </div>
    )
}
