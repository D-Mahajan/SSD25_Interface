var globalStudent;

$(document).ready(function() {

    var x = localStorage.getItem("email");
    $('#target').attr('href', x);

    $('#uemail').change(function() { // Link to linux container
        //var newurl = $('#pdf').val();

        // var newurl = globalStudent;
        var changeText = $("#uname").val().replace(/ /g, '');
        //   var newurl = "terminal/"+$('#uname').val()+"-"+$('#uemail').val();

        var newurl = "terminal/" + changeText + "-" + $('#uemail').val();

        $('#target').attr('href', newurl);
        localStorage.setItem("email", newurl);
        // window.open(newurl, '_blank');
        // console.log(newurl);
    });


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





function sendEmail() {



    Email.send({

            /*  Body: `"<p>Greetings!!!!</p><p>&nbsp;</p> <p>&nbsp;</p> 
              
              <p>Your student has scored a total of "`+tot+`" marks out of 3 marks"`,  */


        })
        .then(function(message) {
            alert("mail sent successfully");
        });
}



function validateEmail(form) {
    //var mailString = /([a-zA-Z0-9._-])+@[a-zA-Z0-9.-]+.com{1}$/ // Checks for Email address of the form anything with atmost 1 . or _ and ending with .com

    //var mailString = /[a-zA-Z0-9._%+-]+@*$/ // Checks for Email address of the form anything with atmost 1 . or _ and ending with .com
    var mailString = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/

    var inputString = form.userEmail.value;
    var name_student = form.userName.value;
    globalStudent = name_student;


    if (!mailString.test(inputString)) {
        swal({
            title: "Error",
            text: "Kindly Enter A Valid Email Address",
            // icon: "error",
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