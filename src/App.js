import Sidebar from "./components/sidebar/sidebar";
import Topbar from "./components/topbar/topbar";
import './App.css';
import Home from "./components/pages/home/home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Userlist from "./components/pages/UserList/Userlist";
import User from "./components/pages/user/user";
import NewUser from "./components/pages/newuser/newUser";

function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path ="/">
              <Home />
          </Route>
          <Route exact path ="/users">
            <Userlist />
          </Route>
          <Route  path ="/user/:userId">
            <User />
          </Route>
          <Route  path ="/newUser">
            <NewUser />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
export default App;
