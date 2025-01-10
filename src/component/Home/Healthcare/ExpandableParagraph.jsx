import React, { useState } from 'react';
import "./ExpandableParagraph.css"
const ExpandableParagraph = ({ initialText, expandedText }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <p>{isExpanded ? expandedText : initialText}</p>
      {!isExpanded && (
        <a style={{}} onClick={toggleExpansion} className="see-details">
          See Details
        </a>
      )}
    </div>
  );
};

export default ExpandableParagraph;