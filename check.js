q1m = 0;
q2m = 0;
q3m = 0;

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


    if (c1 == "Delhi") {
        q1m = 1;
    }


}

function q2Marks(rad) {

    q2m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "Cricket") {
        q2m = 1;
    }


}

function q3Marks(rad) {

    q3m = 0;
    var c1 = document.getElementById(rad.id).value;


    if (c1 == "MI") {
        q3m = 1;
    }


}






function sendEmail() {


    console.log("Hi");
    Email.send({
            Host: "smtp.gmail.com",
            Username: "piyushmohapatra1997@gmail.com",
            Password: "Baba@banu1997",
            To: "mohapatra.abhisek97@gmail.com",
            From: "piyushmohapatra1997@gmail.com",
            Subject: "Sending Email using javascript",
            Body: "Check Inbox.Marks Here!!",
            /*  Body: `"<p>Greetings!!!!</p><p>&nbsp;</p> <p>&nbsp;</p> 
              
              <p>Your student has scored a total of "`+tot+`" marks out of 3 marks"`,  */


        })
        .then(function(message) {
            alert("mail sent successfully");
        });
}


function resultDisplay() {

    total_marks = 0;
    total_marks = q1m + q2m + q3m;
    // alert("Marks obtained : "+total_marks);
    $('input[name="q1"]').prop('checked', false);
    $('input[name="q2"]').prop('checked', false);
    $('input[name="q3"]').prop('checked', false);

    alert("Marks obtained : " + total_marks);


    //sendEmail(total_marks);
    // sendEmail();
    // alert("Marks obtained : "+total_marks);


}

function validateEmail(form) {
    var mailString = /([a-zA-Z0-9._-])+@[a-zA-Z0-9.-]+.com{1}$/ // Checks for Email address of the form anything with atmost 1 . or _ and ending with .com

    var inputString = form.userEmail.value;

    if (!mailString.test(inputString)) {
        alert(" Kindly Enter valid Email Address ");
        form.userEmail.focus();
        form.userEmail.select();

        return false;
    } else {

        /*   sendEmail();  */

        //  alert("Thank you for the details..")

    }


    return true;


}