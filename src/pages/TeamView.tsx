import { useState } from 'react';
import { Users, Star, ArrowLeft, XCircle } from 'lucide-react';
import { useTheme } from '../contexts/Theme';
import { Link, useParams } from 'react-router-dom';
import { teamsData } from '../components/team';

export const TeamView = () => {
    const { darkMode } = useTheme();
    const { id } = useParams<{ id: string }>();
    const [showJoinModal, setShowJoinModal] = useState(false);
    const [joinMessage, setJoinMessage] = useState('');
    const [requestSent, setRequestSent] = useState(false);
    
    // Find team data from our shared data source
    const team = teamsData.find(team => team.id === id) || teamsData[0];
    
    // Handle join request submission
    const handleJoinRequest = () => {
        // In a real app, this would make an API call to submit the request
        console.log("Join request submitted with message:", joinMessage);
        setRequestSent(true);
        setShowJoinModal(false);
    };

    // Styling classes based on theme
    const pageBackground = darkMode ? "bg-[#14161F]" : "bg-gray-100";
    const cardBackground = darkMode ? "bg-[#1C2030]" : "bg-white";
    const textColor = darkMode ? "text-white" : "text-gray-900";
    const subtextColor = darkMode ? "text-[#A0AEC0]" : "text-gray-600";
    
    const cardClass = `${cardBackground} ${textColor} shadow-lg rounded-lg`;
    const borderClass = darkMode ? "border-[#2D3348]" : "border-gray-200";
    
    const badgeClass = darkMode 
        ? "bg-[#7E22CE] text-white" 
        : "bg-purple-100 text-purple-800";
    
    const statusBadgeClass = "bg-[#DF52FF] text-black";
    
    const greenButtonClass = darkMode
        ? "bg-[#9AF693] hover:bg-[#8AE683] text-[#14161F] font-medium"
        : "bg-green-500 hover:bg-green-600 text-white font-medium";
    
    const modalBgClass = darkMode 
        ? "bg-[#1C2030] text-white border border-[#2D3348]" 
        : "bg-white text-gray-900 border border-gray-200";
    
    const inputClass = darkMode 
        ? "bg-[#14161F] border border-[#2D3348] text-white placeholder-gray-500 focus:border-[#6598FC] focus:ring-1 focus:ring-[#6598FC]" 
        : "bg-white border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";

    return (
        <div className={`${pageBackground} min-h-screen p-6 ${textColor}`}>
            <div className="mb-6">
                {/* Back button */}
                <Link to="/find-team" className="inline-flex items-center text-blue-500 hover:text-blue-700 mb-4">
                    <ArrowLeft className="w-4 h-4 mr-1" /> Back to team listing
                </Link>
                
                <h1 className="text-4xl font-bold mb-2">{team.name}</h1>
                <p className={subtextColor}>View team details and request to join</p>
            </div>
            
            {/* Team Overview Card */}
            <div className={`${cardClass} p-6 mb-6`}>
                <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                        <p className={`${subtextColor} mb-4`}>{team.description}</p>
                        
                        <div className="flex flex-wrap gap-4 mb-4">
                            <div className="flex items-center">
                                <Users className="w-5 h-5 mr-1" />
                                <span>{team.memberCount}/{team.maxMembers} members</span>
                            </div>
                            
                            <span className={`${statusBadgeClass} px-3 py-1 rounded-full text-sm`}>
                                {team.status}
                            </span>
                            
                            <div className="flex items-center">
                                <Star className="w-5 h-5 text-yellow-400 fill-current mr-1" />
                                <span className="font-medium">{team.matchScore}% match</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-medium mb-2">Team Goal</h3>
                        <p className={subtextColor}>{team.goal}</p>
                    </div>
                    
                    <div>
                        <h3 className="font-medium mb-2">Topics</h3>
                        <div className="flex flex-wrap gap-2">
                            {team.topics.map((topic, index) => (
                                <span key={index} className={`${badgeClass} px-3 py-1 rounded-full text-xs`}>
                                    {topic}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
                
                {team.repository && (
                    <div className="mt-4 pt-4 border-t border-gray-700 flex items-center justify-between">
                        <div className="flex-1">
                            <h3 className="font-medium mb-2">GitHub Repository</h3>
                            <a 
                                href={team.repository} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-blue-400 hover:underline break-all"
                            >
                                {team.repository}
                            </a>
                        </div>
                        
                        {/* Request to Join Button - moved to bottom right */}
                        <div className="ml-4">
                            {!requestSent ? (
                                <button 
                                    onClick={() => setShowJoinModal(true)}
                                    className={`${greenButtonClass} px-4 py-2 rounded-full hover:translate-y-[-2px] transition-all cursor-pointer flex items-center`}
                                >
                                    Request to Join →
                                </button>
                            ) : (
                                <div className="bg-[#252A3D] border border-[#6598FC] text-[#6598FC] px-4 py-2 rounded-full">
                                    Request Sent
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* If there's no repository, we should still show the button */}
                {!team.repository && (
                    <div className="mt-4 pt-4 border-t border-gray-700 flex justify-end">
                        {!requestSent ? (
                            <button 
                                onClick={() => setShowJoinModal(true)}
                                className={`${greenButtonClass} px-4 py-2 rounded-full hover:translate-y-[-2px] transition-all cursor-pointer flex items-center`}
                            >
                                Request to Join →
                            </button>
                        ) : (
                            <div className="bg-[#252A3D] border border-[#6598FC] text-[#6598FC] px-4 py-2 rounded-full">
                                Request Sent
                            </div>
                        )}
                    </div>
                )}
            </div>
            
            {/* Team Members */}
            <div className={`${cardClass} p-6 mb-6`}>
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
                                    <p className={`text-sm ${subtextColor}`}>{member.role}</p>
                                </div>
                                
                                {member.name === team.creator.name && (
                                    <span className="ml-2 px-2 py-0.5 bg-[#DF52FF] text-black rounded-full text-xs">
                                        Team Creator
                                    </span>
                                )}
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
                    {team.lookingFor.length > 0 && (
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
                    )}
                </div>
            </div>
            
            {/* Join Modal */}
            {showJoinModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className={`${modalBgClass} p-6 rounded-lg max-w-md w-full`}>
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="text-xl font-bold">Request to Join Team</h3>
                            <button 
                                onClick={() => setShowJoinModal(false)}
                                className="text-gray-400 hover:text-gray-500"
                            >
                                <XCircle className="w-6 h-6" />
                            </button>
                        </div>
                        
                        <p className={`${subtextColor} mb-4`}>
                            Tell the team why you'd like to join and what skills you can contribute:
                        </p>
                        
                        <textarea
                            className={`${inputClass} w-full px-3 py-2 rounded-lg h-32 mb-4`}
                            placeholder="I'd like to join your team because..."
                            value={joinMessage}
                            onChange={(e) => setJoinMessage(e.target.value)}
                        ></textarea>
                        
                        <div className="flex justify-end gap-3">
                            <button onClick={() => setShowJoinModal(false)}
                                className={`px-4 py-2 rounded-full border ${darkMode ? 'border-[#3a4366] text-white' : 'border-gray-300 text-gray-700'}`}>
                                Cancel
                            </button>
                            <button onClick={handleJoinRequest}
                                className={`${greenButtonClass} px-4 py-2 rounded-full flex items-center justify-center`}
                                disabled={!joinMessage.trim()}>
                                Send Request →
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};