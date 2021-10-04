import React from 'react';
import './user.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import EmailIcon from '@mui/icons-material/Email';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import { Link } from 'react-router-dom';
export default function User() {
    return (
        <div className = "User">
            <div className="userTitleContainer">
                <h1 className="userTitle">
                    Edit User
                </h1>
                <Link to = "/newUser">
                <button className="userAddButton">
                    Create
                </button>
                </Link>
            </div>
     <div className="userContainer">
        <div className="userShow">
            <div className="userShowtop">
            <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" className="userShowImage" />
            <div className="userShowTopDetails">
            <span className="userName">John Doe</span>
            <span className="userJobTitle">Software Engineer</span>
            </div>
              </div>
               <div className="userShowBottom">
                <span className="userShowTite">
                    Account Detail
                </span>
     <div className="details">
        <PermIdentityIcon  className = "userInfoIcon" />
            <span className="userInfoTitle">John Doe</span>
     </div>
     <div className="details">
        <CalendarTodayIcon  className = "userInfoIcon" />
        <span className="userInfoTitle">4.12.1999</span>
     </div>
     <span className="userShowTite">
                    Contact Details
                </span>
     <div className="details">
        <PhoneAndroidIcon  className = "userInfoIcon" />
            <span className="userInfoTitle">+91-12345678</span>
     </div>
     <div className="details">
    <EmailIcon className = "userInfoIcon" />
    <span className="userInfoTitle">you@gmail.com</span>
     </div>
     <div className="details">
        <AddLocationIcon  className = "userInfoIcon" />
            <span className="userInfoTitle">India</span>
     </div>
               </div>
                 </div>
                <div className="userUpdate">
                    <span className="userUpdateTitle">
                        Edit
                    </span>
                <form className = "UpdateForm">
                    <div className="leftEditContainer">
                        <div className="userUpdateitems">
                            <label>UserName</label>
                            <input type="text"
                            placeholder ="John Doe" 
                            className = "userUpdatedInput"
                            />
                          </div>
                          <div className="userUpdateitems">
                            <label>Date</label>
                            <input type="Date"
                            placeholder ="04/12/1999" 
                            className = "userUpdatedInput"
                            />
                          </div>
                          <div className="userUpdateitems">
                            <label>contact</label>
                            <input type="number"
                            placeholder ="+123456789" 
                            className = "userUpdatedInput"
                            />
                          </div>
                          <div className="userUpdateitems">
                            <label>Email</label>
                            <input type="Email"
                            placeholder ="you@gmail.com" 
                            className = "userUpdatedInput"
                            />
                          </div>
                          <div className="userUpdateitems">
                            <label>Country</label>
                            <input type="text"
                            placeholder ="India" 
                            className = "userUpdatedInput"
                            />
                          </div>
                        </div>
                    <div className="rightEditContainer">
                    <div className="uploadinnerContainer">
                    <img src="https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=464&q=80" alt="" className="userShowImage" />
                        <label htmlFor="file">   <FileUploadIcon className = "uploadIcon" />
                        </label>
                        <input type="file" id = "file" style = {{display:"none"}} />
                       </div>
                    <button className = "UpdateButton"> Update </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
