const AboutUsSlider = () => {
  const [activeContent, setActiveContent] = React.useState("mission");

  const contents = {
    mission: {
      title: "Our Mission",
      text: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud 
      exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          {/* Outer circles with perspective */}
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="40"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="30"
            ry="27"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="15"
            ry="13"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          />
          {/* Smaller arrow with slight extension */}
          <path
            d="M65 12 L50 45 L35 12 L50 18 Z"
            fill="currentColor"
            transform="rotate(30 50 50)"
          />
          {/* Arrow shadow */}
          <path
            d="M65 14 L50 47 L35 14"
            stroke="rgba(0,0,0,0.3)"
            stroke-width="2"
            fill="none"
            transform="rotate(30 50 50)"
          />
          {/* Center dot with slight shadow */}
          <circle cx="50" cy="50" r="4" fill="currentColor" />
          <circle cx="51" cy="51" r="3" fill="rgba(0,0,0,0.3)" />
        </svg>
      ),
    },
    vision: {
      title: "Our Vision",
      text: `Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore 
      eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in 
      culpa qui officia deserunt mollit anim id est laborum.`,
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          {/* Eye shape */}
          <path
            d="M10 50 Q50 10 90 50 Q50 90 10 50"
            fill="none"
            stroke="currentColor"
            stroke-width="4"
          />
          {/* Iris */}
          <circle
            cx="50"
            cy="50"
            r="20"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
          />
          {/* Pupil */}
          <circle cx="50" cy="50" r="10" fill="currentColor" />
          {/* Light reflection */}
          <circle cx="45" cy="45" r="4" fill={isActive ? "black" : "white"} />
          {/* Eyelashes */}
          <path
            d="M20 40 L15 35 M30 30 L25 25 M50 25 L50 20 M70 30 L75 25 M80 40 L85 35"
            stroke="currentColor"
            stroke-width="2"
          />
          {/* Detail lines */}
          <path
            d="M35 50 A15 15 0 0 1 65 50"
            stroke="currentColor"
            stroke-width="2"
            fill="none"
          />
        </svg>
      ),
    },
    values: {
      title: "Our Values",
      text: `Integer a velit eu nisi volutpat tincidunt. Sed gravida libero ut enim suscipit 
      efficitur. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere 
      cubilia curae; Suspendisse potenti.`,
      icon: (isActive) => (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          {/* Electron orbits */}
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            transform="rotate(0 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            transform="rotate(60 50 50)"
          />
          <ellipse
            cx="50"
            cy="50"
            rx="45"
            ry="20"
            fill="none"
            stroke="currentColor"
            stroke-width="3"
            transform="rotate(-60 50 50)"
          />
          {/* Nucleus */}
          <circle cx="50" cy="50" r="8" fill="currentColor" />
          {/* Electrons */}
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
    <div
      style={{
        display: "flex",
        width: "100%",
        maxWidth: "64rem",
        margin: "0 auto",
        gap: "2rem",
        padding: "2rem",
      }}
    >
      {/* Content Container */}
      <div
        style={{
          flexGrow: 1,
          backgroundColor: "rgba(0, 0, 0, 0.2)",
          borderRadius: "0.5rem",
          padding: "1.5rem",
          transition: "all 0.3s",
        }}
      >
        <h2
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            marginBottom: "1rem",
          }}
        >
          {contents[activeContent].title}
        </h2>
        <p
          style={{
            color: "#e5e7eb",
            lineHeight: "1.625",
          }}
        >
          {contents[activeContent].text}
        </p>
      </div>

      {/* Navigation Icons */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
          padding: "1rem",
        }}
      >
        {Object.entries(contents).map(([key, content]) => (
          <button
            key={key}
            onMouseEnter={() => setActiveContent(key)}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "9999px",
              transition: "all 0.3s",
              backgroundColor: activeContent === key ? "white" : "#333333",
              color: activeContent === key ? "black" : "white",
              border: "3px solid white",
              cursor: "pointer",
              padding: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {content.icon(activeContent === key)}
          </button>
        ))}
      </div>
    </div>
  );
};

window.AboutUsSlider = AboutUsSlider;
