import React from 'react'
import './topbar.css'
import NotificationsIcon from '@mui/icons-material/Notifications';
import SettingsIcon from '@mui/icons-material/Settings';
import LanguageIcon from '@mui/icons-material/Language';
export default function Topbar() {
    return (
    <div className = "topbar">
      <div className="topbarWrapper">
        <div className="topbar-left">
            <span className="topbar-logo">
                Admin Panel
            </span>
        </div>
        <div className="topbar-right">
            <div className="topbar-icons-container">
                <NotificationsIcon />
                <span className = "top-icon-badge">
                    2
                </span>
            </div>
            <div className="topbar-icons-container">
                <LanguageIcon />
                <span className = "top-icon-badge">
                    2
                </span>
            </div>
            <div className="topbar-icons-container">
                <SettingsIcon />
            </div>
            <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" className="topAvatar" alt ="avatarImage" />
                    
  </div>
      </div>
    </div>
    )
}
