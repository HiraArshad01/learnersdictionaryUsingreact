import ReactDOM from "react-dom/client";
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter, Route, Routes
} from "react-router-dom";
import MainHome from './Screens/MainHome';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<MainHome/>} />
    </Routes>
   </BrowserRouter>
  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
