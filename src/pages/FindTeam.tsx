import { useState } from 'react';
import { Star, Users, ChevronDown, Search, Filter, SortDesc } from 'lucide-react';
import { useTheme } from '../contexts/Theme';
import { Link } from 'react-router-dom';

interface TeamFilters {
    status: string;
    lookingFor: string[];
    interests: string[];
}

interface TeamMember {
    name: string;
    avatar: string;
}

interface Team {
    id: string;
    name: string;
    description: string;
    matchScore: number;
    members: { current: number; max: number };
    status: string;
    topics: string[];
    lookingFor: string[];
    creator: TeamMember;
}

const FindTeam = () => {
    const { darkMode } = useTheme();
    const [searchQuery, setSearchQuery] = useState('');
    const [sortBy, setSortBy] = useState('match');
    const [sortAscending, setSortAscending] = useState(false); 
    const [showFilters, setShowFilters] = useState(false);
    const [filters, setFilters] = useState<TeamFilters>({
        status: 'all',
        lookingFor: [],
        interests: []
    });

    // Update mock teams data with consistent avatars
    const teams: Team[] = [
        {
            id: "team1",
            name: "Code Crushers",
            description: "Building an AI-powered team matching app for hackathons",
            matchScore: 92,
            members: { current: 2, max: 4 },
            status: "Forming",
            topics: ["AI/ML", "Web Development"],
            lookingFor: ["Backend Developer", "UX/UI Designer"],
            creator: {
                name: "Alex Chen",
                avatar: "https://randomuser.me/api/portraits/men/44.jpg"
            }
        },
        {
            id: "team2",
            name: "AR Study Buddy",
            description: "Augmented reality app to help students visualize concepts",
            matchScore: 83,
            members: { current: 2, max: 4 },
            status: "Forming",
            topics: ["AI/ML", "Web Development"],
            lookingFor: ["Backend Developer", "UX/UI Designer"],
            creator: {
                name: "Jamie Smith",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg"
            }
        },
        {
            id: "team3",
            name: "Health Tracker Pro",
            description: "Mobile app to track health metrics and provide personalized insights",
            matchScore: 78,
            members: { current: 3, max: 4 },
            status: "Forming",
            topics: ["Mobile", "Health Tech"],
            lookingFor: ["iOS Developer"],
            creator: {
                name: "Aisha Kumar",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
            }
        },
        {
            id: "team4",
            name: "EcoTech Solutions",
            description: "Sustainability platform to track and reduce carbon footprint",
            matchScore: 71,
            members: { current: 2, max: 3 },
            status: "Forming",
            topics: ["Sustainability", "Web Development"],
            lookingFor: ["Frontend Developer", "Data Scientist"],
            creator: {
                name: "Tyler Johnson",
                avatar: "https://randomuser.me/api/portraits/men/17.jpg"
            }
        },
        {
            id: "team5",
            name: "FinTech Innovators",
            description: "Financial technology solution for personal budget management",
            matchScore: 65,
            members: { current: 4, max: 4 },
            status: "Full",
            topics: ["Finance", "Web Development"],
            lookingFor: [],
            creator: {
                name: "Jordan Lee",
                avatar: "https://randomuser.me/api/portraits/men/55.jpg"
            }
        }
    ];
    
    // Available filters
    const availableRoles = ["Frontend Developer", "Backend Developer", "UX/UI Designer", "Data Scientist", "Mobile Developer", "iOS Developer", "Android Developer"];
    const availableInterests = ["AI/ML", "Web Development", "Mobile", "Health Tech", "Finance", "Sustainability", "Education", "Gaming"];
    
    // Styling classes based on theme
    const pageBackground = darkMode ? "bg-[#14161F]" : "bg-gray-100";
    const cardBackground = darkMode ? "bg-[#1C2030]" : "bg-white";
    const textColor = darkMode ? "text-white" : "text-gray-900";
    const subtextColor = darkMode ? "text-[#A0AEC0]" : "text-gray-600";
    const borderColor = darkMode ? "border-[#2D3348]" : "border-gray-200";
    
    // Input and button styles
    const inputClass = darkMode 
        ? "bg-[#1C2030] border border-[#2D3348] text-white placeholder-gray-500 focus:border-[#6598FC] focus:ring-1 focus:ring-[#6598FC]" 
        : "bg-white border border-gray-300 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500";
    
    const buttonClass = darkMode
        ? "bg-[#2D3348] hover:bg-[#3a4366] text-white"
        : "bg-gray-200 hover:bg-gray-300 text-gray-800";
        
    const primaryButtonClass = darkMode
        ? "bg-[#9AF693] hover:bg-[#8AE683] text-[#14161F]"
        : "bg-green-500 hover:bg-green-600 text-white";
    
    // Badge styles
    const statusBadgeClass = "bg-[#DF52FF] text-black";
    
    const topicBadgeClass = darkMode 
        ? "bg-[#7E22CE] text-white"
        : "bg-purple-100 text-purple-800";
            
    const lookingForBadgeClass = darkMode
        ? "bg-[#7E22CE] text-white"
        : "bg-purple-100 text-purple-800";
        
    const filterBadgeClass = darkMode
        ? "bg-[#2D3348] text-white hover:bg-[#3a4366] cursor-pointer"
        : "bg-gray-200 text-gray-700 hover:bg-gray-300 cursor-pointer";
        
    const filterBadgeActiveClass = darkMode
        ? "bg-[#4F46E5] text-white"
        : "bg-indigo-500 text-white";
    
    // Filter teams based on search and filters
    const filteredTeams = teams.filter(team => {
        // Search filter
        if (searchQuery && !team.name.toLowerCase().includes(searchQuery.toLowerCase()) && 
            !team.description.toLowerCase().includes(searchQuery.toLowerCase())) {
            return false;
        }
        
        // Status filter
        if (filters.status !== 'all' && team.status.toLowerCase() !== filters.status.toLowerCase()) {
            return false;
        }
        
        // Looking for filter
        if (filters.lookingFor.length > 0) {
            const hasMatchingRole = team.lookingFor.some(role => 
                filters.lookingFor.includes(role)
            );
            if (!hasMatchingRole) return false;
        }
        
        // Interests filter
        if (filters.interests.length > 0) {
            const hasMatchingInterest = team.topics.some(topic => 
                filters.interests.includes(topic)
            );
            if (!hasMatchingInterest) return false;
        }
        
        return true;
    });
    
    // Sort teams
    const sortedTeams = [...filteredTeams].sort((a, b) => {
        let comparison = 0;
        
        if (sortBy === 'match') {
            comparison = b.matchScore - a.matchScore;
        }
        if (sortBy === 'name') {
            comparison = a.name.localeCompare(b.name);
        }
        
        // Reverse the comparison if ascending
        return sortAscending ? -comparison : comparison;
    });
    
    // Fix the filter functions with proper TypeScript typing
    const toggleFilter = (filterType: keyof TeamFilters, value: string) => {
        if (filterType === 'status') {
            setFilters({
                ...filters,
                status: value === filters.status ? 'all' : value
            });
        } else {
            setFilters(prev => {
                const currentValues = [...prev[filterType]];
                const valueIndex = currentValues.indexOf(value);
                
                if (valueIndex > -1) {
                    currentValues.splice(valueIndex, 1);
                } else {
                    currentValues.push(value);
                }
                
                return {
                    ...prev,
                    [filterType]: currentValues
                };
            });
        }
    };

    return (
        <div className={`${pageBackground} min-h-screen p-6 ${textColor}`}>
            <div className="mb-8">
                <h1 className="text-[#6598FC] text-5xl font-bold mb-2">Find a Team</h1>
                <p className={`${subtextColor} text-xl`}>Browse available teams or use filters to find your perfect match</p>
            </div>
            
            {/* Search and Filters */}
            <div className="mb-8">
                <div className="flex flex-wrap gap-4 items-center mb-6">
                    {/* Search input */}
                    <div className="relative flex-grow max-w-md">
                        <input
                            type="text"
                            placeholder="Search teams..."
                            className={`w-full pl-10 pr-4 py-2 rounded-lg ${inputClass}`}
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                        />
                        <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
                    </div>
                    
                    {/* Sort dropdown with direction toggle */}
                    <div className="flex items-center">
                        <span className={`mr-2 ${subtextColor}`}>Sort by:</span>
                        <div className="relative">
                            <select className={`appearance-none px-4 py-2 pr-8 rounded-lg ${inputClass}`}
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                            >
                                <option value="match">Best Match</option>
                                <option value="name">Team Name</option>
                            </select>
                            <div className="absolute right-3 top-3 pointer-events-none">
                                <ChevronDown className="w-4 h-4 text-gray-400" />
                            </div>
                        </div>
                        
                        {/* Sort direction button */}
                        <button className={`ml-2 p-2 rounded-lg ${buttonClass} flex items-center justify-center`}
                            onClick={() => setSortAscending(!sortAscending)}
                            title={sortAscending ? "Sort Descending" : "Sort Ascending"}>
                            <SortDesc className={`w-4 h-4 transition-transform ${sortAscending ? 'rotate-180' : ''}`} 
                            />
                        </button>
                    </div>
                    
                    {/* Filters toggle */}
                    <button className={`flex items-center px-4 py-2 rounded-lg ${buttonClass}`}
                        onClick={() => setShowFilters(!showFilters)}>
                        <Filter className="w-4 h-4 mr-2" />
                        Filters
                        <ChevronDown className={`w-4 h-4 ml-1 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
                    </button>
                </div>
                
                {/* Expanded filters */}
                {showFilters && (
                    <div className={`${cardBackground} rounded-lg p-6 mb-6 border ${borderColor}`}>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            {/* Status filter */}
                            <div>
                                <h3 className="font-medium mb-3">Team Status</h3>
                                <div className="flex flex-wrap gap-2">
                                    <span className={`px-3 py-1 rounded-full text-sm ${filters.status === 'forming' ? filterBadgeActiveClass : filterBadgeClass}`}
                                        onClick={() => toggleFilter('status', 'forming')}>
                                        Forming
                                    </span>
                                    <span className={`px-3 py-1 rounded-full text-sm ${filters.status === 'full' ? filterBadgeActiveClass : filterBadgeClass}`}
                                        onClick={() => toggleFilter('status', 'full')}>
                                        Full
                                    </span>
                                </div>
                            </div>
                            
                            {/* Looking for filter */}
                            <div>
                                <h3 className="font-medium mb-3">Looking For</h3>
                                <div className="flex flex-wrap gap-2">
                                    {availableRoles.slice(0, 5).map(role => (
                                        <span key={role}
                                            className={`px-3 py-1 rounded-full text-sm ${filters.lookingFor.includes(role) ? filterBadgeActiveClass : filterBadgeClass}`}
                                            onClick={() => toggleFilter('lookingFor', role)}
                                        >
                                            {role}
                                        </span>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Interests filter */}
                            <div>
                                <h3 className="font-medium mb-3">Interests</h3>
                                <div className="flex flex-wrap gap-2">
                                    {availableInterests.slice(0, 5).map(interest => (
                                        <span key={interest}
                                            className={`px-3 py-1 rounded-full text-sm ${filters.interests.includes(interest) ? filterBadgeActiveClass : filterBadgeClass}`}
                                            onClick={() => toggleFilter('interests', interest)}
                                        >
                                            {interest}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        
                        {/* Clear filters button */}
                        {(filters.status !== 'all' || filters.lookingFor.length > 0 || filters.interests.length > 0) && (
                            <div className="mt-4 flex justify-end">
                                <button className={`text-sm ${subtextColor} underline`}
                                    onClick={() => setFilters({ status: 'all', lookingFor: [], interests: [] })}
                                >
                                    Clear all filters
                                </button>
                            </div>
                        )}
                    </div>
                )}
                
                {/* Results count */}
                <div className={`${subtextColor} text-lg mb-6`}>
                    {sortedTeams.length} teams found
                </div>
            </div>
            
            {/* Team Cards */}
            <div className="space-y-6">
                {sortedTeams.map(team => (
                    <div key={team.id} className={`${cardBackground} rounded-lg shadow-md overflow-hidden border ${borderColor}`}>
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-2">
                                <h2 className="text-2xl font-bold">{team.name}</h2>
                                <div className="flex items-center text-lg">
                                    <Star className="w-6 h-6 text-yellow-400 fill-current mr-1" />
                                    <span className="font-medium">{team.matchScore}%</span>
                                </div>
                            </div>
                            
                            <p className={`${subtextColor} mb-4`}>{team.description}</p>
                            
                            <div className="flex flex-wrap gap-4 mb-4">
                                <div className="flex items-center">
                                    <Users className="w-5 h-5 mr-1" />
                                    <span>{team.members.current}/{team.members.max} members</span>
                                </div>
                                
                                <span className={`${statusBadgeClass} px-3 py-1 rounded-full text-sm`}>
                                    {team.status}
                                </span>
                            </div>
                            
                            <div className="mb-4">
                                <div className="flex flex-wrap gap-2">
                                {team.topics.map((topic, index) => (
                                    <span key={index} className={`${topicBadgeClass} px-3 py-1 rounded-full text-xs`}>
                                        {topic}
                                    </span>
                                ))}
                                </div>
                            </div>
                            
                            {team.lookingFor.length > 0 && (
                                <div className="mb-4">
                                    <h3 className="text-sm font-medium mb-2">Looking for:</h3>
                                    <div className="flex flex-wrap gap-2">
                                    {team.lookingFor.map((role, index) => (
                                            <span key={index} className={`${lookingForBadgeClass} px-3 py-1 rounded-full text-xs`}>
                                                {role}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}
                            
                            <div className="flex items-center mt-6 pt-4 border-t border-gray-700">
                                <div className="flex items-center">
                                    <div className="w-8 h-8 rounded-full mr-2 overflow-hidden">
                                        <img 
                                            src={team.creator.avatar} 
                                            alt={team.creator.name} 
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.currentTarget.onerror = null;
                                                e.currentTarget.src = `https://ui-avatars.com/api/?name=${team.creator.name.replace(' ', '+')}&background=random`;
                                            }}
                                        />
                                    </div>
                                    <span className={`${subtextColor} text-sm`}>
                                        Created by <span className="font-medium">{team.creator.name}</span>
                                    </span>
                                </div>
                                
                                <Link 
                                    to={`/team/${team.id}`} 
                                    className={`${primaryButtonClass} px-4 py-2 rounded-full text-center ml-auto`}
                                >
                                    View Team →
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            
            {/* No results */}
            {sortedTeams.length === 0 && (
                <div className={`${cardBackground} rounded-lg shadow p-8 text-center`}>
                    <h3 className="text-xl font-medium mb-2">No teams match your search</h3>
                    <p className={subtextColor}>Try adjusting your filters or search criteria</p>
                </div>
            )}
        </div>
    );
};

export default FindTeam;