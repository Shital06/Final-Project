import './App.css';
import Nav from "./components/Nav";
import HomePage from "./components/HomePage";
import BookingPage from "./components/BookingPage";
import CallToAction from "./components/CallToAction";
import Footer from "./components/Footer";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Nav />
    <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path ="/booking" element={<BookingPage />}></Route>
    </Routes>
    <Footer />
    </>
    );
}

export default App;
