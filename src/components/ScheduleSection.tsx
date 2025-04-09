
import React from 'react';

const ScheduleSection: React.FC = () => {
  const schedule = [
    {
      day: "Day 1",
      date: "May 16",
      events: [
        { time: "6:00 PM", title: "Registration & Welcome" },
        { time: "6:30 PM", title: "Day 1 Opening Panel" },
        { time: "7:00 PM", title: "Team Formation" },
        { time: "8:00 PM", title: "Hacking Begins" },
      ]
    },
    {
      day: "Day 2",
      date: "May 17",
      events: [
        { time: "8:00 AM", title: "Breakfast & Hacking Begins" },
        { time: "10:00 AM", title: "Panel Discussion" },
        { time: "12:00 PM", title: "Lunch" },
        { time: "1:00 PM", title: "Panel Discussion" },
        { time: "3:00 PM", title: "Panel Discussion" },
        { time: "5:00 PM", title: "Final Submissions Due" },
        { time: "6:00 PM", title: "Project Presentations" },
        { time: "7:00 PM", title: "Judges Deliberation" },
        { time: "7:30 PM", title: "Awards Ceremony" },
        { time: "8:00 PM", title: "Closing Remarks & Networking" },
      ]
    }
  ];

  return (
    <section id="schedule" className="section">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title text-white">Event <span className="text-bitcoin">Schedule</span></h2>
          <p className="text-lg text-presidio-dark/90 max-w-3xl mx-auto">
            Two days of intense building, learning, and connecting. Here's what to expect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {schedule.map((day, index) => (
            <div 
              key={index} 
              className={`bg-dark-100 rounded-xl border ${
                index != 3 ? 'border-bitcoin' : 'border-dark-300'
              } overflow-hidden`}
            >
              <div className={`p-6 ${
                index != 3 ? 'bg-bitcoin text-black font-bold' : 'bg-dark-200 text-white'
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
