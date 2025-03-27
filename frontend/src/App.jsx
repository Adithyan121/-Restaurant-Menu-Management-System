import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Footer from "./components/Footer";
import "./App.css";
import AdminPage from "./pages/Admin";
import ContactSection from "./components/ContactSection";

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/menu" element={<Menu />} />
                <Route path="/admin" element={<AdminPage/>} />

            </Routes>
            <ContactSection/>
            <Footer />
        </Router>
    );
}

export default App;
