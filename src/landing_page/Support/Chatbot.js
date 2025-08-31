import React, { useState, useEffect, useRef } from 'react';

// --- Helper UI Components ---
const SendIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.01 21L23 12L2.01 3L2 10L17 12L2 14L2.01 21Z" fill="white"/>
  </svg>
);

const BotIcon = () => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="40" height="40" rx="8" fill="#1E88E5"/>
        <path d="M29.5 14C29.5 12.62 28.38 11.5 27 11.5H13C11.62 11.5 10.5 12.62 10.5 14V22C10.5 23.38 11.62 24.5 13 24.5H25L30.5 28.5V14.5C30.5 14.2 29.8 14 29.5 14Z" fill="white" fillOpacity="0.8"/>
        <circle cx="15.5" cy="18.5" r="1.5" fill="#1E88E5"/>
        <circle cx="20" cy="18.5" r="1.5" fill="#1E88E5"/>
        <circle cx="24.5" cy="18.5" r="1.5" fill="#1E88E5"/>
    </svg>
);


// --- Main Chatbot Component ---
const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      text: "Hello! I'm AlphaBot, your financial assistant. How can I help you with the stock market or AlphaTrade today?",
      isUser: false,
    },
  ]);
  const [userInput, setUserInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messageEndRef = useRef(null);

  // Automatically scroll to the latest message
  useEffect(() => {
    messageEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isLoading]);

  // This is the "brain" of our chatbot.
  // The backend will send this to the Gemini API.
  const systemPrompt = `
    You are "AlphaBot," an expert financial assistant for a website called "AlphaTrade."
    Your tone is professional, helpful, and encouraging.
    Your primary functions are:
    1.  **Answer Stock Market Questions:** Use your real-time search capabilities to provide the latest information on stocks, market trends, financial news, and definitions of financial terms.
    2.  **Answer Website-Specific Questions:** Answer questions about AlphaTrade. AlphaTrade is a modern, user-friendly stock trading platform. Its key features include: real-time market data, zero-commission trades on most stocks, a customizable dashboard, advanced charting tools, and a secure, fast execution of trades. The platform is designed for both beginners and experienced traders.
    3.  **Guidance:** If a question is too complex or involves personal financial advice, you must decline and advise the user to consult a certified financial advisor. You are an informational tool, not a registered advisor.
    Keep your answers concise and easy to understand.
  `;

  const handleSendMessage = async () => {
    if (!userInput.trim()) return;

    const newUserMessage = { text: userInput, isUser: true };
    setMessages(prevMessages => [...prevMessages, newUserMessage]);
    setIsLoading(true);
    setUserInput('');

    try {
      // This URL points to YOUR backend, not Google's API.
      const apiUrl = 'http://localhost:3002/ask-chatbot';

      const geminiPayload = {
        contents: [
            ...messages.map(msg => ({
                role: msg.isUser ? 'user' : 'model',
                parts: [{ text: msg.text }]
            })),
            {
                role: 'user',
                parts: [{ text: userInput }]
            }
        ],
        systemInstruction: {
          parts: [{ text: systemPrompt }]
        },
        tools: [{ "google_search": {} }],
      };
      
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // --- FIX: The geminiPayload is now correctly wrapped in an object with a "payload" key ---
        body: JSON.stringify({ payload: geminiPayload })
      });

      if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || `API request failed with status ${response.status}`);
      }
      
      const result = await response.json();
      const botResponseText = result.candidates?.[0]?.content?.parts?.[0]?.text;

      if (botResponseText) {
        const newBotMessage = { text: botResponseText, isUser: false };
        setMessages(prevMessages => [...prevMessages, newBotMessage]);
      } else {
        throw new Error("Received an empty or invalid response from the API.");
      }

    } catch (error) {
      console.error("Chatbot API error:", error);
      const errorMessage = { text: `I'm sorry, I'm having trouble connecting right now. Please try again later.`, isUser: false };
      setMessages(prevMessages => [...prevMessages, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter' && !isLoading) {
      handleSendMessage();
    }
  };

  return (
    <div style={styles.chatbotContainer}>
      <div style={styles.header}>
        <h2 style={styles.headerTitle}>AlphaBot Assistant</h2>
        <p style={styles.headerSubtitle}>Ask me about stocks or our platform</p>
      </div>
      <div style={styles.messageArea}>
        {messages.map((msg, index) => (
          <div key={index} style={msg.isUser ? styles.userMessageContainer : styles.botMessageContainer}>
             {!msg.isUser && <div style={styles.botAvatar}><BotIcon/></div>}
             <div style={msg.isUser ? styles.userMessage : styles.botMessage}>
                {msg.text}
             </div>
          </div>
        ))}
        {isLoading && (
            <div style={styles.botMessageContainer}>
                 <div style={styles.botAvatar}><BotIcon/></div>
                 <div style={{...styles.botMessage, ...styles.loadingBubble}}>
                    <span style={{...styles.loadingDot, ...styles.loadingDot1}}></span>
                    <span style={{...styles.loadingDot, ...styles.loadingDot2}}></span>
                    <span style={{...styles.loadingDot, ...styles.loadingDot3}}></span>
                 </div>
            </div>
        )}
        <div ref={messageEndRef} />
      </div>
      <div style={styles.inputArea}>
        <input
          type="text"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Ask a question..."
          style={styles.input}
          disabled={isLoading}
        />
        <button onClick={handleSendMessage} style={styles.sendButton} disabled={isLoading}>
          <SendIcon />
        </button>
      </div>
       <style>{`
          @keyframes loading-bubble {
            0%, 80%, 100% { transform: scale(0); }
            40% { transform: scale(1.0); }
          }
        `}</style>
    </div>
  );
};

