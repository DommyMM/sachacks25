# Hackathon Team Formation App

## 🌟 Project Overview

A dynamic and user-friendly web platform designed to simplify team formation during hackathons! Our solution replaces **cluttered Discord channel posts and scattered DevPost listings** with a seamless, **AI-powered** team-matching experience. Whether a beginner or a seasoned hacker, our platform helps you find the perfect teammates based on skills, interests, and **compatibility scores**.

## 📱 Key Features

- **Smart Profile System**: Define skills, interests, experience, and preferred roles.
- **AI-Powered Matching**: Get suggested teams and teammates based on compatibility.
- **Team Management**: Create, join, and manage teams with role assignments.
- **Real-Time Status Updates**: Track team and project progress with a visual progress bar.
- **Comprehensive Dashboard**:  One-stop access to hackathon details and schedules.

## 🧭 Pages and Components

- **Dashboard Page**: User profile overview, current team status, AI-recommended teams, and hackathon details.

- **Team Page**: Manage team members, assign roles, and track formation progress.

- **Team Finder**: Browse and filter available teams, view match scores, and send join requests.

- **Profile Page**: Customize skills, interests, experience, and availability.

## 📂 Figma Designs & Screenshots (To Be Added)

🔗 [Figma Design Link](Insert Figma Link Here) <br/>
🖼️ Screenshot of Dashboard Page: [To Be Added]

## 💻 Tech Stack

- **Frontend**: React.js with Tailwind CSS
- **Backend**: Node.js with Express (or Python/Flask)
- **Database**: PostgreSQL
- **Authentication**: JWT
- **Deployment**: Vercel/Netlify (frontend), Heroku (backend)

## 🛠️ Technical Implementation

### Database Schema
```
Users (id, username, email, skills, location, timezone, role, experience, team_id)
Teams (id, name, description, owner_id, status, max_members)
Skills (id, name, category)
UserSkills (user_id, skill_id, proficiency)
Interests (id, name)
UserInterests/TeamInterests (junction tables)
TeamApplications (team_id, user_id, status, message)
```

### Matching Algorithm
The core of our application is the weighted matching algorithm that calculates compatibility scores based on:
- Skill overlap and complementarity (40%)
- Interest alignment (30%)
- Role needs fulfillment (20%)
- Timezone/location compatibility (10%)

## 🚀 Implementation Roadmap

| Phase 1: MVP (Minimum Viable Product) | Phase 2: Enhanced Features | Phase 3: Advanced Features (If Time Permits) |
| ----------- | ----------- | ----------- |
| ✅ User registration & profile setup | ✅ AI-powered matching system | ✅ Real-time notifications |
| ✅ Basic team creation & listing | ✅ Advanced filtering & team recommendations | ✅ Chat functionality |
| ✅ Simple team discovery system | ✅ Team application system | ✅ Analytics dashboard |
| ✅ Core UI implementation | | ✅ Integration with hackathon platforms |

## 🔮 Future Enhancements

- Integration with Discord/Slack
- Project Idea Suggestion System (For idea brainstorming)
- Mentor Matching System (Find the right guidance)
- Post-Hackathon Analytics (Evaluate team performance)
- DevPost or MLH API integrations (Automatic project submissions!)

---

## 🎉 About This Project

This project was built at [SacHacks](https://sachacks.io/) within 24 hours by: <br/>
👨‍💻 [Member Name] | 👩‍💻 [Member Name] | 👩‍💻 [Member Name] | 👩‍💻 [Member Name]
