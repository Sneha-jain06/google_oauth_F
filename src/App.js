import './App.css';
import Login from './components/login';
import Signup from './components/signup';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Form from './components/form';

function App() {
  return (
    <div className="App">

      <Router>
        <Routes>
          <Route path="/login"
            element={<Login />}>

          </Route>
          <Route path="/" element={<Signup />}>

          </Route>
        </Routes>
      </Router>


      {/* <Form /> */}
    </div>
  );
}

export default App;
