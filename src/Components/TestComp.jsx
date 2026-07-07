import EmailNotification from "./EmailNotification";
import React from "react";

export const TestComp = () => {

  const [showMessage, setShowMessage] = React.useState(false);
  const handleClick = () => {
    setShowMessage(true);
    setTimeout(() => {
      setShowMessage(false);
    }, 3000);
  }

  return (
    <div className="flex items-center justify-center">
      <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleClick}>
        Show Email Notification
      </button>
      {showMessage && 
      <div className="fixed items-center justify-center z-50 bg-[#ffffff]/40 backdrop:blur-sm">
      <EmailNotification success="true" />
      </div>}

    </div>
  )
};

export default TestComp;