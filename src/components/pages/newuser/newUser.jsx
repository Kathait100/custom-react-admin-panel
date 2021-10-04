import React from 'react'
import './newUser.css';
export default function NewUser() {
    return (
        <div className = "newUser">
            <h1 className="newUserTitle">
                New User
            </h1>
            <form className="newUserForm">
                <div className="newUserItem">
                    <label>Username</label>
                    <input type="text"
                    placeholder = "John"
                    />
                </div>
                <div className="newUserItem">
                    <label>Fullname</label>
                    <input type="text"
                    placeholder = "John Doe"
                    />
                </div>
                <div className="newUserItem">
                    <label>Email</label>
                    <input type="email"
                    placeholder = "abc@gmail.com"
                    />
                </div>
                <div className="newUserItem">
                    <label>Password</label>
                    <input type="number"
                    placeholder = "+91-123456789"
                    />
                </div>

                <div className="newUserItem">
                    <label>Address</label>
                    <input type="text"
                    placeholder = "India"
                    />
                </div>
            <div className="newUserGender">
                 <label className ="genderTitle">Gender</label>
                 <div className="genderContainer">
                 <input type="radio" name="gender" id="male" value ="male" />
                 <label htmlFor="male">male</label>
                 <input type="radio" name="gender" id="female" value ="female" />
                 <label htmlFor="female">female</label>
                 <input type="radio" name="gender" id="others" value ="others" />
                 <label htmlFor="others">others</label>
                 </div>
              </div>
              <div className="newUserItem">
                  <label>Active</label>
                  <select name="active" id="active" className = "newUserSelect">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                  </select>
              </div>
              <button className="newUserButton">Create</button>
            </form>
        </div>
    )
}
