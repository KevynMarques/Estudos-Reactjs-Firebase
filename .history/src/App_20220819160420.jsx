import { PageHome } from "./Pages/Page1";
import {BrowserRouter as  Router, Route} from 'react-router-dom'; 


function App() {
  return (
    <Router >
        <Route path="/" component="PageHome" />

    </Router>
  );
}

export default App;
