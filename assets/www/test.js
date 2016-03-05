
$('#testPage').bind('pageinit', function(event) {
	getExamList();
});

	function getExamList() {
		
		$.post("http://192.168.1.112/exam/android/student.php", {action: 'exam-list', id: '220'}, function(res) {
						if(res.status == 'success') {
						 navigator.notification.alert("Exam list", function() {});
							for (var i=0; i<res.exams.length; i++) {
							console.log(res.exams[i].exam_name);
							$('#leftPanel').append('<li>'+res.exams[0].exam_name+'"</li>');
							}
							$('#leftPanel').listview('refresh');
						}
					},"json");
		
	}