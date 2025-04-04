
import React from 'react';

const ScheduleSection: React.FC = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "June 15",
      events: [
        { time: "8:00 AM", title: "Registration & Breakfast" },
        { time: "9:30 AM", title: "Opening Ceremony" },
        { time: "10:30 AM", title: "Team Formation & Idea Pitching" },
        { time: "12:00 PM", title: "Lunch" },
        { time: "1:00 PM", title: "Hacking Begins" },
        { time: "3:00 PM", title: "Lightning Network Workshop" },
        { time: "5:00 PM", title: "Mentor Session 1" },
        { time: "7:00 PM", title: "Dinner" },
        { time: "8:00 PM", title: "Late Night Hacking" },
      ]
    },
    {
      day: "Day 2",
      date: "June 16",
      events: [
        { time: "8:00 AM", title: "Breakfast" },
        { time: "9:00 AM", title: "Daily Standup" },
        { time: "10:00 AM", title: "Bitcoin Core Technical Talk" },
        { time: "12:00 PM", title: "Lunch" },
        { time: "1:00 PM", title: "Hacking Continues" },
        { time: "3:00 PM", title: "Mentor Session 2" },
        { time: "5:00 PM", title: "Project Progress Check-in" },
        { time: "7:00 PM", title: "Dinner" },
        { time: "8:00 PM", title: "Late Night Hacking" },
      ]
    },
    {
      day: "Day 3",
      date: "June 17",
      events: [
        { time: "8:00 AM", title: "Breakfast" },
        { time: "9:00 AM", title: "Final Preparations" },
        { time: "12:00 PM", title: "Hacking Ends & Lunch" },
        { time: "1:00 PM", title: "Project Presentations" },
        { time: "4:00 PM", title: "Judges Deliberation" },
        { time: "5:00 PM", title: "Awards Ceremony" },
        { time: "6:30 PM", title: "Closing Remarks & Networking" },
      ]
    }
  ];

  return (
    <section id="schedule" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title">Event <span className="text-bitcoin">Schedule</span></h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
            Three days of intense building, learning, and connecting. Here's what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {schedule.map((day, index) => (
            <div 
              key={index} 
              className={`bg-dark-100 rounded-xl border ${
                index === 1 ? 'border-bitcoin' : 'border-dark-300'
              } overflow-hidden`}
            >
              <div className={`p-6 ${
                index === 1 ? 'bg-bitcoin text-white' : 'bg-dark-200 text-foreground'
              }`}>
                <h3 className="text-2xl font-bold">{day.day}</h3>
                <p>{day.date}, 2025</p>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  {day.events.map((event, eventIndex) => (
                    <div key={eventIndex} className="flex">
                      <div className="w-20 flex-shrink-0 text-foreground/70">{event.time}</div>
                      <div className="flex-grow pl-4 border-l-2 border-dark-300">
                        <h4 className="font-medium">{event.title}</h4>
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
