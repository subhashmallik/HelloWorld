function init() {
   document.addEventListener("deviceready", deviceReady, true);
   delete init;
}
function deviceReady() {
console.log("deviceReady");
		console.log("Page show");
		//initialize the quiz
		$("#regForm").on("submit",function(e) {
          //disable the button so we can't resubmit while we wait
           $("#submitButton",this).attr("disabled","disabled");
            var n = $("#name", this).val();
            var u = $("#email", this).val();
            var p = $("#password", this).val();
            var ph = $("#phonenumber", this).val();
            var i = $("#institution", this).val();
            if( n != '' && u != '' && p != '' && ph != '' && i != '') {
                 $.post("http://192.168.1.112/exam/android/student.php", {action: 'register', name:n, email:u, password:p, phone:ph, institution:i}, function               (res) {
                    if(res.status == 'success') {
                       navigator.notification.alert("Your registeration successful", function() {});
                        $.mobile.changePage("Login.html");
                    } else {
                           navigator.notification.alert("Your registeration failed", function() {});
                      }
                    $("#submitButton").removeAttr("disabled");
                },"json");
            } else{
                navigator.notification.alert("Please enter all fields", function() {});
				  $("#submitButton").removeAttr("disabled");
              }
        return false;
         });
}