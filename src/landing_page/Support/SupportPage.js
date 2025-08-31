import React from 'react';
import Chatbot from './Chatbot'; // Step 1: Import the Chatbot component

const SupportPage = () => {
  // Simple styling to center the chatbot on the page
  const pageStyles = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'calc(100vh - 70px)', // Adjust height to account for navbar/footer
    padding: '20px',
    fontFamily: 'Verdana, Geneva, Tahoma, sans-serif'
  };

  const containerStyles = {
    textAlign: 'center'
  };

  return (
    <div style={pageStyles}>
      <div style={containerStyles}>
        {/* You can add a title or other information here if you like */}
        <h1>Support Center</h1>
        <p>Have questions? Our AI-powered assistant is here to help.</p>
        
        {/* Step 2: Add the Chatbot component to your page */}
        <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center' }}>
          <Chatbot />
        </div>

      </div>
    </div>
  );
};

export default SupportPage;
