import { Calendar, Clock, ExternalLink } from 'lucide-react';
import { useTheme } from '../contexts/Theme';
import { Link } from 'react-router-dom';

export const Dashboard = () => {
    const { darkMode } = useTheme();
    
    // Enhanced mock data with realistic information
    const user = {
        name: "Alex",
        fullName: "Alex Chen",
        role: "Full Stack Developer",
        avatar: "https://randomuser.me/api/portraits/men/44.jpg",
        skills: ["React", "Node.js", "Python"],
        interests: ["ChatGPT Wrappers", "Machine Learning", "Anime Women"],
        topics: ["AI/ML", "Web Development"]
    };
    
    const teamMembers = [
        { 
            name: "Alex Chen", 
            role: "Full Stack Developer", 
            avatar: "https://randomuser.me/api/portraits/men/44.jpg",
            topics: ["Health Tech", "Education"] 
        },
        { 
            name: "Marcus Chen", 
            role: "UX/UI Designer", 
            avatar: "https://randomuser.me/api/portraits/men/32.jpg",
            topics: ["Design Systems", "Mobile UX"] 
        },
        { 
            name: "Aisha Kumar", 
            role: "Data Scientist", 
            avatar: "https://randomuser.me/api/portraits/women/68.jpg",
            topics: ["AI/ML", "NLP"] 
        },
        { 
            name: "Tyler Johnson", 
            role: "Mobile Developer", 
            avatar: "https://randomuser.me/api/portraits/men/17.jpg",
            topics: ["React Native", "iOS"] 
        }
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
    const pageBackground = darkMode ? "bg-[#14161F]" : "bg-gray-100";
        
    const cardClass = darkMode 
        ? "bg-[#1C2030] text-white shadow-lg" 
        : "bg-white shadow";
    
    const subtextClass = darkMode 
        ? "text-[#A0AEC0]" 
        : "text-gray-600";
    
    const badgeClass = darkMode 
        ? "bg-[#7E22CE] text-white"
        : "bg-purple-100 text-purple-800";
    
    const highlightBadgeClass = darkMode 
        ? "bg-[#2D3348] text-[#6598FC]" 
        : "bg-blue-100 text-blue-600";
    
    const greenButtonClass = darkMode
        ? "bg-[#9AF693] hover:bg-[#8AE683] text-[#14161F]"
        : "bg-green-500 hover:bg-green-600 text-white";

    const greenTextClass = darkMode
        ? "text-[#9AF693] hover:text-[#8AE683]"
        : "text-green-600 hover:text-green-700";
        
    const purpleButtonClass = darkMode
        ? "bg-[#B975F3] hover:bg-[#A965E3] text-white"
        : "bg-purple-600 hover:bg-purple-700 text-white";
    
    const linkHoverClass = darkMode 
        ? "hover:bg-[#252A3D]" 
        : "hover:bg-gray-50";
    
    const borderClass = darkMode 
        ? "border-[#2D3348]" 
        : "border-gray-200";
    
    return (
        <div className={`${pageBackground} p-6`}>
            <div className="mb-6">
                <h1 className="text-4xl text-[#0b70ec] font-bold">Dashboard</h1>
                <p className={subtextClass}>View schedule, links, suggested members, and more.</p>
            </div>
            
            {/* Welcome & Progress */}
            <div className="mb-8">
            <h2 className="text-3xl font-bold mb-4">Way to go, <span className="text-[#9AF693]">{user.name}</span>!</h2>
                
                {/* Progress circles with updated colors */}
                <div className={`${cardClass} rounded-lg p-6`}>
                <h2 className="text-2xl font-bold mb-2">Progress</h2>
                    <div className="flex items-center justify-between space-x-2 mb-8">
                        {/* Step 1: Completed (green filled with checkmark) */}
                        <div className="flex flex-col items-center">
                            <div className={`bg-[#9AF693] rounded-full w-16 h-16 flex items-center justify-center`}>
                                <span className="text-[#14161F] text-2xl">✓</span>
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 1</span>
                        </div>
                        
                        {/* Completed connector - GREEN */}
                        <hr className={`flex-1 border-t-2 -mt-8 border-[#9AF693]`} />
                        
                        {/* Step 2: Completed (green filled with checkmark) */}
                        <div className="flex flex-col items-center">
                            <div className={`bg-[#9AF693] rounded-full w-16 h-16 flex items-center justify-center`}>
                                <span className="text-[#14161F] text-2xl">✓</span>
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 2</span>
                        </div>
                        
                        {/* Completed connector - GREEN */}
                        <hr className={`flex-1 border-t-2 -mt-8 border-[#9AF693]`} />
                        
                        {/* Step 3: Current (blue filled, larger) */}
                        <div className="flex flex-col items-center">
                            <div className={`bg-[#6598FC] rounded-full w-24 h-24 flex items-center justify-center`}>
                                <span className="text-black font-medium px-3 text-center">Lo-Fi Prototype</span>
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-blue-300' : 'text-blue-600'} font-medium`}>Step 3</span>
                        </div>
                        
                        {/* Future connector - GRAY */}
                        <hr className={`flex-1 border-t-2 -mt-8 border-[#2D3348]`} />
                        
                        {/* Step 4: Future (filled gray) */}
                        <div className="flex flex-col items-center">
                            <div className={`bg-[#3a4366] rounded-full w-16 h-16 flex items-center justify-center`}>
                                {/* Empty circle */}
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 4</span>
                        </div>
                        
                        {/* Future connector - GRAY */}
                        <hr className={`flex-1 border-t-2 -mt-8 border-[#2D3348]`} />
                        
                        {/* Step 5: Future (filled gray) */}
                        <div className="flex flex-col items-center">
                            <div className={`bg-[#3a4366] rounded-full w-16 h-16 flex items-center justify-center`}>
                                {/* Empty circle */}
                            </div>
                            <span className={`text-xs mt-2 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>Step 5</span>
                        </div>
                    </div>
                    
                    {/* Current step description - moved inside the card */}
                    <div className={`p-3 rounded-lg text-center ${darkMode ? 'bg-[#252A3D]' : 'bg-blue-100'}`}>
                        <p className={`text-sm ${darkMode ? 'text-[#6598FC]' : 'text-blue-700'}`}>
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
                        <h2 className="text-2xl font-bold mb-2">Your Profile</h2>
                        <div className="flex items-center mb-2">
                            <div className="w-12 h-12 rounded-full mr-3 overflow-hidden">
                                <img src={user.avatar} 
                                    alt={user.fullName} 
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                        e.currentTarget.onerror = null;
                                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${user.fullName.replace(' ', '+')}&background=random`;
                                    }}
                                />
                            </div>
                            <div>
                                <h3 className="font-medium">{user.fullName}</h3>
                                <p className={`text-sm ${subtextClass}`}>{user.role}</p>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <div>
                                <h4 className="text-sm font-medium mb-1">Topics</h4>
                                <div className="flex flex-wrap gap-2">
                                    {user.topics.map((topic, index) => (
                                        <span key={index} className={`${badgeClass} text-xs px-2 py-1 rounded-full`}>
                                            {topic}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-sm font-medium mb-1">Skills</h4>
                                <div className="flex flex-wrap gap-2">
                                    {user.skills.map((skill, index) => (
                                        <span key={index} className={`${badgeClass} text-xs px-2 py-1 rounded-full`}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-sm font-medium mb-1">Interests</h4>
                                <div className="flex flex-wrap gap-2">
                                    {user.interests.map((interest, index) => (
                                        <span key={index} className={`${badgeClass} text-xs px-2 py-1 rounded-full`}>
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Edit Profile button moved to bottom and right-aligned */}
                        <div className="mt-4 flex justify-end">
                            <button 
                                onClick={() => alert('Edit profile functionality would open here')}
                                className={`${greenButtonClass} text-sm px-3 py-1 rounded-full flex items-center`}
                            >
                                Edit Profile →
                            </button>
                        </div>
                    </div>
                    
                    {/* Hackathon Info */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <div className="flex justify-between items-center mb-3">
                            <h2 className="text-2xl font-bold">{hackathonInfo.name}</h2>
                            <span className={`${highlightBadgeClass} text-xs px-2 py-1 rounded`}>Registration Open</span>
                        </div>
                        <p className={`text-sm ${subtextClass} mb-2`}>{hackathonInfo.dates}</p>
                        
                        <div className={`${darkMode ? 'bg-gray-700' : 'bg-gray-100'} p-3 rounded-lg flex items-center mb-4`}>
                            <Clock className={`w-4 h-4 mr-2 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                            <span className="text-sm">Hackathon begins in {hackathonInfo.daysUntil} days</span>
                            <button className={`ml-auto flex items-center ${darkMode ? 'text-blue-400 hover:text-blue-300' : 'text-blue-600 hover:text-blue-700'} text-sm transition-colors`}
                                onClick={() => alert('Pretending to integrate with Google Calendar')}
                            >
                                <span>Add to Calendar</span>
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-2 justify-between">
                            <div className="flex flex-wrap gap-2">
                                <Link to="/schedule" className={`${purpleButtonClass} text-sm px-3 py-1 rounded-full inline-block text-center`}>
                                    Schedule
                                </Link>
                                <button className={`${purpleButtonClass} text-sm px-3 py-1 rounded-full`}>Resources</button>
                                <button className={`${purpleButtonClass} text-sm px-3 py-1 rounded-full`}>Chat</button>
                                <button className={`${purpleButtonClass} text-sm px-3 py-1 rounded-full`}>Help</button>
                            </div>
                            <button className={`${greenButtonClass} text-sm px-3 py-1 rounded-full flex items-center`}>
                                Register →
                            </button>
                        </div>
                    </div>
                    
                    {/* Event Schedule */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <div className="flex justify-between items-center mb-2">
                            <h2 className="text-2xl font-bold flex items-center">
                                <Calendar className="w-5 h-5 mr-2" /> Event Schedule
                            </h2>
                            <a href="https://sachacks.io/agenda" target="_blank" rel="noopener noreferrer" 
                                className={`${greenTextClass} text-sm hover:underline flex items-center`}>
                                View Full Schedule
                                <ExternalLink className="w-4 h-4 ml-1" />
                            </a>
                        </div>
                        
                        <div className="space-y-4">
                            {events.map((event, index) => (
                                <div key={index} className="flex border-l-4 border-[#0c56eb] pl-2">
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
                        <h2 className="text-2xl font-bold mb-2">Your Team</h2>
                        <div className="space-y-3">
                            {teamMembers.map((member, index) => (
                                <div key={index} className={`border-b ${borderClass} pb-3 last:border-0 last:pb-0`}>
                                    <div className="flex items-center mb-2">
                                        <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                                            <img 
                                                src={member.avatar} 
                                                alt={member.name} 
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.currentTarget.onerror = null;
                                                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${member.name.replace(' ', '+')}&background=random`;
                                                }}
                                            />
                                        </div>
                                        <div>
                                            <h3 className="font-medium">{member.name}</h3>
                                            <p className={`text-sm ${subtextClass}`}>{member.role}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                        {member.topics.map((topic, i) => (
                                            <span key={i} className={`${badgeClass} text-xs px-2 py-1 rounded-full`}>
                                                {topic}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Link to="/team-dashboard" className={`${greenButtonClass} text-sm px-3 py-1 rounded-full flex items-center justify-center w-50 mt-4`}>
                                Manage Team →
                            </Link>
                        </div>
                    </div>
                    
                    {/* Important Links */}
                    <div className={`${cardClass} rounded-lg p-6`}>
                        <h2 className="text-2xl font-bold mb-2">Important Links</h2>
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