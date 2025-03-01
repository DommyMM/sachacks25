import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
    Users, Calendar, Clock, ExternalLink, Info, 
    MessageSquare, Award, Book, Bell, 
    ChevronRight, ArrowRight, HelpCircle, Code
} from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();
  
  // Mock user data - would come from your auth context or API in a real app
  const [user] = useState({
    name: "Alex Chen",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
    skills: ["React", "Node.js", "Python", "UI/UX"],
    interests: ["AI/ML", "Web Development", "Education"],
    role: "Full Stack Developer",
    experience: "Intermediate",
    location: "San Francisco, CA",
    timezone: "PST (UTC-8)",
    teamId: "t1", // null if not in a team
    github: "github.com/alexchen",
    linkedin: "linkedin.com/in/alexchen"
  });
  
  // Mock hackathon data
  const [hackathon] = useState({
    name: "SacHacks 2025",
    startDate: "March 5, 2025",
    endDate: "March 7, 2025",
    location: "Online & Sacramento",
    status: "Registration Open",
    daysUntil: 4,
    schedule: [
      { time: "March 5, 10:00 AM", title: "Opening Ceremony", location: "Main Hall" },
      { time: "March 5, 11:30 AM", title: "Team Formation Workshop", location: "Room A" },
      { time: "March 5, 2:00 PM", title: "Hacking Begins", location: "All Rooms" }
    ],
    resources: [
      { title: "Hackathon Rules", url: "#rules" },
      { title: "Judging Criteria", url: "#criteria" },
      { title: "Available APIs", url: "#apis" },
      { title: "Prizes Information", url: "#prizes" }
    ],
    faqs: [
      { question: "What should I bring?", answer: "Your laptop, charger, and your creativity!" },
      { question: "Can I start working on the project before the event?", answer: "No, all projects must be started during the hackathon." }
    ]
  });
  
  // Mock team data and AI suggestions
  const [teamData] = useState({
    userTeam: {
      id: "t1",
      name: "Code Crushers",
      members: [
        { name: "Alex Chen", role: "Full Stack Developer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex" },
        { name: "Jamie Smith", role: "UX Designer", avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jamie" }
      ],
      status: "Forming",
      lookingFor: ["Data Scientist", "Backend Developer"]
    },
    suggestedTeams: [
      {
        id: "t2",
        name: "AI Innovators",
        description: "Building an educational AI solution",
        matchScore: 92,
        lookingFor: ["Full Stack Developer"]
      },
      {
        id: "t3",
        name: "Web3 Wizards",
        description: "Creating a decentralized marketplace",
        matchScore: 85,
        lookingFor: ["Frontend Developer", "UI/UX Designer"]
      }
    ],
    suggestedMembers: [
      {
        id: "u1",
        name: "Sam Johnson",
        role: "Data Scientist",
        matchScore: 94,
        skills: ["Python", "TensorFlow", "Data Analysis"]
      },
      {
        id: "u2",
        name: "Jordan Lee",
        role: "Backend Developer",
        matchScore: 89,
        skills: ["Java", "Spring Boot", "MySQL"]
      }
    ]
  });
  
  // Mock notifications for demonstration
  const [notifications] = useState([
    "New join request from Sam Johnson",
    "Team formation deadline in 2 days",
    "Workshop 'Intro to APIs' starts in 1 hour"
  ]);

  // Function to handle navigation to different pages
  const navigateTo = (page: string, id: string | null = null) => {
    if (id) {
      navigate(`/${page}/${id}`);
    } else {
      navigate(`/${page}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Left Column - Profile and Team */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* User Profile Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-4">
              <img 
                src={user.avatar} 
                alt={user.name}
                className="w-16 h-16 rounded-full mr-4"
              />
              <div>
                <h2 className="text-xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.role}</p>
              </div>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="flex items-start">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium mr-2">
                  {user.experience}
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                  {user.timezone}
                </span>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">Skills</h3>
                <div className="flex flex-wrap gap-1">
                  {user.skills.map((skill, index) => (
                    <span key={index} className="bg-indigo-100 text-indigo-800 px-2 py-0.5 rounded text-xs">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-700 mb-1">Interests</h3>
                <div className="flex flex-wrap gap-1">
                  {user.interests.map((interest, index) => (
                    <span key={index} className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <button 
              className="text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center w-full justify-center mt-2"
              onClick={() => navigateTo('profile')}
            >
              Edit Profile <ChevronRight className="w-4 h-4 ml-1" />
            </button>
          </div>
          
          {/* Current Team Card (if in a team) */}
          {user.teamId && teamData.userTeam && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-lg font-semibold mb-3 flex items-center">
                <Users className="w-5 h-5 mr-2" /> Your Team
              </h2>
              
              <div className="mb-3">
                <div className="flex justify-between items-center mb-2">
                  <h3 className="font-medium">{teamData.userTeam.name}</h3>
                  <span className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs">
                    {teamData.userTeam.status}
                  </span>
                </div>
                
                <div className="space-y-2 mb-3">
                  {teamData.userTeam.members.map((member, index) => (
                    <div key={index} className="flex items-center">
                      <img 
                        src={member.avatar} 
                        alt={member.name}
                        className="w-8 h-8 rounded-full mr-2"
                      />
                      <div>
                        <div className="text-sm font-medium">{member.name}</div>
                        <div className="text-xs text-gray-600">{member.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {teamData.userTeam.lookingFor.length > 0 && (
                  <div>
                    <h4 className="text-xs font-medium text-gray-700 mb-1">Looking for:</h4>
                    <div className="flex flex-wrap gap-1">
                      {teamData.userTeam.lookingFor.map((role, index) => (
                        <span key={index} className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs">
                          {role}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
              
              <button 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded text-sm font-medium"
                onClick={() => navigateTo('team', teamData.userTeam.id)}
              >
                Manage Team
              </button>
            </div>
          )}
        </div>
        
        {/* Middle Column - Hackathon Info */}
        <div className="w-full lg:w-1/2 space-y-6">
          {/* Hackathon Status Card */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h1 className="text-2xl font-bold">{hackathon.name}</h1>
                <p className="text-gray-600">{hackathon.startDate} - {hackathon.endDate}</p>
                <p className="text-gray-600">{hackathon.location}</p>
              </div>
              <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm font-medium">
                {hackathon.status}
              </span>
            </div>
            
            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-4 flex items-center justify-between">
              <div className="flex items-center">
                <Clock className="w-5 h-5 text-blue-500 mr-2" />
                <span className="font-medium">Hackathon begins in {hackathon.daysUntil} days</span>
              </div>
              <button className="text-blue-600 hover:text-blue-800 text-sm font-medium">
                Add to Calendar
              </button>
            </div>
            
            <div className="flex flex-wrap gap-3">
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 px-4 rounded-full text-sm font-medium flex items-center"
                onClick={() => navigateTo('schedule')}
              >
                <Calendar className="w-4 h-4 mr-1.5" /> Schedule
              </button>
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 px-4 rounded-full text-sm font-medium flex items-center"
                onClick={() => navigateTo('resources')}
              >
                <Book className="w-4 h-4 mr-1.5" /> Resources
              </button>
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 px-4 rounded-full text-sm font-medium flex items-center"
                onClick={() => navigateTo('chat')}
              >
                <MessageSquare className="w-4 h-4 mr-1.5" /> Chat
              </button>
              <button 
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-1.5 px-4 rounded-full text-sm font-medium flex items-center"
                onClick={() => navigateTo('help')}
              >
                <HelpCircle className="w-4 h-4 mr-1.5" /> Help
              </button>
            </div>
          </div>

          {/* Schedule Overview */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold flex items-center">
                <Calendar className="w-5 h-5 mr-2" /> Event Schedule
              </h2>
              <button 
                className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                onClick={() => navigateTo('schedule')}
              >
                View Full Schedule
              </button>
            </div>
            
            <div className="space-y-3">
              {hackathon.schedule.map((event, index) => (
                <div key={index} className="flex border-l-4 border-blue-500 pl-3 py-1">
                  <div className="w-32 flex-shrink-0">
                    <div className="text-sm font-medium">{event.time.split(',')[0]}</div>
                    <div className="text-xs text-gray-500">{event.time.split(' ')[1]}</div>
                  </div>
                  <div>
                    <div className="text-sm font-medium">{event.title}</div>
                    <div className="text-xs text-gray-500">{event.location}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Resources & Links */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <ExternalLink className="w-5 h-5 mr-2" /> Important Links
            </h2>
            
            <div className="grid grid-cols-2 gap-3">
              {hackathon.resources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.url}
                  className="flex items-center p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
                    {index === 0 ? <Info className="w-4 h-4 text-indigo-600" /> : 
                     index === 1 ? <Award className="w-4 h-4 text-indigo-600" /> :
                     index === 2 ? <Code className="w-4 h-4 text-indigo-600" /> :
                     <Award className="w-4 h-4 text-indigo-600" />}
                  </div>
                  <span className="font-medium text-sm">{resource.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
        
        {/* Right Column - AI-Powered Suggestions & Updates */}
        <div className="w-full lg:w-1/4 space-y-6">
          {/* Notifications */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-lg font-semibold mb-4 flex items-center">
              <Bell className="w-5 h-5 mr-2" /> Notifications
            </h2>
            
            {notifications.length > 0 ? (
              <div className="space-y-3">
                {notifications.map((notification, index) => (
                  <div key={index} className="p-3 bg-gray-50 rounded-lg text-sm">
                    {notification}
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500 text-center py-4">No new notifications</p>
            )}
          </div>
          
          {/* Team Suggestions */}
          {(teamData.suggestedTeams.length > 0) && (
            <div className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-lg font-semibold flex items-center">
                  <Users className="w-5 h-5 mr-2" /> Suggested Teams
                </h2>
                <button 
                  className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  onClick={() => navigateTo('find-team')}
                >
                  View All
                </button>
              </div>
              
              <div className="space-y-3">
                {teamData.suggestedTeams.map((team) => (
                  <div key={team.id} className="border rounded-lg p-3 hover:bg-gray-50">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-medium">{team.name}</h3>
                      <span className="bg-green-100 text-green-800 px-2 py-0.5 rounded text-xs">
                        {team.matchScore}% match
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{team.description}</p>
                    <div className="flex flex-wrap gap-1 mb-2">
                      {team.lookingFor.map((role, index) => (
                        <span key={index} className="bg-red-100 text-red-800 px-2 py-0.5 rounded text-xs">
                          {role}
                        </span>
                      ))}
                    </div>
                    <button 
                      className="text-blue-600 hover:text-blue-800 text-xs font-medium flex items-center"
                      onClick={() => navigateTo('team', team.id)}
                    >
                      View Team <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;