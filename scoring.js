// After loading the DOM, execute the processing in function()
$(document).ready(function(){
	var x = 0;
    // Create a logic that gets the input values of [Japanese score, English score, math score, science score, social score] and gives the total score and average score.
    function score_indicate(){
      // In the variable "subject_points"
      // Substitute the array of [Japanese score, English score, math score, science score, social score].
      let subject_points = [Number($('#national_language').val()),
                            Number($('#english').val()),
                            Number($('#mathematics').val()),
                            Number($('#science').val()),
                            Number($('#society').val())
                            ];
      // In the variable "sum"
      // Add [Japanese score, English score, math score, science score, social score] respectively.
      // Hint! Take out the arrays one by one and add them.
      let sum = subject_points[0];
      sum = sum + subject_points[1];
      sum = sum + subject_points[2];
      sum = sum + subject_points[3];
      sum = sum + subject_points[4];
      // Output the variable "sum" (total score) to "total score:" (id = "sum_indicate").
      $("#sum_indicate").text(sum);
      // In the variable "average"
      // Calculate the average value and substitute. (Total score of the number you want to average (sum) / Total number)
      // Hint! Use the length method to find the total number. (length method: Method to get the length of the string, the number of elements in the array, etc.)
      average = sum/subject_points.length;
      $("#average_indicate").text(average);
    };

    // Get the average score and create the logic to rank ("A", "B", "C", "D") from the obtained average score.
    function get_achievement(){
      // In the variable "averageIndicate"
      // Get the average score from id = "average_indicate" on HTML and substitute it.
      let averageIndicate = $("#average_indicate").text();
      console.log(averageIndicate)
      // If "averageIndicate" is 80 or higher, "A" is returned.
      if ( averageIndicate >= 80){
        return "A";
        // If "averageIndicate" is 60 or more, "B" is returned.
      } else if ( averageIndicate >= 60) {
        return "B";
        // If "averageIndicate" is 40 or more, "C" is returned.
        // If "averageIndicate" is any other score, "D" is returned.
      } else if (averageIndicate >=40) {
        return "C";
      }else{
        return "D";
      }
    };

    // Get the score of each subject and make the logic to judge pass / fail from the obtained score.
    function get_pass_or_failure(){
      let subject_points = [Number($('#national_language').val()),
                            Number($('#english').val()),
                            Number($('#mathematics').val()),
                            Number($('#science').val()),
                            Number($('#society').val())
                            ];
      // Substitute the number of subjects entered in the variable "number".
      let number = subject_points.length;
      // Assign "pass" to the variable "judge".
      let judge = "Pass";
      // If the score of each subject entered is lower than 60 points, "Judge" is reassigned to the variable "judge" and "judge" is returned.
      // Hint! Try searching for "javascript score pass / fail logic".
      for (let i=0;i<subject_points.length ; i++){
        if (subject_points[i]< 60) {
          judge ="Fail";
          break;
        } 
      }
      pass_or_failure = judge ; 
      return pass_or_failure;
    };

    // Create the final judge logic.
    function judgement(){
		
      // Assign "return value of get_achievement ()" to the variable "achievement".
      let achievement = get_achievement();
      // Substitute "return value of get_pass_or_failure ()" for variable "pass_or_failure".
      let pass_or_failure = get_pass_or_failure();
	  
		if (x < 1) {
		  x = x + 1;
		  //alert("Your grade is" + achievement + " and " + pass_or_failure)
		//} else {
		  // 「Result」(id="alert-indicate) press the button「Your grade is${achievement}で${pass_or_failure}です」 is the output process.
		  $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is ${achievement} and ${pass_or_failure}</label>`);
		}
      
    };

    // This process fires "function score_indicate ()" when any of the scores in [Japanese score, English score, math score, science score, social score] is changed.
    $('#national_language, #english, #mathematics, #science, #society').change(function() {
      score_indicate();
    });

    // When you press the "Rank" (id = "evaluation") button, "get_achievement ()" is output.
    $('#btn-evaluation').click(function() {
      $("#evaluation").text(get_achievement());
    });


    // When you press the "judgment" (id = "btn-judge") button, "function get_pass_or_failure ()" is output.
      $('#btn-judge').click(function() {
      $("#judge").text(get_pass_or_failure());
    });

    // When you press the "Final Judgment" (id = "btn-declaration") button, "function judgment ()" is output.
    //$('#btn-declaration').click(function() {
      ////$("#alert-indicate").text(judgement()); 
      //judgement();
    //});
    $('#btn-declaration').click(function() {
      //$("#alert-indicate").text(judgement()); 
      judgement();
    });
  });
  // The description of js written here is just a template prepared as a hint, so if you want to implement it without following the description written, you can implement it as you like. assignment requirements are met and the quality of the code is determined to be at a certain level.
  // 