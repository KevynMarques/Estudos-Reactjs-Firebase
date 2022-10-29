import  {PageHome}  from "./Pages/Page1";
import { Page2 } from "./Pages/Page2";
import {BrowserRouter as  Router, Route} from 'react-router-dom'; 


function App() {
  return (
    <Router >
        <Route path="/" component="PageHome" />
        <Route path="/" component="Page2" />

    </Router>
  );
}

export default App;
