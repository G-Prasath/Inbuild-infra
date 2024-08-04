import { useEffect } from 'react';

export const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.defer = true;
    script.async = true;
    script.src = "https://collectcdn.com/launcher.js";
    script.setAttribute('type', 'text/javascript');
    
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return null;
};

