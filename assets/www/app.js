

/* global $,document,console,quizMaster */
$(document).ready(function() {
	
	$(document).on("pageshow", "#quizPage", function() {
		console.log("Page show");
		//initialize the quiz
		quizMaster.execute("http://192.168.1.112/exam/android/student.php?action=get-exam&exam_uid=e&id=220", ".quizdisplay", function(result) {
			console.log("SUCESS CB");
			console.dir(result);	
		});
	});

});