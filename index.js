const emailLog = require("./email_log.json");

function countUniqueEmails(emailFile) {
  // do work here

  return emailFile.emails.reduce(function(emailList, addy) {
    if (addy.email in emailList) {
      emailList[addy.email]++;
    } else {
      emailList[addy.email] = 1;
    }
    return emailList;
  }, {});
}

console.log(countUniqueEmails(emailLog));
