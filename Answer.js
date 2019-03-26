let emails = [
  "aymanfaisal.cs+300@gmail.com",
  "aymanfaisal.cs+300@gmail.com",
  "aymanmfaisal.cs+300@gmail.com"
];
const emailfilter = emails => {
  let newEmail = [];
  for (email of emails) {
    email = email.split("@")[0];
    email = email.split("+")[0];
    email = email.split("");

    email = email.filter(lit => {
      if (lit === ".") return false;
      else return true;
    });
    if (!newEmail.includes(email.join(""))) {
      newEmail.push(email.join(""));
    }
  }
  return newEmail;
};
