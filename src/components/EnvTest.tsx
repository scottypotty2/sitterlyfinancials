import React from 'react';

const EnvTest: React.FC = () => {
  const envVars = {
    VITE_NEWSAPI_KEY: import.meta.env.VITE_NEWSAPI_KEY,
    VITE_GOOGLE_CALENDAR_API_KEY: import.meta.env.VITE_GOOGLE_CALENDAR_API_KEY,
    NODE_ENV: import.meta.env.NODE_ENV,
    MODE: import.meta.env.MODE,
    PROD: import.meta.env.PROD,
    DEV: import.meta.env.DEV
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: '10px', 
      right: '10px', 
      background: 'rgba(0,0,0,0.8)', 
      color: 'white', 
      padding: '10px', 
      fontSize: '12px',
      zIndex: 9999,
      maxWidth: '300px'
    }}>
      <h4>Environment Variables Debug:</h4>
      {Object.entries(envVars).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value ? '✅ Set' : '❌ Missing'}
          {value && <span style={{fontSize: '10px'}}> ({value.substring(0, 10)}...)</span>}
        </div>
      ))}
    </div>
  );
};

export default EnvTest;
