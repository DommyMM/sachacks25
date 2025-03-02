import { Users, Star, Edit, Plus, MessageSquare } from 'lucide-react';
import { useTheme } from '../contexts/Theme';
import { useState } from 'react';
import { Team, teamsData } from '../components/team';

export const TeamDashboard = () => {
    const { darkMode } = useTheme();
    
    // Use the first team from the shared data as the current user's team
    const [team, setTeam] = useState<Team>(teamsData[0]);
    
    // Function to accept join requests with proper typing
    const acceptRequest = (requestId: string): void => {
        // Find the request in the joinRequests array
        const requestToAccept = team.joinRequests?.find(request => request.id === requestId);
        
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
                joinRequests: team.joinRequests?.filter(request => request.id !== requestId) || [],
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
            joinRequests: team.joinRequests?.filter(request => request.id !== requestId) || []
        });
    };

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

    const borderClass = darkMode 
        ? "border-[#2D3348]" 
        : "border-gray-200";

    const pillBadgeClass = darkMode
        ? "bg-[#2D3348] text-[#6598FC]"
        : "bg-blue-100 text-blue-600";

    const statusBadgeClass = "bg-[#DF52FF] text-black";

    const greenButtonClass = darkMode
        ? "bg-[#9AF693] hover:bg-[#8AE683] text-[#14161F] cursor-pointer transition-all hover:shadow-md"
        : "bg-green-500 hover:bg-green-600 text-white cursor-pointer transition-all hover:shadow-md";
        
    const purpleButtonClass = darkMode
        ? "bg-[#B975F3] hover:bg-[#A965E3] text-white cursor-pointer transition-all hover:shadow-md"
        : "bg-purple-600 hover:bg-purple-700 text-white cursor-pointer transition-all hover:shadow-md";
    
    return (
        <div className={`${pageBackground} p-6`}>
            <div className="mb-6">
                <h1 className="text-4xl text-[#0b70ec] font-bold">Team Dashboard</h1>
                <p className={subtextClass}>Find project details, team members, member requests, and more.</p>
            </div>
            
            {/* Team Overview Card */}
            <div className={`${cardClass} rounded-lg shadow-md p-6 mb-6`}>
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-2xl font-bold">{team.name}</h2>
                        <div className="flex items-center mt-2">
                            <span className={`${statusBadgeClass} px-2 py-1 rounded-full text-xs mr-4`}>
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
                    <Star className="w-5 h-5 mr-2" fill={darkMode ? "#6598FC" : "#4F46E5"} stroke={darkMode ? "#6598FC" : "#4F46E5"}/>
                    Project Details
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
                            <div className="flex flex-wrap gap-2 mt-2">
                                {member.skills.map((skill, i) => (
                                    <span key={i} className={`${badgeClass} text-xs px-2 py-1 rounded-full`}>
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
                                <span key={index} className={`${badgeClass} px-3 py-1 rounded-full text-xs`}>
                                    {role}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Join Requests */}
            {team.joinRequests && team.joinRequests.length > 0 && (
                <div className={`${cardClass} rounded-lg shadow-md p-6 mb-6`}>
                    <h2 className="text-xl font-bold mb-4 flex items-center">
                        <Plus className="w-5 h-5 mr-2" /> Join Requests
                        <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${pillBadgeClass}`}>
                            {team.joinRequests.length}
                        </span>
                    </h2>

                    {team.joinRequests.map((request, index) => (
                        <div key={request.id} className={`mb-6 ${
                            index !== (team.joinRequests?.length ?? 0) - 1 ? `border-b ${borderClass} pb-6` : ''
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
                                    <span key={i} className={`${badgeClass} text-xs px-2 py-0.5 rounded-full`}>
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
                                <button onClick={() => acceptRequest(request.id)} 
                                    className={`${greenButtonClass} px-4 py-2 rounded-full font-medium flex-1 flex items-center justify-center hover:translate-y-[-2px]`}>
                                    Accept →
                                </button>
                                <button onClick={() => rejectRequest(request.id)} 
                                    className={`${purpleButtonClass} px-4 py-2 rounded-full font-medium flex-1 flex items-center justify-center hover:translate-y-[-2px]`}>
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
                    <button className={`w-full py-3 px-4 ${purpleButtonClass} rounded-full font-medium transition-colors flex items-center justify-center`}>
                        <Edit className="w-4 h-4 mr-2" /> Edit Team
                    </button>
                    
                    <button className={`w-full py-3 px-4 ${purpleButtonClass} rounded-full font-medium transition-colors flex items-center justify-center`}>
                        <Plus className="w-4 h-4 mr-2" /> Invite Members
                    </button>
                    
                    <button className={`w-full py-3 px-4 ${greenButtonClass} rounded-full font-medium transition-colors flex items-center justify-center`}>
                        <MessageSquare className="w-4 h-4 mr-2" /> Team Chat →
                    </button>
                </div>
            </div>
        </div>
    );
};