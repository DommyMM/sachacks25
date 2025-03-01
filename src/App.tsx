import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/team/:id" element={<div className="p-8 text-center">Team Page (Coming Soon)</div>} />
        <Route path="/profile" element={<div className="p-8 text-center">Profile Page (Coming Soon)</div>} />
        <Route path="/schedule" element={<div className="p-8 text-center">Schedule Page (Coming Soon)</div>} />
        <Route path="/resources" element={<div className="p-8 text-center">Resources Page (Coming Soon)</div>} />
        <Route path="/chat" element={<div className="p-8 text-center">Chat Page (Coming Soon)</div>} />
        <Route path="/help" element={<div className="p-8 text-center">Help Page (Coming Soon)</div>} />
        <Route path="/find-team" element={<div className="p-8 text-center">Team Finder Page (Coming Soon)</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;