import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidePanel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={`fixed inset-0 z-50 overflow-hidden ${isOpen ? 'block' : 'hidden'}`}>
        <div className="absolute inset-0 overflow-hidden">
          <div
            className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            onClick={toggleSidePanel}
          ></div>
          <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="relative w-screen max-w-md">
              <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                <button
                  type="button"
                  className="rounded-md text-gray-300 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={toggleSidePanel}
                >
                  <span className="sr-only">Close panel</span>
                  <FaTimes className="h-6 w-6" />
                </button>
              </div>
              <div className="h-full bg-white p-8 overflow-y-auto">
                {/* Side Panel Content Goes Here */}
                <h2>Side Panel</h2>
                <p>This is the content of the side panel.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SidePanel;