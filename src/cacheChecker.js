// import packageJson from "./package.json";
import axios from "axios";
// const { DateTime } = require("luxon");

export async function cacheChecker() {
  // fetch("/meta.json")
  const res = await fetch("https://articole-smart.eu/search/config.php").then(
    (output) => console.log(output)
  );
  // const response = await res.json();
  return res;

  // return res.json();
  // .then((meta) => {
  //   const latestVersionDate = meta.buildDate;
  //   const currentVersionDate = packageJson.buildDate;

  //   const shouldForceRefresh = latestGreaterThanCurrent(
  //     latestVersionDate,
  //     currentVersionDate
  //   );

  //   console.log(`Current Build ${getBuildDate(currentVersionDate)}`, null);
  //   console.log(`Latest Build ${getBuildDate(latestVersionDate)}`, null);

  //   if (shouldForceRefresh) {
  //     refreshCacheAndReload();
  //   }
  // });
}
// const Cases = () => {
//   const axiosEndPoint = "https://articole-smart.eu/search/config.php";

//   const getData = async function cacheChecker() {
//     try {
//       const res = await axios.get(axiosEndPoint);
//       return res;
//     } catch (err) {
//       console.error(err);
//     }
//   };
//   return getData(axiosEndPoint);
// };

// Cases().then((output) => console.log(output));

// const refreshCacheAndReload = () => {
//   if (caches) {
//     // Service worker cache should be cleared with caches.delete()
//     caches.keys().then((names) => {
//       for (const name of names) {
//         caches.delete(name);
//       }
//     });
//   }
//   window.location.reload(true);
// };

// const latestGreaterThanCurrent = (latestDate, currentDate) => {
//   const latestBuildDateTime = DateTime.fromMillis(latestDate);
//   const currentBuildDateTime = DateTime.fromMillis(currentDate);

//   return latestBuildDateTime > currentBuildDateTime;
// };

// const getBuildDate = (epoch) => {
//   const buildDate = DateTime.fromMillis(epoch).toLocaleString(
//     DateTime.DATETIME_MED
//   );
//   return buildDate;
// };
