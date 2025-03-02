import { useTheme } from '../contexts/Theme';

const Schedule = () => {
    const { darkMode } = useTheme();
    
    // Mock schedule data
    const scheduleData = [
        {
            day: "Wednesday, March 5th",
            events: [
                { time: "10:00 AM", title: "Opening Ceremony" },
                { time: "11:30 AM", title: "Fireside Chat with Satya Nadella, CEO of Microsoft" },
                { time: "12:00 PM", title: "Hackathon Begins" },
                { time: "2:00 PM", title: "Design to Developer Workshop with Julia Chesborough, Freelance Designer" },
                { time: "8:00 PM", title: "Group Check-In, Thursday Briefing" }
            ]
        },
        {
            day: "Thursday, March 6th",
            events: [
                { time: "10:00 AM", title: "Submissions Due" },
                { time: "11:00 AM", title: "Tech Talk with Luke Kim, CEO of Liner" },
                { time: "5:00 PM", title: "Closing Ceremony" },
                { time: "6:00 PM", title: "Awards" }
            ]
        }
    ];
    
    // Styling classes based on theme
    const pageBackground = darkMode ? "bg-[#14161F]" : "bg-gray-100";
    const textColor = darkMode ? "text-white" : "text-gray-900";
    const subTextColor = darkMode ? "text-[#A0AEC0]" : "text-gray-600";
    
    const dayHeaderClass = darkMode 
        ? "bg-[#4338CA] text-white" 
        : "bg-indigo-500 text-white";
    
    // Event row styling
    const eventRowClass = darkMode
        ? "border-b border-[#2D3348] last:border-0 hover:bg-[#1C2030]"
        : "border-b border-gray-100 last:border-0 hover:bg-gray-50";
    
    // Accent line before event titles
    const accentLineClass = darkMode
        ? "border-l-4 border-[#B975F3] pl-4"
        : "border-l-4 border-purple-500 pl-4";

    const currentEventClass = darkMode
        ? "bg-[#252A3D] border border-[#6598FC] rounded-lg shadow-lg"
        : "bg-blue-50 border border-blue-300 rounded-lg shadow-md";

    const currentTimeClass = darkMode
        ? "text-[#9AF693] font-bold"
        : "text-green-600 font-bold";

    const currentTitleClass = darkMode
        ? "text-[#6598FC] font-bold"
        : "text-blue-700 font-bold";
    
    return (
        <div className={`${pageBackground} min-h-screen p-6 ${textColor}`}>
            <div className="mb-8">
                <h1 className="text-[#6598FC] text-5xl font-bold mb-2">Schedule</h1>
                <p className={`${subTextColor} text-xl`}>Find hackathon schedule details</p>
            </div>
            
            {/* Schedule Content */}
            <div className="max-w-4xl mx-auto">
                {scheduleData.map((daySchedule, dayIndex) => (
                    <div key={dayIndex} className="mb-10">
                        {/* Day Header */}
                        <div className="flex justify-center mb-8">
                            <div className={`${dayHeaderClass} rounded-lg px-6 py-3 text-center text-xl font-medium`}>
                                {daySchedule.day}
                            </div>
                        </div>
                        
                        {/* Events List */}
                        <div className="space-y-8">
                            {daySchedule.events.map((event, eventIndex) => {
                                // Check if this is the specific event we want to highlight (Thursday 10:00 AM)
                                const isCurrentEvent = daySchedule.day.includes("Thursday") && event.time === "10:00 AM";
                                
                                return (
                                    <div 
                                        key={eventIndex} 
                                        className={`py-4 ${eventRowClass} transition-colors ${isCurrentEvent ? currentEventClass : ''}`}
                                    >
                                        <div className="flex">
                                            <div className={`w-32 text-xl font-medium text-center ${isCurrentEvent ? currentTimeClass : ''}`}>
                                                {event.time}
                                            </div>
                                            <div className={`flex-1 text-xl ${accentLineClass} ${isCurrentEvent ? currentTitleClass : ''}`}>
                                                {event.title}
                                                {isCurrentEvent && (
                                                    <span className="ml-3 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#9AF693] text-[#14161F]">
                                                        Current Phase
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Schedule;