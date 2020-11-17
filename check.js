q1m = 0;
q2m = 0;
q3m = 0;
q4m = 0;
q5m = 0;
q6m = 0;
q7m = 0;
q8m = 0;
q9m = 0;
q10m = 0;

var globalStudent;

$(document).ready(function() {

    $(".btn-lg1").click(function() { // When Personal Background Button is clicked


        $(".check").empty();


        $(".btn-lg1").css({ // Change back ground Colour of Personal Background Button

            "background-color": "#fff7acee",
            "color": "black"

        });

        $(".btn-lg2").css({


            "background-color": "#ebdcdc",
            "color": "rgb(66, 51, 148)"

        });

        $(".btn-lg3").css({

            "background-color": "#ebdcdc",
            "color": "rgb(66, 51, 148)"

        });



        $(".check").append(`  <h3 class="extraHeader">Personal Background</h3><br>
    <ul class="bulletStyle">
       <li> Abhisek was born on 18th April, 1997 in Cuttack, Odisha, India.</li><br>
        <li> Abhisek has a family of 4 people including a twin sister .</li><br>
      <li>
        Abhisek was born and brought up in Kanpur, Uttar Pradesh.
          </li><br>
          <li>Abhisek completed his Matriculation and Senior Secondary Education from Uttar Pradesh only.</li><br> 
          <li>Abhisek completed his <b>Bachelor's </b>degree from College of Engineering and Technology, Bhubaneswar, Odisha in the field of <b>Computer Science and Engineering</b></li><br>  
          <li> Abhisek is currently pursuing his <b>Master's </b>from International Institute of Information Technology, Hyderabad in the field of <b>Computer Science and Engineering</li>
            </ul>
    
    `);



        $(".output").css({

            "visibility": "visible"

        });



    });



    $(".btn-lg2").click(function() { // When Hobbies and Interests Button is clicked


        $(".check").empty();

        $(".btn-lg1").css({ // Change back ground Colour of Hobbies and Interests Button

            "background-color": "#ebdcdc",
            "color": "rgb(66, 51, 148)"

        });


        $(".btn-lg2").css({


            "background-color": "#fff7acee",
            "color": "black"

        });

        $(".btn-lg3").css({

            "background-color": "#ebdcdc",
            "color": "rgb(66, 51, 148)"

        });



        $(".check").append(`    <h3 class="extraHeader">Hobbies and Interests</h3><br>
    <ul class="bulletStyle">
       <li> Abhisek is fond of reading novels and interesting articles. It is one of the things which helps him deal with stress.</li><br>
        <li> Abhisek also takes keen interest in Sports. Chess is one of the games which helps him develop solutions in non-trivial circumstances.</li><br>
      <li>
        is also fond of Outdoor games like Cricket, Football and Badminton. He feels Sports help him in developing greater efficiency, both mentally and physically. 
          </li>
      </ul>
    
    `);



        $(".output").css({

            "visibility": "visible"

        });


    });



    $(".btn-lg3").click(function() { // When Contact Details Button is clicked


        $(".check").empty();

        $(".btn-lg1").css({ // Change back ground Colour of Contact Details Button
            "background-color": "#ebdcdc",
            "color": "rgb(66, 51, 148)"

        });


        $(".btn-lg2").css({

            "background-color": "#ebdcdc",
            "color": "rgb(66, 51, 148)"


        });

        $(".btn-lg3").css({

            "background-color": "#fff7acee",
            "color": "black"

        });



        $(".check").append(`  <h3 class="extraHeader">Contact Details</h3><br><ul class="bulletStyle">
    <li> <b>Phone Number : </b>+91 8658082358</li><br>
     <li> <b>Email Id : </b>abhisek.mohapatra@students.iiit.ac.in</li><br>
   <li>
     <b>Personal Email Id : </b>mohapatra.abhisek97@gmail.com
       </li><br>
       <li><b>Contact Address : </b>A/40, HIG Housing Board Colony, Baramunda, Bhubaneswar, Odisha-751003</li><br> 
      

     </ul>
    
    `);



        $(".output").css({

            "visibility": "visible"

        });


    });



}); // End of Jquery main function


function q1Marks(rad) {

    q1m = 0;

    var c1 = document.getElementById(rad.id).value;

    // alert(c1);


    if (c1 == "Bat") {
        q1m = 1;
    }


}

function q2Marks(rad) {

    q2m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "echo ${array[@]}") {
        q2m = 1;
    }


}

function q3Marks(rad) {

    q3m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "function test(){ Commands }") {
        q3m = 1;
    }


}

function q4Marks(rad) {

    q4m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "read command") {
        q4m = 1;
    }


}

function q5Marks(rad) {

    q5m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "Disp command") {
        q5m = 1;
    }



}

function q6Marks(rad) {

    q6m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "Display of files and folders, present in the folder where you are") {
        q6m = 1;
    }

}

function q7Marks(rad) {

    q7m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "rm filename") {
        q7m = 1;
    }

}

function q8Marks(rad) {

    q8m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "Its mainly used for showing up all parameters. This show all parameter values passed in shell script.") {
        q8m = 1;
    }

}

function q9Marks(rad) {

    q9m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "chmod +x") {
        q9m = 1;
    }

}

function q10Marks(rad) {

    q10m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "2") {
        q10m = 1;
    }

}






function sendEmail() {



    Email.send({

            /*  Body: `"<p>Greetings!!!!</p><p>&nbsp;</p> <p>&nbsp;</p> 
              
              <p>Your student has scored a total of "`+tot+`" marks out of 3 marks"`,  */


        })
        .then(function(message) {
            alert("mail sent successfully");
        });
}


function resultDisplay() {
    console.log("Hi");

    total_marks = 0;
    total_marks = q1m + q2m + q3m + q4m + q5m + q6m + q7m + q8m + q9m + q10m;
    // alert("Marks obtained : "+total_marks);
    $('input[name="q1"]').prop('checked', false);
    $('input[name="q2"]').prop('checked', false);
    $('input[name="q3"]').prop('checked', false);
    $('input[name="q4"]').prop('checked', false);
    $('input[name="q5"]').prop('checked', false);
    $('input[name="q6"]').prop('checked', false);
    $('input[name="q7"]').prop('checked', false);
    $('input[name="q8"]').prop('checked', false);
    $('input[name="q9"]').prop('checked', false);
    $('input[name="q10"]').prop('checked', false);

    swal({
        title: "Total Marks obtained : ",
        text: total_marks + "/10",
        icon: "info",
    });

    //alert("Total Marks obtained : " + total_marks);
    q1m = 0;
    q2m = 0;
    q3m = 0;
    q4m = 0;
    q5m = 0;
    q6m = 0;
    q7m = 0;
    q8m = 0;
    q9m = 0;
    q10m = 0;


    //sendEmail(total_marks);
    // sendEmail();
    // alert("Marks obtained : "+total_marks);


}

function validateEmail(form) {
    var mailString = /([a-zA-Z0-9._-])+@[a-zA-Z0-9.-]+.com{1}$/ // Checks for Email address of the form anything with atmost 1 . or _ and ending with .com

    var inputString = form.userEmail.value;
    var name_student = form.userName.value;
    globalStudent = name_student;


    if (!mailString.test(inputString)) {
        swal({
            title: "Error",
            text: "Kindly Enter A Valid Email Address",
            icon: "error",
        });
        // alert(" Kindly Enter valid Email Address ");
        form.userEmail.focus();
        form.userEmail.select();

        return false;
    } else {

        /*   sendEmail();  */

        //  alert("Thank you for the details..")

    }


    return true;


}