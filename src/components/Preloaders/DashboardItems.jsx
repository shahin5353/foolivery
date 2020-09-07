import React from "react";
import ContentLoader from "react-content-loader";

const DashboardItems = () => {
  return (
    <div>
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((i) => (
            <ContentLoader height={140} speed={1} viewBox="0 0 800 70">
              {/* Only SVG shapes */}
              <rect x="0" y="0" rx="0" ry="0" width="50" height="15"/>
              <rect x="55" y="0" rx="0" ry="0" width="200" height="15" />
              <rect x="260" y="0" rx="3" ry="3" width="200" height="15" />
              <rect x="465" y="0" rx="2" ry="2" width="50" height="15" />
              <rect x="520" y="0" rx="2" ry="2" width="50" height="15" />
              <rect x="575" y="0" rx="2" ry="2" width="50" height="15" />
              <rect x="630" y="0" rx="2" ry="2" width="50" height="15" />
              <rect x="0" y="20" rx="2" ry="2" width="800" height="5" />
            </ContentLoader>
        ))}
      </div>
    </div>
  );
};

export default DashboardItems;
