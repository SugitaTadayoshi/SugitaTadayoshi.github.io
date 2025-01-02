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
        "Registration Deadline": "February 19, 2025",
      },
    },
    {
      id: "format",
      title: "Race Format",
      icon: "🏆",
      pdfFile: "format.pdf",
    },
    {
      id: "schedule",
      title: "Event Schedule",
      icon: "⏰",
      pdfFile: "schedule.pdf",
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
                <div>
                  {section.pdfFile ? (
                    <div className="mt-4">
                      <iframe
                        src={section.pdfFile}
                        width="100%"
                        height="400px"
                        frameBorder="0"
                      ></iframe>
                    </div>
                  ) : (
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
    </div>
  );
};

window.ERC25Details = ERC25Details;
