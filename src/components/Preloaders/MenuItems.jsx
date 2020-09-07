import React from "react";
import ContentLoader from "react-content-loader";

const MenuItems = () => {
  return (
    <div>
      <div className="row">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div className="col-lg-6 pt-3" key={i}>
            <ContentLoader height={140} speed={1} viewBox="0 0 380 70">
              {/* Only SVG shapes */}
              <rect x="0" y="0" rx="5" ry="5" width="60" height="60"/>
              <rect x="80" y="8" rx="4" ry="4" width="200" height="13" />
              <rect x="80" y="30" rx="3" ry="3" width="150" height="10" />
              <rect x="80" y="45" rx="2" ry="2" width="120" height="8" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MenuItems;
