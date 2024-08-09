export const loadChat = (collectId = "66adb79ff4318a97acfb50cd") => {
    const scriptId = 'collect-script';
  
    // Check if the script is already added
    if (document.getElementById(scriptId)) {
      return;
    }
  
    // Assign the CollectId to the window object
    window.CollectId = collectId;
  
    // Create the script element
    const script = document.createElement('script');
    script.id = scriptId;
    script.defer = true;
    script.async = true;
    script.type = 'text/javascript';
    script.src = 'https://collectcdn.com/launcher.js';
    
    // Append the script to the head
    const head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(script);
  };
  