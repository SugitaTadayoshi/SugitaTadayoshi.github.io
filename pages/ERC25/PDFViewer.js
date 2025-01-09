// Create the PDFViewer component
const PDFViewer = (() => {
  const { FileText, X, Maximize2, Minimize2 } = lucide;

  return function PDFViewer({ url, title, inline = false }) {
    const [isFullscreen, setIsFullscreen] = React.useState(false);

    const toggleFullscreen = () => {
      setIsFullscreen(!isFullscreen);
    };

    return (
      <div className="w-full">
        {!inline && (
          <button
            onClick={() => setIsFullscreen(true)}
            className="w-full p-4 bg-black bg-opacity-50 hover:bg-opacity-70 rounded-lg flex items-center justify-center gap-3 transition-all duration-300"
          >
            <FileText size={24} className="text-yellow-400" />
            <span className="text-gray-200">View {title}</span>
          </button>
        )}

        {(isFullscreen || inline) && (
          <div
            className={`${
              isFullscreen
                ? "fixed inset-0 bg-black bg-opacity-75 z-50"
                : "relative"
            } flex items-center justify-center p-4`}
          >
            <div
              className={`bg-gray-900 rounded-lg relative ${
                isFullscreen ? "w-full max-w-4xl h-[80vh]" : "w-full h-[60vh]"
              }`}
            >
              <div className="absolute top-2 right-2 flex gap-2 z-10">
                <button
                  onClick={toggleFullscreen}
                  className="w-8 h-8 bg-gray-700 hover:bg-gray-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
                >
                  {isFullscreen ? (
                    <Minimize2 size={16} />
                  ) : (
                    <Maximize2 size={16} />
                  )}
                </button>
                {isFullscreen && (
                  <button
                    onClick={() => setIsFullscreen(false)}
                    className="w-8 h-8 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center text-white transition-all duration-300"
                  >
                    <X size={16} />
                  </button>
                )}
              </div>

              <iframe
                src={`${url}#view=FitH`}
                className="w-full h-full rounded-lg"
                title={title}
              />
            </div>
          </div>
        )}
      </div>
    );
  };
})();

// Make component available globally
window.PDFViewer = PDFViewer;
