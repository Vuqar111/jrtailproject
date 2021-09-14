import React, { useState } from "react";

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false);
  return (
    <div layout className="question" onClick={() => setToggle(!toggle)}>
      <h4 layout>{title}</h4>
      {toggle ? children : ""}
      <div className="faq-line"></div>
    </div>
  );
};

export default Toggle;
