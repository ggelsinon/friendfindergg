var friends = require("../data/friends");


module.exports = function (app) {

  app.get("/api/friends", function (req, res) {
    res.json(friends);
  });

  app.post("/api/friends", function (req, res) {

    //figure out (and update) the closest match in this app.post
    var mostLike = {
      name: "",
      img: "",
      diff: Infinity
    };

    //parse user info
    var userResults = req.body;
    var userScores = userResults.scores;

    // calculate total difference between user's scores and the scores of each friend
  
    //for loop to compare friends with user
    for (var i = 0; i < friends.length; i++) {
      var totalDiff = 0;
      // first by looping through the friends

      // then by looping through their scores
      for (var j = 0; j < friends[i].scores.length; j++) {

        var currentMatchScore = friends[i].scores[j];
        var currentUserScore = userScores[j];
      }
      //calc the difference between each individual score and calculate the total difference var
      totalDiff += Math.abs(parseInt
        (currentUserScore) - parseInt(currentMatchScore));

      // then like coders bay comparison of current bid with high bid compare current friend match to see which is the winner
      if (totalDiff <= mostLike.diff) {
        mostLike.name = friends[i].name;
        mostLike.photo = friends[i].photo;
        mostLike.diff = totalDiff;
      }

      // update results

    }
    friends.push(userResults);
    console.log(mostLike)
    // return json of friend matches
    res.json(mostLike);
  });

};