import React, { useState } from "react";

const EventListing = () => {
  const [events, setEvents] = useState([
    {
      title: "Charity Run",
      date: "2025-03-15",
      location: "City Park",
      category: "Charity",
      description: "A marathon for a good cause.",
    },
    {
      title: "Community Gathering",
      date: "2025-03-20",
      location: "Town Hall",
      category: "Social",
      description: "Meet your neighbors and make new friends.",
    },
    {
      title: "Sunday Service",
      date: "2025-03-10",
      location: "Local Church",
      category: "Religious",
      description: "Join us for prayers and worship.",
    },
  ]);

  const [filter, setFilter] = useState("All");
  const [newEvent, setNewEvent] = useState({
    title: "",
    date: "",
    location: "",
    category: "",
    description: "",
  });

  const handleAddEvent = () => {
    if (
      newEvent.title &&
      newEvent.date &&
      newEvent.location &&
      newEvent.category &&
      newEvent.description
    ) {
      setEvents([...events, newEvent]);
      setNewEvent({
        title: "",
        date: "",
        location: "",
        category: "",
        description: "",
      });
    }
  };

  const filteredEvents =
    filter === "All"
      ? events
      : events.filter((event) => event.category === filter);

  return (
    <div className="p-6 max-w-6xl mx-auto flex flex-col items-start md:flex-row gap-6">
      {/* Event Listing Section */}
      <div className="w-full md:w-3/4 border p-4 rounded shadow-lg bg-white overflow-auto max-h-[700px] mt-20">
        <h1 className="text-2xl font-bold mb-4">Upcoming Events</h1>

        <div className="mb-4">
          <label className="mr-2">Filter by Category:</label>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="border p-2 rounded"
          >
            <option value="All">All</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
        </div>

        <ul className="overflow-y-auto pr-2">
          {filteredEvents.map((event, index) => (
            <li
              key={index}
              className="border p-4 mb-2 rounded bg-gray-100 shadow"
            >
              <h2 className="text-xl font-semibold">{event.title}</h2>
              <p>
                <strong>Date:</strong> {event.date}
              </p>
              <p>
                <strong>Location:</strong> {event.location}
              </p>
              <p>
                <strong>Category:</strong> {event.category}
              </p>
              <p>{event.description}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Add New Event Section */}
      <div className="w-full md:w-1/4 border p-4 rounded shadow-lg bg-white mt-20">
        <h2 className="text-xl font-bold">Add New Event</h2>
        <div className="flex flex-col gap-2 mt-2">
          <input
            type="text"
            placeholder="Title"
            value={newEvent.title}
            onChange={(e) =>
              setNewEvent({ ...newEvent, title: e.target.value })
            }
            className="border p-2 rounded"
          />
          <input
            type="date"
            value={newEvent.date}
            onChange={(e) => setNewEvent({ ...newEvent, date: e.target.value })}
            className="border p-2 rounded"
          />
          <input
            type="text"
            placeholder="Location"
            value={newEvent.location}
            onChange={(e) =>
              setNewEvent({ ...newEvent, location: e.target.value })
            }
            className="border p-2 rounded"
          />
          <select
            value={newEvent.category}
            onChange={(e) =>
              setNewEvent({ ...newEvent, category: e.target.value })
            }
            className="border p-2 rounded"
          >
            <option value="">Select Category</option>
            <option value="Religious">Religious</option>
            <option value="Social">Social</option>
            <option value="Charity">Charity</option>
          </select>
          <textarea
            placeholder="Description"
            value={newEvent.description}
            onChange={(e) =>
              setNewEvent({ ...newEvent, description: e.target.value })
            }
            className="border p-2 rounded"
          ></textarea>
          <button
            onClick={handleAddEvent}
            className="bg-blue-500 text-white p-2 rounded mt-2 hover:cursor-pointer active:bg-blue-300"
          >
            Add Event
          </button>
        </div>
      </div>
    </div>
  );
};

export default EventListing;
