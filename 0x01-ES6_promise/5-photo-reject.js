// 5-photo-reject.js
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    reject(new Error(`${fileName} cannot be processed`));
  });
}
