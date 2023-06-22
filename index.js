function addingEventListener() {
    var input = document.getElementById('input');
    var eventListenerBound = false;
  
    function handleInputChange() {
      eventListenerBound = true;
    }
  
    // Add event listener
    input.addEventListener('change', handleInputChange);
  
    // Return whether the event listener is bound or not
    return eventListenerBound;
  }
  
