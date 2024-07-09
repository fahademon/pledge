import React, { useState } from 'react';

const Settings: React.FC = () => {
  const [username, setUsername] = useState<string>('John Doe');
  const [email, setEmail] = useState<string>('johndoe@example.com');

  const handleSave = () => {
    // Logic to save the settings
    alert('Settings saved!');
  };

  return (
    <div className="page-content">
      <h2>Settings</h2>
      <form onSubmit={(e) => { e.preventDefault(); handleSave(); }}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Save Settings</button>
      </form>
    </div>
  );
}

export default Settings;
