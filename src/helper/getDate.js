export function getCurrentDate() {
  const today = new Date();
  const year = today.getFullYear();
  const month = (today.getMonth() + 1).toString().padStart(2, "0");
  const day = today.getDate().toString().padStart(2, "0");
  const currentDate = `${year}-${month}-${day}`;
  return currentDate;
}

export function getPreviousDate() {
  let currentDate = new Date();
  let threeDaysAgo = new Date(currentDate.getTime() - 3 * 24 * 60 * 60 * 1000);
  let year = threeDaysAgo.getFullYear();
  let month = String(threeDaysAgo.getMonth() + 1).padStart(2, "0");
  let day = String(threeDaysAgo.getDate()).padStart(2, "0");
  let formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
}
