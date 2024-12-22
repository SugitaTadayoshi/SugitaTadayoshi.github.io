const React = window.React;
const { useState, useEffect } = React;

const IndexContent = () => {
  const [text, setText] = useState("");
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [completedLines, setCompletedLines] = useState([]);
  const [typingComplete, setTypingComplete] = useState(false);
  const [activeContent, setActiveContent] = useState("about");

  const lines = [
    "erövra",
    "*verb*",
    "/²ẹːröːvra/",
    "to win , to defeat , to conquer",
  ];

  const content = {
    about: {
      title: "About Us",
      text: "Welcome to Erovra Club, \n Where we believe that every step taken is a stride towards conquering personal challenges and achieving greatness. \n\n Established in 2016, Erovra Club is more than just a running club; \n It is a community dedicated to fostering family-oriented experiences that empower individuals to pursue their goals and surpass their limits.",
      icon: (isActive) => (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
            {/* 'i' dot */}
            <circle cx="50" cy="30" r="4" fill="currentColor" />
            {/* 'i' body */}
            <rect
              x="46"
              y="40"
              width="8"
              height="35"
              rx="4"
              fill="currentColor"
            />
          </svg>
        </div>
      ),
    },
    mission: {
      title: "Our Mission",
      text: "At Erovra Club, our mission is simple yet profound: To provide a supportive environment for families and individuals alike, encouraging them to experience the thrill of overcoming challenges. We are committed to helping our members set ambitious goals and achieve them through camaraderie, training, and shared experiences.",
      icon: (isActive) => (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="40"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="30"
              ry="27"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="15"
              ry="13"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              d="M65 12 L50 45 L35 12 L50 18 Z"
              fill="currentColor"
              transform="rotate(30 50 50)"
            />
            <path
              d="M65 14 L50 47 L35 14"
              stroke="rgba(0,0,0,0.3)"
              strokeWidth="2"
              fill="none"
              transform="rotate(30 50 50)"
            />
            <circle cx="50" cy="50" r="4" fill="currentColor" />
            <circle cx="51" cy="51" r="3" fill="rgba(0,0,0,0.3)" />
          </svg>
        </div>
      ),
    },
    vision: {
      title: "Our Vision",
      text: "Erovra, which translates to 'conqueror' in Swedish, embodies our vision of providing a platform where athletes can excel and conquer their fears. We envision a future where every member has the opportunity to unlock their full potential, families come together through shared athletic pursuits, and challenges are met with resilience and determination.",
      icon: (isActive) => (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
            <path
              d="M10 50 Q50 10 90 50 Q50 90 10 50"
              fill="none"
              stroke="currentColor"
              strokeWidth="4"
            />
            <circle
              cx="50"
              cy="50"
              r="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
            />
            <circle cx="50" cy="50" r="10" fill="currentColor" />
            <circle cx="45" cy="45" r="4" fill={isActive ? "black" : "white"} />
            <path
              d="M20 40 L15 35 M30 30 L25 25 M50 25 L50 20 M70 30 L75 25 M80 40 L85 35"
              stroke="currentColor"
              strokeWidth="2"
            />
            <path
              d="M35 50 A15 15 0 0 1 65 50"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
          </svg>
        </div>
      ),
    },
    values: {
      title: "Our Values",
      text: "• Community: We prioritize building strong relationships among our members\n• Empowerment: We inspire each other to push beyond perceived limitations\n• Inclusivity: Everyone is welcome at Erovra Club, regardless of skill level\n• Wellness: We promote physical health as an integral part of personal growth",
      icon: (isActive) => (
        <div style={{ width: "100%", height: "100%", position: "relative" }}>
          <svg viewBox="0 0 100 100" style={{ width: "100%", height: "100%" }}>
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              transform="rotate(0 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              transform="rotate(60 50 50)"
            />
            <ellipse
              cx="50"
              cy="50"
              rx="45"
              ry="20"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              transform="rotate(-60 50 50)"
            />
            <circle cx="50" cy="50" r="8" fill="currentColor" />
            <circle cx="95" cy="50" r="4" fill="currentColor" />
            <circle cx="73" cy="89" r="4" fill="currentColor" />
            <circle cx="27" cy="89" r="4" fill="currentColor" />
            <circle cx="5" cy="50" r="4" fill="currentColor" />
            <circle cx="27" cy="11" r="4" fill="currentColor" />
            <circle cx="73" cy="11" r="4" fill="currentColor" />
          </svg>
        </div>
      ),
    },
  };

  useEffect(() => {
    if (currentLineIndex < lines.length) {
      let currentIndex = 0;
      const interval = setInterval(() => {
        if (currentIndex <= lines[currentLineIndex].length) {
          setText(lines[currentLineIndex].substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(interval);
          setCompletedLines((prev) => [...prev, lines[currentLineIndex]]);
          setText("");
          if (currentLineIndex === lines.length - 1) {
            setTypingComplete(true);
          } else {
            setCurrentLineIndex((prev) => prev + 1);
          }
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [currentLineIndex]);

  const sliderSection = (
    <div className={`slider-section ${typingComplete ? "visible" : ""}`}>
      <div className="bg-gray-900 bg-opacity-50 rounded-lg p-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-grow">
            <h2 className="text-2xl font-bold mb-4 text-[#DAA520]">
              {content[activeContent].title}
            </h2>
            <div className="text-gray-300 leading-relaxed whitespace-pre-line">
              {content[activeContent].text}
            </div>
          </div>

          <div className="flex md:flex-col gap-4 justify-center">
            {Object.entries(content).map(([key, item]) => (
              <button
                key={key}
                onMouseEnter={() => setActiveContent(key)}
                style={{
                  width: "80px",
                  height: "80px",
                  borderRadius: "50%",
                  padding: "12px",
                  backgroundColor: activeContent === key ? "white" : "#1f2937",
                  color: activeContent === key ? "black" : "#9ca3af",
                  border: "2px solid white",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                {item.icon(activeContent === key)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        {completedLines.map((line, index) => (
          <p
            key={index}
            className={`definition-text mb-2 ${
              index === 0 ? "word-text" : ""
            } ${index === 1 ? "part-of-speech" : ""}`}
          >
            {line}
          </p>
        ))}
        {currentLineIndex < lines.length && (
          <p className="definition-text mb-2">
            {text}
            {currentLineIndex < lines.length - 1 &&
              text.length < lines[currentLineIndex].length && (
                <span className="inline-block w-2 h-5 ml-1 bg-white animate-pulse" />
              )}
          </p>
        )}
      </div>
      {sliderSection}
    </div>
  );
};

window.IndexContent = IndexContent;
