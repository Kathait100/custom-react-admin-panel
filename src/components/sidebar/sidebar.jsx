import React from 'react'
import './sidebar.css';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import InsertChartIcon from '@mui/icons-material/InsertChart';
import MailIcon from '@mui/icons-material/Mail';
import FeedbackIcon from '@mui/icons-material/Feedback';
import ForumIcon from '@mui/icons-material/Forum';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import { Link } from 'react-router-dom';
export default function Sidebar() {
    return (
        <div className ="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">DashBoard</h3>
                        <ul className="sidebarlist">
                            <Link to = "/" className = "HomePage">
                            <li className="sidebarListItem active">
                                <LineStyleIcon className ="sidebarIcon" />
                                Home
                            </li>
                            </Link>
                            <li className="sidebarListItem">
                                <TimelineIcon className ="sidebarIcon" />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <TrendingUpIcon className ="sidebarIcon" />
                                Sales
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                        <ul className="sidebarlist">
                            <Link to ="/users" className ="usersPage">
                            <li className="sidebarListItem active">
                                <PersonOutlineIcon className ="sidebarIcon" />
                                Users
                            </li>
                            </Link>
                            <li className="sidebarListItem">
                                <ProductionQuantityLimitsIcon className ="sidebarIcon" />
                                Products
                            </li>
                            <li className="sidebarListItem">
                                <AccountBalanceIcon className ="sidebarIcon" />
                                Transaction
                            </li>
                            <li className="sidebarListItem">
                                <InsertChartIcon className ="sidebarIcon" />
                                Reports
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notification</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarListItem active">
                                <MailIcon className ="sidebarIcon" />
                                Mail
                            </li>
                            <li className="sidebarListItem">
                                <FeedbackIcon className ="sidebarIcon" />
                                Feedback
                            </li>
                            <li className="sidebarListItem">
                                <ForumIcon className ="sidebarIcon" />
                                Messages
                            </li>
                        </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                        <ul className="sidebarlist">
                            <li className="sidebarListItem active">
                                <ManageAccountsIcon className ="sidebarIcon" />
                                Manage
                            </li>
                            <li className="sidebarListItem">
                                <TimelineIcon className ="sidebarIcon" />
                                Analytics
                            </li>
                            <li className="sidebarListItem">
                                <AnalyticsIcon className ="sidebarIcon" />
                                Report
                            </li>
                        </ul>
                </div>
            </div>
        </div>
    )
}
