// console.log("First");

// setTimeout(() => {
//   console.log("Second");
// }, 3000);

// console.log("Third");

// const loginuser = (email, password, callback) => {
//   setTimeout(() => {
//     callback(email);
//   }, 2000);
// };

// const getuservideos = (email, callback) => {
//   setTimeout(() => {
//     callback(["Video1", "Video2", "Video2"]);
//   }, 2000);
// };

// loginuser("SAlMAN.COM", 1234, (email) => {
//   console.log("User logged in " + email);
//   getuservideos(email, (videos) => {
//     console.log(videos);
//   });
// });

// const promise = new Promise((resolve, reject) => {
//   let marks = 80;
//   if (marks >= 80) {
//     resolve("Grade A");
//   } else {
//     reject("Grade F");
//   }
// });

// promise
//   .then((Grade) => {
//     console.log("pass " + Grade);
//     return "Treat";
//   })
//   .then((treat) => {
//     console.log(treat);
//   })
//   .catch((Grade) => {
//     console.log("Failed " + Grade);
//   });

// const getmaymarks = () => {
//   return new Promise((resolve, reject) => {
//     let marks = 80;
//     if (marks >= 80) {
//       resolve("Grade A");
//     } else {
//       reject();
//     }
//   });
// };

// getmaymarks().then((Grade) => {
//   console.log("pass " + Grade);
// });

// const loginuserpromise = (email, password) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email === "SAlMAN.COM" && password === 1234) {
//         resolve(email);
//       } else {
//         reject("Wrong email or password");
//       }
//     }, 2000);
//   });
// };

// const getuservideos = (email) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (email) {
//         resolve(["Video1", "Video2", "Video2"]);
//       } else {
//         reject("Email not found");
//       }
//     }, 2000);
//   });
// };

// loginuserpromise("SAlMAN.COM", 1234)
//   .then((email) => {
//     console.log(email);
//     return getuservideos(email);
//   })
//   .then((videos) => {
//     console.log(videos);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const getuserdetail = async () => {
//   try {
//     let useremail = await loginuserpromise("SAlMAN.COM", 1234);
//     console.log(useremail);
//     let uservideos = await getuservideos(useremail);
//     console.log(uservideos);
//   } catch (error) {
//     console.log(error);
//   }
// };

// getuserdetail();


