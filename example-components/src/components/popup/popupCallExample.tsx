import React, { useState, useEffect } from "react";
import Popup from "./";

const PopUp: React.FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  console.log(isPopupOpen);

  useEffect(() => {}, [isPopupOpen]);

  return (
    <div>
      <button onClick={() => setIsPopupOpen(true)}>Open Popup</button>
      <Popup isOpen={isPopupOpen} onClose={() => setIsPopupOpen(false)}>
        <>
          <h1>Popup content here!</h1>
          <button onClick={() => setIsPopupOpen(false)}>Close Popup</button>
        </>
      </Popup>
    </div>
  );
};

export default PopUp;
