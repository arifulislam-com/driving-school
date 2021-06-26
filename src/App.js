import './App.css';
import Home from './components/Home/Home/Home'
import Courses from './components/Courses/Courses/Courses';
import Testimonials from './components/Testimonials/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';
import Booking from './components/Dashboard/Booking/Booking';
import { createContext, useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import BookingList from './components/Dashboard/BookingList/BookingList';
import Review from './components/Dashboard/Review/Review';
import OrderList from './components/Dashboard/OrderList/OrderList';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';

export const userContext = createContext();

function App() {
  const [loggedInUser, setLoggedInuser] = useState(false)
  return (
    <div className="App">
      <userContext.Provider value={[loggedInUser, setLoggedInuser]}>
        <Router>
          <Switch>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/review">
              <Review></Review>
            </Route>
            <Route path="/orderList">
              <OrderList></OrderList>
            </Route>
            <Route path="/addService">
              <AddService></AddService>
            </Route>
            <Route path="/makeAdmin">
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path="/bookingList">
              <BookingList></BookingList>
            </Route>
            <PrivateRoute path="/booking/:id">
              <Booking></Booking>
            </PrivateRoute>
            <Route patrh="/">
              <Home></Home>
              <Courses></Courses>
              <Testimonials></Testimonials>
              <Footer></Footer>
            </Route>
          </Switch>
        </Router>
      </userContext.Provider>
    </div>
  );
}

export default App;
