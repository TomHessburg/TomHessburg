import React from "react";

const Card: React.FC<{}> = ({ children }) => {
  return (
    <div className="w-full bg-dusty/70 backdrop-blur p-6 mb-6">{children}</div>
  );
};

export default Card;
