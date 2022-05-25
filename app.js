const profileDataArgs = process.argv.slice(2);
const name = profileDataArgs[0];
const github = profileDataArgs[1];

const generatePage = (userName, githubName) => `Name: ${userName}, Gitbub: ${githubName}`;
console.log(generatePage(name, github));



// const printProfileData = profileDataArr => {
//   // This...
//   for (let i = 0; i < profileDataArr.length; i += 1) {
//     console.log(profileDataArr[i]);
//   }

//   console.log('================');

//   // Is the same as this...
//   profileDataArr.forEach(profileItem => console.log(profileItem));
// };

// printProfileData(profileDataArgs);