import React, { useState } from 'react';
import AddSpeaker from './components/AddSpeaker';

const App = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <button className='add-speaker-button' onClick={toggleSidebar}>Add Speaker</button>
      <AddSpeaker isOpen={isSidebarOpen} onClose={toggleSidebar} />
    </div>
  );
};

export default App;
