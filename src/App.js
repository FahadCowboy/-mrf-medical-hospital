
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import About from './components/About/About';
import './App.css';
import Doctors from './components/Doctors/Doctors';
import NotFound from './components/NotFound/NotFound'
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import ServiceDetail from './components/SeviceDetail/ServiceDetail';
import Signup from './components/Signup/Signup'
import AuthProvider from './contex/AuthProvider';
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div>
      <AuthProvider>

        <BrowserRouter>
          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/about">
              <About></About>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/signup">
              <Signup></Signup>
            </Route>

            <PrivateRoute path="/serviceDetail/:detailId">
              <ServiceDetail></ServiceDetail>
            </PrivateRoute>

            <PrivateRoute path="/doctors">
              <Doctors></Doctors>
            </PrivateRoute>

            <Route path="/**">
              <NotFound></NotFound>
            </Route>
            
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
