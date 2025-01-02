// ERC25Details.js
const ERC25Details = () => {
  const [activeSection, setActiveSection] = React.useState(null);

  const eventSections = [
    {
      id: "details",
      title: "Event Details",
      icon: "📅",
      content: {
        Date: "8-9 March 2025",
        Venue: "Home of Athletics",
        "Event Type": "Relay Championship",
        "Registration Deadline": "February 15, 2025",
      },
    },
    {
      id: "format",
      title: "Race Format",
      icon: "🏆",
      content: {
        Categories: "4x100m, 4x400m Relays",
        Divisions: "Open, Masters, Youth",
        "Team Size": "4-6 runners per team",
        "Qualifying Times": "Available in full event guide",
      },
    },
    {
      id: "schedule",
      title: "Event Schedule",
      icon: "⏰",
      content: {
        "Day 1 - March 8": "Heats & Preliminaries",
        "Day 2 - March 9": "Finals & Award Ceremony",
        "Reporting Time": "2 hours before event",
        "Race Pack Collection": "Details in event guide",
      },
    },
    {
      id: "registration",
      title: "Registration",
      icon: "👥",
      content: {
        "Early Bird": "Until January 31, 2025",
        "Regular Registration": "February 1 - February 15, 2025",
        "Team Requirements": "Same club/organization affiliation",
        "Registration Platform": "Singapore Athletics Portal",
      },
    },
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {eventSections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <div
              key={section.id}
              className={`cursor-pointer transition-all duration-300 rounded-lg p-6 ${
                isActive
                  ? "bg-[#DAA520] text-white"
                  : "bg-gray-900 text-white hover:border-[#DAA520] border border-gray-700"
              }`}
              onClick={() => setActiveSection(isActive ? null : section.id)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-lg font-semibold">{section.title}</h3>
              </div>

              {isActive && (
                <div className="space-y-3 mt-4">
                  {Object.entries(section.content).map(([key, value]) => (
                    <div key={key} className="flex flex-col">
                      <span className="text-sm opacity-80">{key}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="flex justify-center">
        <a
          href="https://drive.google.com/your-file-link-here"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 bg-[#DAA520] text-white px-6 py-3 rounded-lg hover:bg-[#B8860B] transition-colors"
        >
          <span className="text-xl">📥</span>
          <span>Download Full Event Guide</span>
        </a>
      </div>

      <div className="mt-8 text-center text-gray-400">
        <p className="text-sm">Event Supported By</p>
        <div className="flex justify-center items-center space-x-8 mt-4">
          <img
            src="/images/sa-logo.png"
            alt="Singapore Athletics"
            className="h-12"
          />
          <img src="/images/pocari-logo.png" alt="Pocari" className="h-12" />
          <img src="/images/milo-logo.png" alt="Milo" className="h-12" />
        </div>
      </div>
    </div>
  );
};

window.ERC25Details = ERC25Details;
