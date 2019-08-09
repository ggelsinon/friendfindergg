var path = require("path");

module.exports = function(app) {

app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
    // res.sendFile(path.join(__dirname, "/../public/home.html"));
    // making the survey page the default for now. once it's working maybe we will add a nice nice home page
  });

};