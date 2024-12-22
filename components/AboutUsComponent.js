import React, { useState, useEffect } from "react";

const AboutUsComponent = () => {
  // State for typing animation
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [currentLine, setCurrentLine] = useState(0);
  const [typingComplete, setTypingComplete] = useState(false);

  // State for content slider
  const [activeContent, setActiveContent] = useState("mission");

  // Text to be typed
  const lines = [
    "Where we believe that every step taken is a stride towards conquering personal challenges and achieving greatness.",
    "Established in 2016, Erovra Club is more than just a running club;",
    "It is a community dedicated to fostering family-oriented experiences that empower individuals to pursue their goals and surpass their limits.",
  ];

  // Typing animation effect
  useEffect(() => {
    let currentIndex = 0;
    let typingInterval;

    if (isTyping && currentLine < lines.length) {
      typingInterval = setInterval(() => {
        const currentLineText = lines[currentLine];
        if (currentIndex <= currentLineText.length) {
          setDisplayText((prev) => {
            const existingLines = lines.slice(0, currentLine).join("\n");
            return (
              existingLines +
              (existingLines ? "\n" : "") +
              currentLineText.slice(0, currentIndex)
            );
          });
          currentIndex++;
        } else {
          setCurrentLine((prev) => prev + 1);
          currentIndex = 0;
          if (currentLine === lines.length - 1) {
            setIsTyping(false);
            setTypingComplete(true);
          }
        }
      }, 30);
    }

    return () => clearInterval(typingInterval);
  }, [isTyping, currentLine]);

  // Slider content configuration
  const contents = {
    mission: {
      title: "Our Mission",
      text: (
        <>
          At Erovra Club, our mission is simple yet profound:
          <br />
          <br />
          1. To provide a supportive environment for families and individuals
          alike
          <br />
          2. Encouraging them to experience the thrill of overcoming challenges.
          <br />
          <br />
          We are committed to helping our members set ambitious goals and
          achieve them through camaraderie, training, and shared experiences.
        </>
      ),
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="50"
            r="30"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle
            cx="50"
            cy="50"
            r="15"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path d="M55 10 L50 45 L45 10 L50 15 Z" fill="currentColor" />
          <circle cx="50" cy="50" r="4" fill="currentColor" />
        </svg>
      ),
    },
    vision: {
      title: "Our Vision",
      text: (
        <>
          Erovra, which translates to "conqueror" in Swedish, embodies our
          vision of providing a platform where athletes can excel and conquer
          their fears.
          <br />
          <br />
          We envision a future where:
          <br />
          <div style={{ paddingLeft: "1rem" }}>
            • Every member has the opportunity to unlock their full potential.
            <br />
            • Families come together through shared athletic pursuits.
            <br />• Challenges are met with resilience and determination.
          </div>
        </>
      ),
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
      ),
    },
    values: {
      title: "Our Values",
      text: (
        <>
          <div style={{ paddingLeft: "1rem" }}>
            • <span style={{ fontWeight: "bold" }}>Community</span>: We
            prioritize building strong relationships among our members.
            <br />• <span style={{ fontWeight: "bold" }}>Empowerment</span>: We
            inspire each other to push beyond perceived limitations.
            <br />• <span style={{ fontWeight: "bold" }}>Inclusivity</span>:
            Everyone is welcome at Erovra Club, regardless of skill level or
            background.
            <br />• <span style={{ fontWeight: "bold" }}>Wellness</span>: We
            promote physical health as an integral part of personal growth.
          </div>
        </>
      ),
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
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
      ),
    },
  };

  return (
    <div className="flex flex-col items-center w-full">
      {/* Typing Animation Section */}
      <div className="text-center max-w-4xl mx-auto mb-16 px-4">
        <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
          {displayText}
          {isTyping && (
            <span className="inline-block w-2 h-6 ml-1 bg-white animate-pulse" />
          )}
        </p>
      </div>

      {/* Content Slider Section - Only shows after typing is complete */}
      <div
        className={`transition-opacity duration-1000 ${
          typingComplete ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto p-8">
          {/* Content Container */}
          <div className="flex-grow bg-black bg-opacity-20 rounded-lg p-6 backdrop-blur-sm">
            <h2 className="text-2xl font-bold mb-4 text-[#DAA520]">
              {contents[activeContent].title}
            </h2>
            <div className="text-gray-300 leading-relaxed">
              {contents[activeContent].text}
            </div>
          </div>

          {/* Navigation Icons */}
          <div className="flex md:flex-col gap-6 justify-center p-4">
            {Object.entries(contents).map(([key, content]) => (
              <button
                key={key}
                onMouseEnter={() => setActiveContent(key)}
                className={`w-20 h-20 rounded-full transition-all duration-300 border-3 border-white cursor-pointer p-3 flex items-center justify-center
                  ${
                    activeContent === key
                      ? "bg-white text-black"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
              >
                {content.icon(activeContent === key)}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsComponent;
