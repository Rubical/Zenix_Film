import axios from "axios";

export const downloadFileUrl = async (urlToDownload: string) => {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await axios.get(urlToDownload, {
        responseType: "blob",
      });
      if (response) {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `poster_${new Date().getTime()}.jpg`);
        document.body.appendChild(link);
        link.click();

        return resolve("Download successful.");
      } else {
        return reject("Failed to download");
      }
    } catch (e: unknown) {
      return reject(`Failed to download: ${e}`);
    }
  });
};
