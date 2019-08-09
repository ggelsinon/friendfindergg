console.log("connected")
// https://harvesthq.github.io/chosen/
$("#submit").on("click", function (event) {
    event.preventDefault();
    // users answers variable
    var userAnswers = {
        name: $("#name").val().trim(),
        photo: $("#photo").val(),
        scores: [
            $("#q1").val(),
            $("#q2").val(),
            $("#q3").val(),
            $("#q4").val(),
            $("#q5").val(),
            $("#q6").val(),
            $("#q7").val(),
            $("#q8").val(),
            $("#q9").val(),
            $("#q10").val(),
        ]
    };
    //post data to api
    $.post("/api/friends", userAnswers, function (res) {
        console.log(res)

        $("#matchname").text(res.name);
        $("#matchimg").attr("scr", res.photo);

        //present a modal of match ????
        // https://stackoverflow.com/questions/13183630/how-to-open-a-bootstrap-modal-window-using-jquery

        $('#myModal').modal('toggle');
        // $('#myModal').modal('show');
        // $('#myModal').modal('hide');

        // $('#myModal').modal({
        //     show: 'true'
        // });


        // var data = $(this).serializeObject();
        // json_data = JSON.stringify(data);
        // $("#results").text(json_data);
        // $(".modal-body").text(json_data);

        // // $("#results").text(data);

        // ev.preventDefault();
    });
});



// 6. Determine the user's most compatible friend using the following as a guide:

//    * Convert each user's results into a simple array of numbers (ex: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`).
//    * With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the `totalDifference`.
//      * Example:
//        * User 1: `[5, 1, 4, 4, 5, 1, 2, 5, 4, 1]`
//        * User 2: `[3, 2, 6, 4, 5, 1, 2, 5, 4, 1]`
//        * Total Difference: **2 + 1 + 2 =** **_5_**
//    * Remember to use the absolute value of the differences. Put another way: no negative solutions! Your app should calculate both `5-3` and `3-5` as `2`, and so on.
//    * The closest match will be the user with the least amount of difference.

// 7. Once you've found the current user's most compatible friend, display the result as a modal pop-up.
//    * The modal should display both the name and picture of the closest match.