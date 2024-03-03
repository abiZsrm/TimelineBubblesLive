import { Route, Routes } from 'react-router-dom';
import './App.css';
import Editor from './components/pages/editor';
import ReactDOM from "react-dom/client";
import { BrowserRouter } from 'react-router-dom';
const App =() =>  {

    return (
            <Routes>
                <Route exact path="/TimelineBubbles" element = {<Editor/>}/>
            </Routes>
    ); 
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <App />
  </BrowserRouter>
); 