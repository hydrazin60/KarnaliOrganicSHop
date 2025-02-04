// import multer from "multer";

// const MAX_FILE_SIZES = {
//   image: 5 * 1024 * 1024, // 5 MB
//   video: 200 * 1024 * 1024, // 200 MB
// };

// const ALLOWED_MIME_TYPES = {
//   image: ["image/jpeg", "image/png", "image/jpg", "image/gif", "image/webp"], // Add more if needed
//   video: ["video/mp4", "video/webm", "video/ogg"],
// };

// const multerConfig = (type) => {
//   if (!ALLOWED_MIME_TYPES[type]) {
//     throw new Error("Invalid file type configuration.");
//   }
//   return multer({
//     storage: multer.memoryStorage(),
//     limits: { fileSize: MAX_FILE_SIZES[type] },
//     fileFilter: (req, file, cb) => {
//       if (ALLOWED_MIME_TYPES[type].includes(file.mimetype)) {
//         cb(null, true);
//       } else {
//         cb(
//           new Error(
//             `Invalid file type. Only ${ALLOWED_MIME_TYPES[type]
//               .map((t) => t.split("/")[1])
//               .join(", ")} files are allowed.`
//           ),
//           false
//         );
//       }
//     },
//   });
// };

// const UploadImage = multerConfig("image");
// const UploadVideo = multerConfig("video");

// const uploadErrorHandler = (err, req, res, next) => {
//   if (err instanceof multer.MulterError) {
//     res.status(400).json({ error: err.message });
//   } else if (err) {
//     res.status(400).json({ error: err.message });
//   } else {
//     next();
//   }
// };

// export { UploadImage, UploadVideo, uploadErrorHandler };

import multer from "multer";

const MAX_FILE_SIZE = 10 * 1024 * 1024;
const MAX_VIDEO_SIZE = 100 * 1024 * 1024;

const uploadMedia = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_VIDEO_SIZE }, // Max size applies only for videos
  fileFilter: (req, file, cb) => {
    const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    const allowedVideoTypes = ["video/mp4", "video/mov", "video/avi"];

    if (file.fieldname === "productImage") {
      if (allowedImageTypes.includes(file.mimetype)) {
        if (file.size > MAX_FILE_SIZE) {
          return cb(new Error("Image exceeds the 2MB size limit."), false);
        }
        cb(null, true);
      } else {
        cb(
          new Error(
            "Invalid image file type. Only JPEG, PNG, and JPG allowed."
          ),
          false
        );
      }
    } else if (file.fieldname === "productReviewVideo") {
      if (allowedVideoTypes.includes(file.mimetype)) {
        if (file.size > MAX_VIDEO_SIZE) {
          return cb(new Error("Video exceeds the 100MB size limit."), false);
        }
        cb(null, true);
      } else {
        cb(
          new Error("Invalid video file type. Only MP4, MOV, and AVI allowed."),
          false
        );
      }
    } else {
      cb(new Error("Invalid file field."), false);
    }
  },
});

// ✅ Single multer middleware handling both images and videos
const uploadImagesAndVideo = uploadMedia.fields([
  { name: "productImage", maxCount: 5 }, // Multiple images (max 5)
  { name: "productReviewVideo", maxCount: 1 }, // Single video
]);
const uploadProfileImage = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: MAX_FILE_SIZE }, // 10MB limit for profile images
  fileFilter: (req, file, cb) => {
    const allowedImageTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (allowedImageTypes.includes(file.mimetype)) {
      cb(null, true);
    } else {
      cb(
        new Error("Invalid file type. Only JPEG, PNG, and JPG allowed."),
        false
      );
    }
  },
}).single("profileImage"); // Use .single() for a single file upload

export { uploadImagesAndVideo  , uploadProfileImage };
