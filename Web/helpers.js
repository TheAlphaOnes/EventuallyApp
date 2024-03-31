export function formatTime(isoString) {
  const date = new Date(isoString);
  const hours = date.getHours();
  const minutes = date.getMinutes();

  let formattedHours = (hours % 12 || 12).toString().padStart(2, '0'); // Convert 24-hour format to 12-hour format
  const period = hours < 12 ? 'AM' : 'PM'; // Determine AM or PM

  // Format minutes with leading zero
  const formattedMinutes = minutes.toString().padStart(2, '0');

  return `${formattedHours}:${formattedMinutes} ${period}`;
}

export function formatYear(isoString) {
  const date = new Date(isoString);
  return date.getFullYear().toString();
}


export function formatDate(isoString) {
  const date = new Date(isoString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  return `${year}, ${day}/${month}`;
}
