import './App.css';
import Login from './components/login';
import Signup from './components/signup';
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  return (
    <div className="App">

 {/* <Router>
        <Routes>
          <Route path="/login" 
          element= {<Login />}>
           
          </Route>
          <Route path="/signup" element= {<Signup />}>
            
          </Route>
        </Routes>
</Router> */}


    {/* <Login /> */}
     <Signup/>
  </div>
  );
}

export default App;
