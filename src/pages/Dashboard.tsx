import { useTheme } from '../contexts/Theme';

const Dashboard = () => {
    const { darkMode } = useTheme();
    
    return (
        <div className="p-8">
        <div className={`rounded-lg shadow-md p-6 max-w-3xl mx-auto text-center ${
            darkMode ? 'bg-gray-800' : 'bg-white'
        }`}>
            <h1 className={`text-3xl font-bold mb-6 ${
            darkMode ? 'text-white' : 'text-gray-900'
            }`}>
            SacHacks 2025 Dashboard
            </h1>
            <p className={`mb-6 ${
            darkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
            Welcome to your hackathon hub! Our design team is currently working on this page.
            </p>
            <div className={`text-sm ${
            darkMode ? 'text-gray-400' : 'text-gray-500'
            }`}>
            Currently using: <span className="font-medium">{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
            </div>
        </div>
        </div>
    );
    };

export default Dashboard;