
import React from 'react';

const ScheduleSection: React.FC = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "May 16",
      events: [
        { time: "6:00 PM", title: "Registration & Welcome" },
        { time: "6:30 PM", title: "Opening Ceremony" },
        { time: "7:00 PM", title: "Team Formation & Idea Pitching" },
        { time: "8:00 PM", title: "Dinner" },
        { time: "9:00 PM", title: "Lightning Network Workshop" },
        { time: "10:30 PM", title: "Hacking Begins" },
        { time: "11:00 PM", title: "Late Night Mentor Support" },
      ]
    },
    {
      day: "Day 2",
      date: "May 17",
      events: [
        { time: "8:00 AM", title: "Breakfast" },
        { time: "9:00 AM", title: "Daily Standup" },
        { time: "10:00 AM", title: "Bitcoin Core Technical Talk" },
        { time: "12:00 PM", title: "Lunch" },
        { time: "1:00 PM", title: "Hacking Continues" },
        { time: "3:00 PM", title: "Project Progress Check-in" },
        { time: "5:00 PM", title: "Final Submissions Due" },
        { time: "5:30 PM", title: "Project Presentations" },
        { time: "7:00 PM", title: "Judges Deliberation & Dinner" },
        { time: "8:00 PM", title: "Awards Ceremony" },
        { time: "9:00 PM", title: "Closing Remarks & Networking" },
      ]
    }
  ];

  return (
    <section id="schedule" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Event <span className="text-bitcoin">Schedule</span></h2>
          <p className="text-lg text-white/90 max-w-3xl mx-auto">
            Two days of intense building, learning, and connecting. Here's what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((day, index) => (
            <div 
              key={index} 
              className={`bg-dark-100 rounded-xl border ${
                index === 1 ? 'border-bitcoin' : 'border-dark-300'
              } overflow-hidden`}
            >
              <div className={`p-6 ${
                index === 1 ? 'bg-bitcoin text-black font-bold' : 'bg-dark-200 text-white'
              }`}>
                <h3 className="text-2xl font-bold">{day.day}</h3>
                <p>{day.date}, 2025</p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex">
                      <div className="w-20 flex-shrink-0 text-bitcoin font-medium">{event.time}</div>
                      <div className="flex-grow pl-4 border-l-2 border-dark-300">
                        <h4 className="font-medium text-white">{event.title}</h4>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;
