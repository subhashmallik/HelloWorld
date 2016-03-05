function init() {
	document.addEventListener("deviceready", deviceReady, true);
	delete init;
}

function deviceReady() {
	    console.log("deviceReady");
		checkPreAuth();
		//handleLogin();
		// //$("#loginForm").on("submit",handleLogin);
	  // // $.mobile.changePage("#loginPage");
	// // $("#regButton").on("click", function(event){
     // // function changeActivity() {
	  // navigator.notification.alert("change activity", function() {});
    // // window.MyCls.changeActivity();
    // // }
// // });
}	

function checkPreAuth() {
	console.log("checkPreAuth");
    var form = $("#loginForm");
    if(window.localStorage["email"] != undefined && window.localStorage["password"] != undefined) {
        $("#email", form).val(window.localStorage["email"]);
        $("#password", form).val(window.localStorage["password"]);
        handleLogin();
    }else{
		handleLogin();
		}
}

function handleLogin() {
$("#loginForm").on("submit",function(e) {
    console.log("login from submit");
    var form = $("#loginForm");    
    //disable the button so we can't resubmit while we wait
    $("#submitButton",form).attr("disabled","disabled");
    var u = $("#email", form).val();
    var p = $("#password", form).val();
    if(u != '' && p!= '') {
          $.post("http://192.168.1.112/exam/android/student.php", {action: 'login', email:u, password:p,}, function(res) {
                    if(res.status == 'success') {
                       //store
                window.localStorage["email"] = u;
                window.localStorage["password"] = p;
                $.mobile.changePage("Dashboard.html");
            } else {
                navigator.notification.alert("Your login failed", function() {});
            }
         $("#submitButton").removeAttr("disabled");
        },"json");
    } else {
        navigator.notification.alert("You must enter a username and password", function() {});
        $("#submitButton").removeAttr("disabled");
    }
    return false;
	});
	
}
/**$('#testPage').bind('pageinit', function(event) {
	getExamList();
});

	function getExamList() {
		
		$.post("http://192.168.1.112/exam/android/student.php", {action: 'exam-list', id: '220'}, function(res) {
						if(res.status == 'success') {
						 navigator.notification.alert("Exam list", function() {});
							for (var i=0; len=res.exams.length; i < len; i++) {
							console.log(res.exams[i].exam_name);
							$('#leftPanel').append('<li>'+res.exams[0].exam_name+'"</li>');
							}
							$('#leftPanel').listview('refresh');
						}
					},"json");
		
	}*/

	