// --- STYLING (No changes needed) ---
const styles = {
    chatbotContainer: {
        width: '1000px',
        height: '500px',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        fontFamily: 'Verdana, Geneva, Tahoma, sans-serif',
        overflow: 'hidden',
        backgroundColor: '#f9f9f9'
    },
    header: {
        backgroundColor: '#1E88E5',
        color: 'white',
        padding: '16px 20px',
        borderTopLeftRadius: '12px',
        borderTopRightRadius: '12px',
        boxShadow: '0 2px 5px rgba(0,0,0,0.1)'
    },
    headerTitle: { margin: 0, fontSize: '1.2rem' },
    headerSubtitle: { margin: '4px 0 0', fontSize: '0.8rem', opacity: '0.9' },
    messageArea: { flexGrow: 1, padding: '20px', overflowY: 'auto' },
    botMessageContainer: { display: 'flex', alignItems: 'flex-end', marginBottom: '12px', maxWidth: '85%' },
    botAvatar: { marginRight: '10px', flexShrink: 0 },
    botMessage: { backgroundColor: 'white', padding: '12px', borderRadius: '18px 18px 18px 0', fontSize: '0.95rem', lineHeight: '1.4', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
    userMessageContainer: { display: 'flex', justifyContent: 'flex-end', marginBottom: '12px' },
    userMessage: { backgroundColor: '#1E88E5', color: 'white', padding: '12px', borderRadius: '18px 18px 0 18px', fontSize: '0.95rem', lineHeight: '1.4', maxWidth: '85%', boxShadow: '0 1px 2px rgba(0,0,0,0.05)' },
    inputArea: { display: 'flex', padding: '10px', borderTop: '1px solid #e0e0e0', backgroundColor: 'white' },
    input: { flexGrow: 1, border: 'none', padding: '12px', borderRadius: '20px', backgroundColor: '#f0f0f0', fontSize: '1rem', outline: 'none', marginRight: '10px' },
    sendButton: { border: 'none', backgroundColor: '#1E88E5', borderRadius: '50%', width: '44px', height: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' },
    loadingBubble: { display: 'flex', alignItems: 'center', padding: '15px' },
    loadingDot: { width: '8px', height: '8px', margin: '0 2px', backgroundColor: '#90a4ae', borderRadius: '50%', display: 'inline-block', animation: 'loading-bubble 1.4s infinite ease-in-out both' },
    loadingDot1: { animationDelay: '-0.32s' },
    loadingDot2: { animationDelay: '-0.16s' },
    loadingDot3: {}
};

export default Chatbot;


