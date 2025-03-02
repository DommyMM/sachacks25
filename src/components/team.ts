export interface TeamMember {
    name: string;
    role: string;
    avatar: string;
    skills: string[];
}

export interface JoinRequest {
    id: string;
    name: string;
    role: string;
    avatar: string;
    skills: string[];
    message: string;
}

export interface Team {
    id: string;
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
    matchScore?: number;
    joinRequests?: JoinRequest[];
    creator: {
        name: string;
        avatar: string;
    };
}

export const teamsData: Team[] = [
    {
        id: "team1",
        name: "Code Crushers",
        status: "Forming",
        memberCount: 2,
        maxMembers: 4,
        description: "Building an AI-powered team matching app for hackathons. Our goal is to create a platform that makes team formation easier and more efficient, matching participants based on complementary skills and shared interests.",
        goal: "Learning and Winning",
        topics: ["AI/ML", "Web Development"],
        repository: "https://github.com/codecrusher/team-match",
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
        matchScore: 92,
        creator: {
            name: "Alex Chen",
            avatar: "https://randomuser.me/api/portraits/men/44.jpg"
        },
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
    },
    {
        id: "team2",
        name: "AR Study Buddy",
        description: "Augmented reality app to help students visualize concepts",
        matchScore: 83,
        memberCount: 2,
        maxMembers: 4,
        status: "Forming",
        topics: ["AR/VR", "Education Tech"],
        lookingFor: ["Unity Developer", "3D Artist"],
        repository: "https://github.com/arstudy/study-buddy",
        goal: "Learning New Technologies",
        members: [
            {
                name: "Jamie Smith", 
                role: "UX Designer",
                avatar: "https://randomuser.me/api/portraits/women/32.jpg",
                skills: ["Figma", "UI Design", "User Research"]
            },
            {
                name: "Sam Rodriguez",
                role: "AR Developer",
                avatar: "https://randomuser.me/api/portraits/men/75.jpg",
                skills: ["Unity", "C#", "AR Development"]
            }
        ],
        creator: {
            name: "Jamie Smith",
            avatar: "https://randomuser.me/api/portraits/women/32.jpg"
        },
        joinRequests: []
    },
    {
        id: "team3",
        name: "Health Tracker Pro",
        description: "Mobile app to track health metrics and provide personalized insights",
        matchScore: 78,
        memberCount: 3,
        maxMembers: 4,
        status: "Forming",
        topics: ["Mobile", "Health Tech"],
        lookingFor: ["iOS Developer"],
        repository: "https://github.com/healthtracker/mobile-app",
        goal: "Creating a Useful Product",
        members: [
            {
                name: "Aisha Kumar",
                role: "Product Manager",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg",
                skills: ["Product Management", "Data Analysis", "UX Research"]
            },
            {
                name: "Leo Park",
                role: "Backend Developer",
                avatar: "https://randomuser.me/api/portraits/men/36.jpg",
                skills: ["Java", "Spring Boot", "PostgreSQL"]
            },
            {
                name: "Nina Rodriguez",
                role: "UI Designer",
                avatar: "https://randomuser.me/api/portraits/women/42.jpg",
                skills: ["Mobile Design", "Prototyping", "Figma"]
            }
        ],
        creator: {
            name: "Aisha Kumar",
            avatar: "https://randomuser.me/api/portraits/women/68.jpg"
        },
        joinRequests: []
    },
    {
        id: "team4",
        name: "EcoTech Solutions",
        description: "Sustainability platform to track and reduce carbon footprint",
        matchScore: 71,
        memberCount: 2,
        maxMembers: 3,
        status: "Forming",
        topics: ["Sustainability", "Web Development"],
        lookingFor: ["Frontend Developer", "Data Scientist"],
        repository: "https://github.com/ecotech/carbon-tracker",
        goal: "Social Impact",
        members: [
            {
                name: "Tyler Johnson",
                role: "Project Manager",
                avatar: "https://randomuser.me/api/portraits/men/17.jpg",
                skills: ["Project Management", "Sustainability", "Business Development"]
            },
            {
                name: "Mia Wong",
                role: "Backend Developer",
                avatar: "https://randomuser.me/api/portraits/women/79.jpg",
                skills: ["Python", "Django", "AWS"]
            }
        ],
        creator: {
            name: "Tyler Johnson",
            avatar: "https://randomuser.me/api/portraits/men/17.jpg"
        },
        joinRequests: []
    },
    {
        id: "team5",
        name: "FinTech Innovators",
        description: "Financial technology solution for personal budget management",
        matchScore: 65,
        memberCount: 4,
        maxMembers: 4,
        status: "Full",
        topics: ["Finance", "Web Development"],
        lookingFor: [],
        repository: "https://github.com/fintech-innovators/budget-app",
        goal: "Winning a Prize",
        members: [
            {
                name: "Jordan Lee",
                role: "Full Stack Developer",
                avatar: "https://randomuser.me/api/portraits/men/55.jpg",
                skills: ["React", "Node.js", "MongoDB"]
            },
            {
                name: "Sarah Chen",
                role: "UI/UX Designer",
                avatar: "https://randomuser.me/api/portraits/women/33.jpg",
                skills: ["UI Design", "Prototyping", "User Testing"]
            },
            {
                name: "Devon Taylor",
                role: "Finance Expert",
                avatar: "https://randomuser.me/api/portraits/men/29.jpg",
                skills: ["Financial Analysis", "Budgeting", "Financial Planning"]
            },
            {
                name: "Riley Jackson",
                role: "Marketing",
                avatar: "https://randomuser.me/api/portraits/women/45.jpg",
                skills: ["Digital Marketing", "Content Creation", "SEO"]
            }
        ],
        creator: {
            name: "Jordan Lee",
            avatar: "https://randomuser.me/api/portraits/men/55.jpg"
        },
        joinRequests: []
    }
];