import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from './pages/Dashboard';
import { TeamDashboard } from './pages/TeamDashboard';
import { ThemeProvider, useTheme } from './contexts/Theme';
import Sidebar from './components/Sidebar';
import Schedule from './pages/Schedule';

const AppContent = () => {
  const { darkMode } = useTheme();
  
  return (
    <div className={`min-h-screen transition-all duration-200 ${
      darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
    }`}>
      <Sidebar />
      <div className="pl-0 lg:pl-64">
        <main className="min-h-screen pt-16 lg:pt-0">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/team-dashboard" element={<TeamDashboard/>} />
            <Route path="/find-team" element={
              <div className="p-8 text-center">Team Finder Page (Coming Soon)</div>
            } />
            <Route path="/team/:id" element={
              <div className="p-8 text-center">Team Page (Coming Soon)</div>
            } />
            <Route path="/chat" element={
              <div className="p-8 text-center">Chat Page (Coming Soon)</div>
            } />
            <Route path="/schedule" element={ <Schedule />} />
            <Route path="/help" element={
              <div className="p-8 text-center">Help Page (Coming Soon)</div>
            } />
            <Route path="/resources" element={
              <div className="p-8 text-center">Resources Page (Coming Soon)</div>
            } />
          </Routes>
        </main>
      </div>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;