import { Users, Star, Edit, Plus, MessageSquare } from 'lucide-react';
import { useTheme } from '../contexts/Theme';
import { useState } from 'react';

interface TeamMember {
    name: string;
    role: string;
    avatar: string;
    skills: string[];
}

interface JoinRequest {
    id: string;
    name: string;
    role: string;
    avatar: string;
    skills: string[];
    message: string;
}

interface TeamData {
    name: string;
    status: string;
    memberCount: number;
    maxMembers: number;
    description: string;
    goal: string;
    topics: string[];
    repository: string;
    members: TeamMember[];
    lookingFor: string[];
    joinRequests: JoinRequest[];
}

export const TeamDashboard = () => {
    const { darkMode } = useTheme();
    
    // Mock team data with useState for reactivity and proper typing
    const [team, setTeam] = useState<TeamData>({
        name: "CodeCrushers",
        status: "Forming",
        memberCount: 2,
        maxMembers: 4,
        description: "Building an AI-powered team matching app for hackathons",
        goal: "Learning and Winning",
        topics: ["AI/ML", "Web Development"],
        repository: "https://www.github.com/codecrusher/teacm-match",
        members: [
            {
                name: "Alex Chen",
                role: "Full Stack Developer",
                avatar: "https://randomuser.me/api/portraits/men/44.jpg",
                skills: ["React", "Node.js", "Python"]
            },
            {
                name: "Jamie Smith",
                role: "UX Designer",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg",
                skills: ["Figma", "UI Design", "User Research"]
            }
        ],
        lookingFor: ["ML Engineer", "Backend Developer"],
        joinRequests: [
            {
                id: "req1",
                name: "Taylor Wong",
                role: "Data Scientist",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                skills: ["TensorFlow", "Python", "Data Analysis"],
                message: "I'd love to join your team! I have experience in ML and can help with AI-matching algorithm!"
            },
            {
                id: "req2",
                name: "Jordan Patel",
                role: "Backend Developer",
                avatar: "https://randomuser.me/api/portraits/men/55.jpg",
                skills: ["Node.js", "MongoDB", "Express"],
                message: "Looking to join a motivated team. I can help with your backend infrastructure!"
            },
            {
                id: "req3",
                name: "Casey Rivera",
                role: "ML Engineer",
                avatar: "https://randomuser.me/api/portraits/women/22.jpg",
                skills: ["PyTorch", "Deep Learning", "Computer Vision"],
                message: "Interested in your project! I specialize in ML model architecture and optimization."
            }
        ]
    });
    
    // Function to accept join requests with proper typing
    const acceptRequest = (requestId: string): void => {
        // Find the request in the joinRequests array
        const requestToAccept = team.joinRequests.find(request => request.id === requestId);
        
        if (requestToAccept) {
            // Check if adding would exceed the max team size
            if (team.memberCount >= team.maxMembers) {
                alert('Cannot accept more members. Team is at maximum capacity.');
                return;
            }
            
            // Update the team state
            setTeam({
                ...team,
                // Add member to the members array
                members: [...team.members, {
                    name: requestToAccept.name,
                    role: requestToAccept.role,
                    avatar: requestToAccept.avatar,
                    skills: requestToAccept.skills
                }],
                // Increment member count
                memberCount: team.memberCount + 1,
                // Remove from joinRequests
                joinRequests: team.joinRequests.filter(request => request.id !== requestId),
                // Remove role from looking for if it matches
                lookingFor: team.lookingFor.filter(role => role !== requestToAccept.role)
            });
        }
    };
    
    // Function to reject join requests with proper typing
    const rejectRequest = (requestId: string): void => {
        // Remove the request from joinRequests
        setTeam({
            ...team,
            joinRequests: team.joinRequests.filter(request => request.id !== requestId)
        });
    };

    // Dark mode styling classes
    const cardClass = darkMode 
        ? "bg-gray-800 text-white" 
        : "bg-white";
    
    const subtextClass = darkMode 
        ? "text-gray-300" 
        : "text-gray-600";
    
    const badgeClass = darkMode 
        ? "bg-gray-700 text-gray-300" 
        : "bg-gray-200 text-gray-700";
    
    const borderClass = darkMode 
        ? "border-gray-700" 
        : "border-gray-200";
    
    const pillBadgeClass = darkMode
        ? "bg-blue-900 text-blue-300"
        : "bg-blue-100 text-blue-700";
    
    const primaryButtonClass = darkMode
        ? "bg-blue-800 hover:bg-blue-700 text-white"
        : "bg-blue-600 hover:bg-blue-700 text-white";
    
    const secondaryButtonClass = darkMode
        ? "bg-gray-700 hover:bg-gray-600 text-white"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800";
    
    return (
        <div className="p-6">
            <div className="mb-6">
                <h1 className="text-2xl font-bold">Team Dashboard</h1>
                <p className={subtextClass}>Browse for all team information</p>
            </div>
            
            {/* Team Overview Card */}
            <div className={`${cardClass} rounded-lg shadow-md p-6 mb-6`}>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">{team.name}</h2>
                        <div className="flex items-center mt-2">
                            <span className={`${pillBadgeClass} px-2 py-1 rounded-full text-xs mr-4`}>
                                {team.status}
                            </span>
                            <div className="flex items-center text-sm">
                                <Users className="w-4 h-4 mr-1" />
                                {team.memberCount}/{team.maxMembers} members
                            </div>
                        </div>
                    </div>
                    <button className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600">
                        <Edit className="w-5 h-5" />
                    </button>
                </div>
            </div>
            
            {/* Project Details */}
            <div className={`${cardClass} rounded-lg shadow-md p-6 mb-6`}>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Star className="w-5 h-5 mr-2" /> Project Details
                </h2>
                <p className={`${subtextClass} mb-4`}>{team.description}</p>
                
                <div className="mb-4">
                    <h3 className="font-medium mb-1">Team Goal</h3>
                    <p className={subtextClass}>{team.goal}</p>
                </div>
                
                <div className="mb-4">
                    <h3 className="font-medium mb-1">Topics</h3>
                    <div className="flex flex-wrap gap-2">
                        {team.topics.map((topic, index) => (
                            <span key={index} className={`${badgeClass} px-3 py-1 rounded-full text-xs`}>
                                {topic}
                            </span>
                        ))}
                    </div>
                </div>
                
                <div>
                    <h3 className="font-medium mb-1">GitHub Repository</h3>
                    <a 
                        href={team.repository} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`text-blue-${darkMode ? '400' : '600'} hover:underline break-all`}
                    >
                        {team.repository}
                    </a>
                </div>
            </div>
            
            {/* Team Members */}
            <div className={`${cardClass} rounded-lg shadow-md p-6 mb-6`}>
                <h2 className="text-xl font-bold mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2" /> Team Members
                </h2>
                
                <div className="space-y-6">
                    {team.members.map((member, index) => (
                        <div key={index} className={`${index !== team.members.length - 1 ? `border-b ${borderClass} pb-4` : ''}`}>
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
                            <div className="flex flex-wrap gap-1 mt-2">
                                {member.skills.map((skill, i) => (
                                    <span key={i} className={`${badgeClass} text-xs px-2 py-0.5 rounded`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {/* Looking For Section */}
                    <div className="pt-2">
                        <h3 className="font-medium mb-2">Looking For</h3>
                        <div className="flex flex-wrap gap-2">
                            {team.lookingFor.map((role, index) => (
                                <span key={index} className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 px-3 py-1 rounded-full text-xs">
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Join Requests */}
            {team.joinRequests.length > 0 && (
                <div className={`${cardClass} rounded-lg shadow-md p-6 mb-6`}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <Plus className="w-5 h-5 mr-2" /> Join Requests
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${pillBadgeClass}`}>
                            {team.joinRequests.length}
                        </span>
                    </h2>
                    
                    {team.joinRequests.map((request, index) => (
                        <div key={request.id} className={`mb-6 ${
                            index !== team.joinRequests.length - 1 ? `border-b ${borderClass} pb-6` : ''
                        }`}>
                            <div className="flex items-center mb-2">
                                <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
                                    <img 
                                        src={request.avatar} 
                                        alt={request.name} 
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.currentTarget.onerror = null;
                                            e.currentTarget.src = `https://ui-avatars.com/api/?name=${request.name.replace(' ', '+')}&background=random`;
                                        }}
                                    />
                                </div>
                                <div>
                                    <h3 className="font-medium">{request.name}</h3>
                                    <p className={`text-sm ${subtextClass}`}>{request.role}</p>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap gap-1 mb-3">
                                {request.skills.map((skill, i) => (
                                    <span key={i} className={`${badgeClass} text-xs px-2 py-0.5 rounded`}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            
                            <div className="mb-3">
                                <h4 className="text-sm font-medium mb-1">Note:</h4>
                                <div className={`p-3 rounded-lg border ${borderClass} text-sm ${subtextClass}`}>
                                    {request.message}
                                </div>
                            </div>
                            
                            <div className="flex gap-2">
                                <button 
                                    onClick={() => acceptRequest(request.id)} 
                                    className={`${primaryButtonClass} px-4 py-2 rounded font-medium flex-1`}
                                >
                                    Accept
                                </button>
                                <button 
                                    onClick={() => rejectRequest(request.id)} 
                                    className={`${secondaryButtonClass} px-4 py-2 rounded font-medium flex-1`}
                                >
                                    Reject
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
            
            {/* Team Management */}
            <div className={`${cardClass} rounded-lg shadow-md p-6`}>
                <h2 className="text-xl font-bold mb-4">Team Management</h2>
                
                <div className="space-y-3">
                    <button className="w-full py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white rounded font-medium transition-colors">
                        Edit Team
                    </button>
                    
                    <button className="w-full py-3 bg-gray-500 hover:bg-gray-600 text-white rounded font-medium transition-colors">
                        Invite Members
                    </button>
                    
                    <button className="w-full py-3 bg-gray-800 hover:bg-gray-900 dark:bg-gray-900 dark:hover:bg-black text-white rounded font-medium transition-colors flex items-center justify-center">
                        <MessageSquare className="w-4 h-4 mr-2" /> Team Chat
                    </button>
                </div>
            </div>
        </div>
    );
};