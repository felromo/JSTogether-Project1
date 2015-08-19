var answer_values = [];
var total_questions = 5;
var correct = 0;

$(document).ready (function () {
  $('button.get-score').click (function () {
    // pushes all incorrect & correct values to array
    $(':radio:checked').each (function () {
      // console.log($(this).val());
      answer_values.push($(this).val());
    });
    // count the correct values
    answer_values.forEach (function (value) {
      console.log(value);
    });
    answer_values.forEach (function (data) {
      if (data == "correct") correct++;
    });
    console.log(correct);
    $('.display-score').text(correct + "/" + total_questions + " correct");
  });
});
