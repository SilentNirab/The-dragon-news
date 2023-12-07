export function getCurrentDate() {
    const currentDate = new Date();
  
    const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    const day = daysOfWeek[currentDate.getDay()];
    const month = months[currentDate.getMonth()];
    const numericDay = currentDate.getDate();
    const year = currentDate.getFullYear();
  
    return `${day}, ${month} ${numericDay}, ${year}`;
  }
  
//   // Example usage:
//   const formattedDate = getCurrentDate();
//   console.log(`Current Formatted Date: ${formattedDate}`);
  