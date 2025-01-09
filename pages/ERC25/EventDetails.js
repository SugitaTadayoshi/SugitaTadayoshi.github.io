const PDFViewer = ({ url }) => {
  return (
    <div className="w-full h-full flex flex-col">
      <iframe
        src={url}
        className="w-full flex-1 rounded-lg"
        style={{ minHeight: "calc(100vh - 250px)" }}
        title="PDF Document"
      />
    </div>
  );
};

const EventDetails = (() => {
  return function EventDetails() {
    const [activeView, setActiveView] = React.useState("details");

    const renderContent = () => {
      switch (activeView) {
        case "format":
        case "schedule":
          return (
            <div className="h-full">
              <PDFViewer url={`./pdfs/${activeView}.pdf`} />
            </div>
          );
        case "registration":
        case "startlist":
          return (
            <div className="h-full flex items-center justify-center">
              <div className="text-2xl text-white/70 font-light">
                Coming Soon
              </div>
            </div>
          );
        default:
          return (
            <div className="space-y-10">
              {/* Title with special styling */}
              <div>
                <h1 className="text-white text-4xl font-extralight tracking-wider mb-2">
                  SA x Erovra Relay Championships 2025
                </h1>
                <div className="h-0.5 w-32 bg-gradient-to-r from-yellow-400 to-transparent" />
              </div>

              {/* Date & Venue Section */}
              <div className="grid gap-8">
                <div>
                  <div className="text-yellow-400 text-sm uppercase tracking-wider mb-2">
                    Date
                  </div>
                  <div className="text-2xl text-white/90 font-extralight">
                    8-9 March 2025
                  </div>
                </div>
                <div>
                  <div className="text-yellow-400 text-sm uppercase tracking-wider mb-2">
                    Venue
                  </div>
                  <div className="text-2xl text-white/90 font-extralight">
                    Home of Athletics
                  </div>
                </div>
              </div>

              {/* Fees Section */}
              <div className="bg-black/20 backdrop-blur-sm p-6 rounded-lg border border-yellow-400/10">
                <div className="text-yellow-400 text-sm uppercase tracking-wider mb-4">
                  Fees
                </div>
                <div className="space-y-3">
                  <div className="text-xl text-white/90 font-extralight">
                    MOE Schools - $50 per team
                  </div>
                  <div className="text-xl text-white/90 font-extralight">
                    SA Affiliates & Associates - $60 per team
                  </div>
                </div>
              </div>

              {/* Registration Section */}
              <div className="space-y-6">
                <div className="text-yellow-400 text-sm uppercase tracking-wider mb-2">
                  Registration Dates
                </div>
                <div className="grid gap-4">
                  <div className="flex justify-between items-baseline">
                    <span className="text-white/70 font-light">
                      MOE Schools
                    </span>
                    <span className="text-white text-xl font-extralight">
                      February 1, 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-white/70 font-light">
                      SA Affiliates & Associates
                    </span>
                    <span className="text-white text-xl font-extralight">
                      February 10, 2025
                    </span>
                  </div>
                  <div className="flex justify-between items-baseline">
                    <span className="text-white/70 font-light">
                      Registration Deadline
                    </span>
                    <span className="text-white text-xl font-extralight">
                      February 19, 2025
                    </span>
                  </div>
                </div>
              </div>

              {/* Registration Link */}
              <div>
                <div className="text-yellow-400 text-sm uppercase tracking-wider mb-3">
                  Registration Link
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors"
                >
                  <span className="text-xl font-extralight">
                    Singapore Athletics Portal
                  </span>
                  <span className="transform transition-transform group-hover:translate-x-1">
                    ↗
                  </span>
                </a>
              </div>
            </div>
          );
      }
    };

    return (
      <div className="min-h-screen">
        <div className="container mx-auto px-4 pt-24 pb-12">
          <div className="ml-auto max-w-2xl">
            {/* Toggle Buttons */}
            <div className="flex gap-4 mb-8">
              {[
                { id: "details", label: "Details" },
                { id: "format", label: "Race Format" },
                { id: "schedule", label: "Schedule" },
                { id: "registration", label: "Registration" },
                { id: "startlist", label: "Startlist" },
              ].map((view) => (
                <button
                  key={view.id}
                  onClick={() => setActiveView(view.id)}
                  className={`px-6 py-3 rounded-lg transition-all duration-300 ${
                    activeView === view.id
                      ? "bg-yellow-400 text-black"
                      : "bg-black/20 text-white hover:bg-black/40 backdrop-blur-sm border border-yellow-400/10"
                  }`}
                >
                  {view.label}
                </button>
              ))}
            </div>

            {/* Content Container */}
            <div
              className="h-screen p-8 rounded-lg overflow-hidden relative"
              style={{ height: "calc(100vh - 200px)" }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-yellow-400/10 to-yellow-400/5 backdrop-blur-sm" />

              {/* Inner border with glow */}
              <div className="absolute inset-0 border border-yellow-400/20" />

              {/* Dynamic Content */}
              <div className="relative h-full">{renderContent()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
})();

// Make components available globally
window.PDFViewer = PDFViewer;
window.EventDetails = EventDetails;
