export default function getPrettyDate(date: Date | undefined) {
  if (date) {
    const day = date.getDate();
    const month = date.toLocaleString("en", { month: "short" });
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  } else return null;
}
