"use client";

const HexagonCell = ({ client, size }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size * 1.16}px`,
        position: "relative",
        flexShrink: 0,
        transition: "all .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.08)";
        e.currentTarget.style.zIndex = "10";
        e.currentTarget.style.filter = "drop-shadow(0 10px 30px rgba(59, 154, 199, 0.5))";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.zIndex = "1";
        e.currentTarget.style.filter = "none";
      }}
    >
      {/* SVG Hexagon Border */}
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 180 210"
        style={{ position: "absolute", top: 0, left: 0 }}
      >
        <polygon
          points="90,0 180,52.5 180,157.5 90,210 0,157.5 0,52.5"
          fill="#ffffff"
          stroke="#3b9ac7"
          strokeWidth="3"
        />
      </svg>

      {/* Content Container */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
          padding: "15%",
        }}
      >
        <img
          src={client.logo}
          alt={client.alt ?? "client"}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
};

const ClientsHoneyComb = ({ clients }) => {
  // Desktop: 4-5-4 pattern
  const desktopRows = [];
  const desktopPattern = [4, 5, 4];
  let clientIndex = 0;
  let patternIndex = 0;
  
  while (clientIndex < clients.length) {
    const rowSize = desktopPattern[patternIndex % desktopPattern.length];
    desktopRows.push(clients.slice(clientIndex, clientIndex + rowSize));
    clientIndex += rowSize;
    patternIndex++;
  }

  // Tablet: 3-4-3-4 pattern
  const tabletRows = [];
  const tabletPattern = [3, 4, 3, 4];
  let tabletIndex = 0;
  let tabletPatternIndex = 0;
  
  while (tabletIndex < clients.length) {
    const rowSize = tabletPattern[tabletPatternIndex % tabletPattern.length];
    tabletRows.push(clients.slice(tabletIndex, tabletIndex + rowSize));
    tabletIndex += rowSize;
    tabletPatternIndex++;
  }

  // Mobile: 2-3-2-3 pattern
  const mobileRows = [];
  const mobilePattern = [2, 3, 2, 3];
  let mobileIndex = 0;
  let mobilePatternIndex = 0;
  
  while (mobileIndex < clients.length) {
    const rowSize = mobilePattern[mobilePatternIndex % mobilePattern.length];
    mobileRows.push(clients.slice(mobileIndex, mobileIndex + rowSize));
    mobileIndex += rowSize;
    mobilePatternIndex++;
  }

  return (
    <div style={{ width: "100%", overflow: "hidden" }}>
      <style>{`
        .honeycomb-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          position: relative;
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
        }
        
        .honeycomb-row {
          display: flex;
        }
        
        .mobile-layout { display: flex; }
        .tablet-layout { display: none; }
        .desktop-layout { display: none; }
        
        @media (min-width: 640px) {
          .mobile-layout { display: none; }
          .tablet-layout { display: flex; }
          .honeycomb-container { padding: 0 24px; }
        }
        
        @media (min-width: 1024px) {
          .tablet-layout { display: none; }
          .desktop-layout { display: flex; }
          .honeycomb-container { padding: 0; max-width: 1200px; }
        }
      `}</style>

      <div className="honeycomb-container">
        {/* Mobile: 2-3-2-3 pattern */}
        <div className="mobile-layout" style={{ flexDirection: "column", alignItems: "center", width: "100%" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
            {mobileRows.map((row, rowIndex) => {
              const gap = 6;
              const hexSize = 90;
              
              // Pattern: [2, 3, 2, 3]
              // Rows with 2 hexagons (indices 0, 2, 4...): offset to the right
              // Rows with 3 hexagons (indices 1, 3, 5...): no offset (reference)
              const patternIndex = rowIndex % 4;
              const offset = (patternIndex === 0 || patternIndex === 2) ? (hexSize + gap) / 2 : 0;
              
              return (
                <div
                  key={rowIndex}
                  className="honeycomb-row"
                  style={{
                    gap: `${gap}px`,
                    marginBottom: rowIndex < mobileRows.length - 1 ? "-25px" : "0px",
                    marginLeft: `${offset}px`,
                  }}
                >
                  {row.map((client, index) => (
                    <HexagonCell key={index} client={client} size={hexSize} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Tablet: 3-4-3-4 pattern */}
        <div className="tablet-layout" style={{ flexDirection: "column", alignItems: "center", width: "100%" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
            {tabletRows.map((row, rowIndex) => {
              const gap = 8;
              const hexSize = 110;
              
              // Pattern: [3, 4, 3, 4]
              // Rows with 3 hexagons (indices 0, 2, 4...): offset to the right
              // Rows with 4 hexagons (indices 1, 3, 5...): no offset (reference)
              const patternIndex = rowIndex % 4;
              const offset = (patternIndex === 0 || patternIndex === 2) ? (hexSize + gap) / 2 : 0;
              
              return (
                <div
                  key={rowIndex}
                  className="honeycomb-row"
                  style={{
                    gap: `${gap}px`,
                    marginBottom: rowIndex < tabletRows.length - 1 ? "-30px" : "0px",
                    marginLeft: `${offset}px`,
                  }}
                >
                  {row.map((client, index) => (
                    <HexagonCell key={index} client={client} size={hexSize} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>

        {/* Desktop: 4-5-4 pattern */}
        <div className="desktop-layout" style={{ flexDirection: "column", alignItems: "center", width: "100%" }}>
          <div style={{ position: "relative", display: "flex", flexDirection: "column" }}>
            {desktopRows.map((row, rowIndex) => {
              const gap = 10;
              const hexSize = 160;
              
              // Pattern alignment:
              // Row 0 (4 hex): offset to the right by half a hex
              // Row 1 (5 hex): no offset (reference row)
              // Row 2 (4 hex): offset to the right by half a hex (aligned with row 0)
              const patternIndex = rowIndex % 3;
              const offset = patternIndex === 1 ? 0 : (hexSize + gap) / 2;
              
              return (
                <div
                  key={rowIndex}
                  className="honeycomb-row"
                  style={{
                    gap: `${gap}px`,
                    marginBottom: rowIndex < desktopRows.length - 1 ? "-42px" : "0px",
                    marginLeft: `${offset}px`,
                  }}
                >
                  {row.map((client, index) => (
                    <HexagonCell key={index} client={client} size={hexSize} />
                  ))}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientsHoneyComb;