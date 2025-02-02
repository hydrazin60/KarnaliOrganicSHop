// import DataURIParser from "datauri/parser.js";
// import path from "path";

// const parser = new DataURIParser();

// export const getDataUri = (file) => {
//   if (!file || !file.originalname || !file.buffer) {
//     console.log("Invalid file input:", file);
//     throw new Error("Invalid file input for DataURI conversion.");
//   }

//   if (!Buffer.isBuffer(file.buffer)) {
//     throw new Error("Invalid file buffer for DataURI conversion.");
//   }

//   const extName = path.extname(file.originalname).toString();
//   return parser.format(extName, file.buffer);
// };

import DataURIParser from "datauri/parser.js";
import path from "path";

const parser = new DataURIParser();

export const getDataUri = (file) => {
  if (!file || !file.buffer) {
    // ✅ Ensure buffer exists
    console.error("Invalid file input:", file);
    return null; // ✅ Return null instead of throwing error
  }
  const extName = path.extname(file.originalname).toString();
  return parser.format(extName, file.buffer);
};
