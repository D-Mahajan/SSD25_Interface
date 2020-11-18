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

    for (j = 0; j < 10; j++) {
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