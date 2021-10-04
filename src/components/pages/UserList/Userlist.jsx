import React, { useState } from 'react';
import './UserList.css';
import { DataGrid } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
export default function Userlist() {
    const columns = [
        { field: 'id', headerName: 'ID', width: 200 },
        { field: 'userName', headerName: 'User Name', width: 200, renderCell: (params) =>
        {
          return(
            <div className = "userListuser">
              <img src={params.row.avatar} alt=""      
              className="src" />
              {params.row.userName}
            </div>
          )
        }
      },
        {
          field: 'email',
          headerName: 'Email',
          type: 'number',
          width: 200,
        },
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 100,
        },
        {
          field:'action',
          headerName:'Action',
          width:150,
          renderCell: (params) => {
            return (
              <> 
              <Link to = {'/user/'+ params.row.id}>
              <button className ="userListEdit">Edit</button>
              </Link>
           <DeleteIcon className ="userListDelete" 
            onClick = {() => handelDelete(params.row.id)}
            />
              </>
            )
          }
        },
      ];
      
      const rows = [
        { 
          id: 1,
          userName: 'Vikash',
          avatar: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          email: "abc@gmail.com",
          status:'Active'
        },
        { 
          id: 2,
          userName: 'Aayush',
          avatar: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          email: "abc123@gmail.com",
          status:'Active'
        },
        { 
          id: 3,
          userName: 'Kathait',
          avatar: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          email: "abcsingh@gmail.com",
          status:'Pending'
        },
        { 
          id: 4,
          userName: 'king',
          avatar: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          email: "fero@gmail.com",
          status:'Updated'
        },
        { 
          id: 5,
          userName: 'king',
          avatar: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          email: "fero@gmail.com",
          status:'Updated'
        },
        { 
          id: 6,
          userName: 'Revolution',
          avatar: 'https://images.unsplash.com/photo-1544348817-5f2cf14b88c8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=387&q=80',
          email: "helloworld@gmail.com",
          status:'Active'
        },
      ];
      const[data,setData] = useState(rows);
      const handelDelete = (id) =>{
        console.log(id);
        setData(data.filter((item) => item.id !== id));
        console.log(data);
      }
    return (
        <div className = "UserList">
             <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={4}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
        </div>
    )
}
