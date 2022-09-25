import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import LoginScreen from './pages/Login';

function Paths() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LoginScreen />} />
                <Route path="/home" element={<HomePage />} />
            </Routes>
        </Router>
    )
}

export default Paths