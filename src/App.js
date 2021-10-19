
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Doctors from './components/Doctors/Doctors';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ServiceDetail from './components/SeviceDetail/ServiceDetail';
import Signup from './components/Signup/Signup'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/serviceDetail/:detailId">
            <ServiceDetail></ServiceDetail>
          </Route>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
