import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Users, User, Calendar, MessageSquare, Bell, Moon, Sun, Menu, X } from 'lucide-react';
import { useTheme } from '../contexts/Theme';

const Sidebar = () => {
    const { darkMode, toggleDarkMode } = useTheme();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navItems = [
        { name: 'Dashboard', path: '/', icon: <Home className="w-5 h-5" /> },
        { name: 'Find Team', path: '/find-team', icon: <Users className="w-5 h-5" /> },
        { name: 'Owner Dashboard', path: '/owner-dashboard', icon: <User className="w-5 h-5" /> },
        { name: 'Chat', path: '/chat', icon: <MessageSquare className="w-5 h-5" /> },
        { name: 'Schedule', path: '/schedule', icon: <Calendar className="w-5 h-5" /> },
        { name: 'Help', path: '/help', icon: <Bell className="w-5 h-5" /> },
    ];

    return (
        <>
        {/* Mobile menu button */}
        <div className="fixed top-4 left-4 z-50 lg:hidden">
            <button 
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="p-2 rounded-md bg-white dark:bg-gray-800 shadow-md text-gray-700 dark:text-gray-300"
            >
                {sidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
        </div>
        
        {/* Sidebar backdrop for mobile */}
        {sidebarOpen && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={() => setSidebarOpen(false)}></div>
        )}
        
        {/* Sidebar */}
        <div className={`fixed left-0 top-0 h-full border-r ${
            darkMode ? 'border-gray-700 bg-gray-900' : 'border-gray-200 bg-white'
            } ${
            sidebarOpen ? 'w-64 transition-width duration-300' : 'w-0 lg:w-64 transition-width duration-300'
            }`}
        >
            <div className="flex flex-col h-full">
            {/* Logo */}
            <div className="px-6 py-8">
                <h1 className="text-2xl font-bold text-blue-600 dark:text-blue-400">SacHacks 2025</h1>
            </div>
            
            {/* Navigation links */}
            <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
                {navItems.map((item) => (
                <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) => {
                        // Base classes
                        const baseClasses = "flex items-center px-3 py-3 rounded-lg transition-colors";
                        if (isActive) {
                            return `${baseClasses} ${
                                darkMode ? "bg-blue-900 text-blue-300 font-medium" 
                                : "bg-blue-50 text-blue-700 font-medium"
                            }`;
                        }
                        return `${baseClasses} ${
                            darkMode ? "text-gray-100 hover:bg-gray-800" 
                            : "text-gray-900 hover:bg-gray-100"
                        }`;
                    }}
                    onClick={() => setSidebarOpen(false)}
                >
                    {({ isActive }) => (
                        <>
                            <span className={`mr-3 ${
                                isActive 
                                ? (darkMode ? "text-blue-400" : "text-blue-600")
                                : (darkMode ? "text-gray-300" : "text-gray-800") 
                            }`}>
                                {item.icon}
                            </span>
                            <span>{item.name}</span>
                        </>
                    )}
                </NavLink>
                ))}
            </nav>
            
            {/* Dark mode toggle */}
            <div className="p-4 border-t border-gray-200 dark:border-gray-700">
                <button 
                onClick={toggleDarkMode} 
                className={`flex items-center justify-center w-full px-4 py-2 rounded-lg transition-colors ${
                    darkMode 
                        ? 'bg-gray-800 hover:bg-gray-700 text-gray-100' 
                        : 'bg-gray-100 hover:bg-gray-200 text-gray-800'
                    }`}
                >
                {darkMode ? (
                    <>
                    <Sun className="w-5 h-5 mr-2 text-yellow-300" />
                    <span>Light Mode</span>
                    </>
                ) : (
                    <>
                    <Moon className="w-5 h-5 mr-2 text-blue-600" />
                    <span>Dark Mode</span>
                    </>
                )}
                </button>
            </div>
            </div>
        </div>
        </>
    );
};

export default Sidebar;