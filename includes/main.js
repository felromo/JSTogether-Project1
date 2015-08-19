var answer_values;
var total_questions = 5;
var correct;

$(document).ready (function () {
  $('button.get-score').click (function () {
    answer_values = [];
    correct = 0;
    // pushes all incorrect & correct values to array
    $(':radio:checked').each (function () {
      // console.log($(this).val());
      answer_values.push($(this).val());
    });
    // count the correct values
    answer_values.forEach (function (value) {
    });
    answer_values.forEach (function (data) {
      if (data == "correct") correct++;
    });
    $('.display-score').text(correct + "/" + total_questions + " correct");
  });
});
