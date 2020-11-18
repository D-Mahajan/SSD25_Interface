$(document).ready(function() { // When quiz page is loaded   Nov 10 6:15 pm

    // Random Number generartion //   Math.floor(Math.random() * 10);

    //function getRndInteger(min, max) {
    //return Math.floor(Math.random() * (max - min) ) + min;
    //}



    //   FISCHER YAKES SHUFFLE ALGO




    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    // Used like so

    var j = 0;
    var qArr = [];

    for (j = 0; j < 15; j++) {
        qArr.push(j);
    }

    // var arr = [2, 11, 37, 42];
    shuffle(qArr);
    console.log(qArr);





    //console.log("Hi" + $('input[name=q' + qArr[0] + ']:checked').length);



    /* function checkResult() {

         // $("input[name=rate]:checked").val()

         /*  
         if ($('input[name=gender]:checked').length > 0) {
     // do something here
          }
         */
    /*    var totalMarks = 0;
        var recordedAns;
        var qContent1;
        var k = 0;
        for (k = 0; k < qArr.length; k++) {
            if ($('input[name=q' + qArr[k] + ']:checked').length > 0) {
                // do something here
                recordedAns = $('input[name=q' + qArr[k] + ']:checked').val();
                qContent1 = Questions.qArray[qArr[k]];
                if (recordedAns == qContent1.correctAns) {
                    totalMarks++;
                }

            }


        }

        alert("Total Marks obtained are: " + totalMarks);



    }  */




    var i = 0;


    for (j = 0; j < 10; j++) {

        var qContent = Questions.qArray[qArr[j]];

        // console.log("Hello");

        var qElement = document.createElement("div");

        qElement.setAttribute("id", "qq");

        var q = qContent.question;

        $("#qq").addClass("qheader");
        qElement.innerHTML = (j + 1) + ") " + q;

        $(".qheader").append('</div>');

        $("#formQuiz").append(qElement);


        var options = ['a)', 'b)', 'c)', 'd)'];
        for (i = 1; i <= 4; i++) {
            //  var choice = "selectedQuestion.choice" + j;
            var txt = "qContent.option" + i;
            //   console.log(eval(txt));
            var radioBtn = $('<input type="radio" name="q' + qArr[j] + '" id="q' + qArr[j] + i + '" value="' + eval(txt) + '">');
            //  radioBtn.text = eval("qContent.option" + i);
            // $("#q1" + i).text("Hey");

            //  console.log("name=q" + qArr[j]);

            radioBtn.appendTo('#formQuiz');
            $('#formQuiz').append('<label>' + options[i - 1] + ' ' + eval(txt) + ' </label>');
            $("#formQuiz").append('<br>');
            //  console.log("#q1" + i);
            // console.log(eval(txt));
            $("label").css("font-weight", "normal");

            //  console.log("Checked inside loop are:" + $('input[id="q01"]').val());
        }
        $("#formQuiz").append('<br>');
        //  console.log(eval("qContent.option" + 1));

        //   $(".btn-lg1").click(function() { 

    }


    // console.log("Val is" + $('input[name=q' + 0 + ']:checked').val());

    $("#checkAns").click(function() {


        //  console.log("Checked are:" + $('input[name="q' + 0 + ']').val());
        //  console.log("Checked are:" + $("#q01").val());


        var totalMarks = 0;
        var recordedAns;
        var qContent1;
        var k = 0;
        for (k = 0; k < qArr.length; k++) {
            //  console.log(qArr[k]);
            // console.log("Hi q" + qArr[k] + "Hm" + $('input[name="q' + qArr[k] + '"]').length);
            if ($('input[name=q' + qArr[k] + ']:checked').length > 0) {
                // do something here
                //   recordedAns = $.trim($('input[name=q' + qArr[k] + ']:checked').val()).replace(' ', '+');
                recordedAns = $('input[name=q' + qArr[k] + ']:checked').val();
                //  console.log(recordedAns);

                qContent1 = Questions.qArray[qArr[k]];
                //  console.log(qContent1.correctAns);



                if (recordedAns == qContent1.correctAns) {
                    totalMarks++;
                }

            }

            $('input[name=q' + qArr[k] + ']').prop('checked', false);


        }

        swal({
            title: "Total Marks obtained : ",
            text: totalMarks + "/10",
            //icon: "info",
        });

       // alert("Total Marks obtained are: " + totalMarks);






    });









    /*  $(".check").append(`  <h3 class="extraHeader">Contact Details</h3><br><ul class="bulletStyle">
      <li> <b>Phone Number : </b>+91 8658082358</li><br>
       <li> <b>Email Id : </b>abhisek.mohapatra@students.iiit.ac.in</li><br>
     <li>
       <b>Personal Email Id : </b>mohapatra.abhisek97@gmail.com
         </li><br>
         <li><b>Contact Address : </b>A/40, HIG Housing Board Colony, Baramunda, Bhubaneswar, Odisha-751003</li><br> 
        

       </ul>
      
      `);  */




}); // End of Jquery main function