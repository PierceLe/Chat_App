export function formatDate(dateString) {
  const date = new Date(dateString);

  return date.toLocaleString('en-AU', {
    year: "numeric", 
    month: "long", 
    day: "numeric",
    hour: "2-digit", 
    minute: "2-digit", 
    second: "2-digit",
  });
}