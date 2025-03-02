import { Calendar, Clock } from 'lucide-react';
import { useTheme } from '../contexts/Theme';

const Dashboard = () => {
    const { darkMode } = useTheme();
    
    // Mock data
    const user = {
        name: "Alex",
        fullName: "Alex Chen",
        role: "Full Stack Developer",
        skills: ["React", "Node.js", "Python"],
        interests: ["ChatGPT Wrappers", "Machine Learning", "Anime Women"],
        topics: ["AI/ML", "Web Development"]
    };
    
    const teamMembers = [
        { name: "Alex Chen", role: "Full Stack Developer", topics: ["AI/ML", "Web Development"] },
        { name: "Alex Chen", role: "Full Stack Developer", topics: ["AI/ML", "Web Development"] },
        { name: "Alex Chen", role: "Full Stack Developer", topics: ["AI/ML", "Web Development"] }
    ];
    
    const hackathonInfo = {
        name: "TechInnovate2025",
        dates: "March 5th, 2025 - March 7, 2025",
        status: "Registration Open",
        daysUntil: 4
    };
    
    const events = [
        { date: "March 5th", time: "10:00 AM", title: "Opening Ceremony", location: "Main Hall" },
        { date: "March 6th", time: "2:00 PM", title: "Tech Workshop", location: "Workshop Room" },
        { date: "March 6th", time: "8:00 PM", title: "Networking Dinner", location: "Dining Hall" },
        { date: "March 7th", time: "3:00 PM", title: "Closing & Awards", location: "Main Hall" }
    ];
    
    const links = [
        { title: "Hackathon Rules", icon: "📋" },
        { title: "Judging Criteria", icon: "⭐" },
        { title: "Available APIs", icon: "🔌" },
        { title: "Discord Server", icon: "💬" }
    ];
    
    // Dark mode styling classes
    const cardClass = darkMode 
        ? "bg-gray-800 text-white shadow-lg" 
        : "bg-white shadow";
    
    const subtextClass = darkMode 
        ? "text-gray-300" 
        : "text-gray-600";
    
    const badgeClass = darkMode 
        ? "bg-gray-700 text-gray-300" 
        : "bg-gray-200 text-gray-700";
    
    const highlightBadgeClass = darkMode 
        ? "bg-gray-700 text-blue-300" 
        : "bg-gray-100 text-blue-600";
    
    const linkHoverClass = darkMode 
        ? "hover:bg-gray-700" 
        : "hover:bg-gray-50";
    
    const borderClass = darkMode 
        ? "border-gray-700" 
        : "border-gray-200";
    
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Dashboard</h1>
                <p className={subtextClass}>View schedule, links, suggested members, and more.</p>
            </div>
            
            {/* Welcome & Progress */}
            <div className="mb-8">
                <h2 className="text-3xl font-bold mb-6">Hey there, {user.name}!</h2>
                
                {/* Progress with labels under circles */}
                <div>
                    <div className="flex items-center justify-between space-x-2">
                        {/* Progress circles */}
                        <div className="flex flex-col items-center">
                            <div className={`${darkMode ? 'bg-green-600' : 'bg-green-500'} rounded-full w-16 h-16 flex items-center justify-center`}>
                                <span className="text-white text-2xl">✓</span>
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 1</span>
                        </div>
                        
                        {/* Completed connector - GREEN */}
                        <hr className={`flex-1 border-t-2 -mt-4 ${darkMode ? 'border-green-600' : 'border-green-500'}`} />
                        
                        <div className="flex flex-col items-center">
                            <div className={`${darkMode ? 'bg-yellow-600' : 'bg-yellow-400'} rounded-full w-16 h-16 flex items-center justify-center`}>
                                <span className="text-white text-2xl">!</span>
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 2</span>
                        </div>
                        
                        {/* In-progress connector - YELLOW */}
                        <hr className={`flex-1 border-t-2 -mt-4 ${darkMode ? 'border-yellow-600' : 'border-yellow-400'}`} />
                        
                        <div className="flex flex-col items-center">
                            <div className={`border-2 ${darkMode ? 'border-blue-500' : 'border-blue-400'} rounded-full w-16 h-16 flex items-center justify-center`}>
                                {/* Dot instead of number 3 */}
                                <div className={`w-4 h-4 rounded-full ${darkMode ? 'bg-blue-500' : 'bg-blue-400'}`}></div>
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'} font-medium`}>Step 3</span>
                        </div>
                        
                        {/* Future connector - GRAY */}
                        <hr className={`flex-1 border-t-2 -mt-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                        
                        <div className="flex flex-col items-center">
                            <div className={`border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-full w-16 h-16 flex items-center justify-center relative`}>
                                {/* Empty circle instead of number 4 */}
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 4</span>
                        </div>
                        
                        {/* Future connector - GRAY */}
                        <hr className={`flex-1 border-t-2 -mt-4 ${darkMode ? 'border-gray-700' : 'border-gray-200'}`} />
                        
                        <div className="flex flex-col items-center">
                            <div className={`border-2 ${darkMode ? 'border-gray-700' : 'border-gray-200'} rounded-full w-16 h-16 flex items-center justify-center`}>
                                {/* Empty circle instead of number 5 */}
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 5</span>
                        </div>
                    </div>
            
                    {/* Current step description */}
                    <div className={`mt-4 p-3 rounded-lg text-center ${darkMode ? 'bg-gray-800' : 'bg-blue-100'}`}>
                        <p className={`text-sm ${darkMode ? 'text-blue-300' : 'text-blue-700'}`}>
                            <span className="font-medium">Current Step:</span> Complete your team profile and submit project idea
                        </p>
                    </div>
                </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left Column */}
                <div className="space-y-6">
                    {/* Profile Section */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <h2 className="text-lg font-bold mb-4">Your Profile</h2>
                        <div className="flex items-center mb-4">
                            <div className={`w-12 h-12 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full mr-3`}></div>
                            <div>
                                <h3 className="font-medium">{user.fullName}</h3>
                                <p className={`text-sm ${subtextClass}`}>{user.role}</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-sm font-medium mb-1">Topics</h4>
                                <div className="flex flex-wrap gap-1">
                                    {user.topics.map((topic, index) => (
                                        <span key={index} className={`${badgeClass} text-xs px-2 py-1 rounded`}>
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-sm font-medium mb-1">Skills</h4>
                                <div className="flex flex-wrap gap-1">
                                    {user.skills.map((skill, index) => (
                                        <span key={index} className={`${badgeClass} text-xs px-2 py-1 rounded`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-sm font-medium mb-1">Interests</h4>
                                <div className="flex flex-wrap gap-1">
                                    {user.interests.map((interest, index) => (
                                        <span key={index} className={`${badgeClass} text-xs px-2 py-1 rounded`}>
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    {/* Hackathon Info */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-lg font-bold">{hackathonInfo.name}</h2>
                            <span className={`${highlightBadgeClass} text-xs px-2 py-1 rounded`}>Registration Open</span>
                        </div>
                        <p className={`text-sm ${subtextClass} mb-4`}>{hackathonInfo.dates}</p>
                        
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded-lg flex items-center mb-4`}>
                            <Clock className={`w-4 h-4 mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                            <span className="text-sm">Hackathon begins in {hackathonInfo.daysUntil} days</span>
                            <button className={`ml-auto ${darkMode ? 'text-blue-400' : 'text-blue-600'} text-sm`}>Add to Calendar</button>
                        </div>
                        
                        <div className="flex flex-wrap gap-2">
                            <button className={`${badgeClass} text-sm px-3 py-1 rounded-full`}>Schedule</button>
                            <button className={`${badgeClass} text-sm px-3 py-1 rounded-full`}>Resources</button>
                            <button className={`${badgeClass} text-sm px-3 py-1 rounded-full`}>Chat</button>
                            <button className={`${badgeClass} text-sm px-3 py-1 rounded-full`}>Help</button>
                        </div>
                    </div>
                    
                    {/* Event Schedule */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-lg font-bold flex items-center">
                                <Calendar className="w-5 h-5 mr-2" /> Event Schedule
                            </h2>
                            <button className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} text-sm`}>View Full Schedule</button>
                        </div>
                        
                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div key={index} className="flex">
                                    <div className="w-32 text-sm">
                                        <p className="font-medium">{event.date}</p>
                                        <p className={subtextClass}>{event.time}</p>
                                    </div>
                                    <div className="text-sm">
                                        <p className="font-medium">{event.title}</p>
                                        <p className={subtextClass}>{event.location}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                
                {/* Right Column */}
                <div className="space-y-6">
                    {/* Team Section */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <h2 className="text-lg font-bold mb-4">Your Team</h2>
                        <div className="space-y-3">
                            {teamMembers.map((member, index) => (
                                <div key={index} className={`border-b ${borderClass} pb-3 last:border-0 last:pb-0`}>
                                    <div className="flex items-center mb-2">
                                        <div className={`w-10 h-10 ${darkMode ? 'bg-gray-700' : 'bg-gray-200'} rounded-full mr-3`}></div>
                                        <div>
                                            <h3 className="font-medium">{member.name}</h3>
                                            <p className={`text-sm ${subtextClass}`}>{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-1">
                                        {member.topics.map((topic, i) => (
                                            <span key={i} className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} ${darkMode ? 'text-gray-300' : 'text-gray-700'} text-xs px-2 py-0.5 rounded`}>
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4">
                            <button className={`${darkMode ? 'text-blue-400' : 'text-blue-600'} font-medium text-sm flex items-center justify-end w-full`}>
                                Manage Team →
                            </button>
                        </div>
                    </div>
                    
                    {/* Important Links */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <h2 className="text-lg font-bold mb-4">Important Links</h2>
                        <div className="space-y-3">
                            {links.map((link, index) => (
                                <a 
                                    key={index} 
                                    href="#" 
                                    className={`block p-3 border ${borderClass} rounded-lg ${linkHoverClass}`}
                                >
                                    <div className="flex items-center">
                                        <span className="mr-3 text-xl">{link.icon}</span>
                                        <span className="font-medium">{link.title}</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;