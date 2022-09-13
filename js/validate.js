$(document).ready(function () {



    document.getElementById("null").addEventListener("click", function() {



        if(document.getElementById("null").checked ){
            var inputs = document.getElementsByName('SGH');
            for (var i = 0; i < inputs.length; i++) {
                inputs[i].checked = false;
                document.getElementById("null").checked = true;
            }

        }else{
            document.getElementById("null").checked = false;

        }

       

       
        


      }); 

      // uncheck nulled if the others option is clicked
      document.getElementById("db").addEventListener("click", function() {



        if(document.getElementById("db").checked ){
            var inputs = document.getElementsByName('SGH');
            for (var i = 0; i < inputs.length; i++) {
              
                document.getElementById("null").checked = false;
            }

        }

      });
      document.getElementById("sb").addEventListener("click", function() {



        if(document.getElementById("sb").checked ){
            var inputs = document.getElementsByName('SGH');
            for (var i = 0; i < inputs.length; i++) {
              
                document.getElementById("null").checked = false;
            }

        }

      });

      document.getElementById("lsms").addEventListener("click", function() {



        if(document.getElementById("lsms").checked ){
            var inputs = document.getElementsByName('SGH');
            for (var i = 0; i < inputs.length; i++) {
              
                document.getElementById("null").checked = false;
            }

        }

      });

      document.getElementById("cs").addEventListener("click", function() {



        if(document.getElementById("cs").checked ){
            var inputs = document.getElementsByName('SGH');
            for (var i = 0; i < inputs.length; i++) {
              
                document.getElementById("null").checked = false;
            }

        }

      });

      document.getElementById("cp").addEventListener("click", function() {



        if(document.getElementById("cp").checked ){
            var inputs = document.getElementsByName('SGH');
            for (var i = 0; i < inputs.length; i++) {
              
                document.getElementById("null").checked = false;
            }

        }

      });



   // uncheck nulled if the others option is clicked


     

    $("#name").keyup(function () {

        if ($(this).val() == "") {
            document.getElementById("name").style.border = "3px solid red";

        } else if (document.getElementById("name").value.length < parseInt(6)) {
            document.getElementById("name").style.border = "3px solid red";

        } else {
            document.getElementById("name").style.border = "3px solid rgb(41 255 88 / 36%)";

        }

    });

    $("#email").keyup(function () {
        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let mail = document.getElementById("email").value;


        if (regex.test(mail)) {

            document.getElementById("email").style.border = "3px solid rgb(41 255 88 / 36%)";

        } else {
            document.getElementById("email").style.border = "3px solid red";

        }


    });
    $("#number").keyup(function () {
        let regexnumb = /[0-9]{2}/;
        let number = document.getElementById("number").value;
        if (regexnumb.test(number)) {

            document.getElementById("number").style.border = "3px solid rgb(41 255 88 / 36%)";

        } else if (number < 18) {
            document.getElementById("number").style.border = "3px solid red";
        } else if (number > 100) {
            document.getElementById("number").style.border = "3px solid red";

        } else {
            document.getElementById("number").style.border = "3px solid red";

        }
    });

    $("#phone").keyup(function () {
        let regexphone = /^\+(?:[0-9] ?){6,14}[0-9]$/;
        let phone = document.getElementById("phone").value;
        if ((regexphone.test(phone))) {
            document.getElementById("phone").style.border = " 3px solid rgb(41 255 88 / 36%)";




        } else {
            document.getElementById("phone").style.border = "3px solid red";
        }

    })

    
       


    $(".btnnext1").click(function () {

        let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        let mail = document.getElementById("email").value;
        $("#INE").remove();
        $("#EI").remove();
        $("#PNNCC").remove();



        if (($("#name").val() == "") || ($("#email").val() == "")) {


            $(this).addClass("error");

            $("footer").append("<p id='INE' class='error'>invalid name or email</p>");





        } else if (document.getElementById("name").value.length < parseInt(6)) {
            document.getElementById("name").style.border = "3px solid red";
            $("footer").append("<p id='PNNCC' class='error'>The Pseudo name need contain 6 character</p>");

        } else if (regex.test(mail)) {

            $(".error").remove();

            $(this).addClass("validate").delay(3000);
            document.getElementById("email").style.border = "3px solid rgb(41 255 88 / 36%)";
            document.getElementById("information").style.animation = "hideMe 1s forwards";
            setTimeout(function () {
                $("#information").hide();

            }, 500);

            setTimeout(function () {
                $("#informationplus").show();
                document.getElementById("informationplus").style.animation = "showMe 1s forwards";
            }, 500);







        } else {
            document.getElementById("email").style.border = "3px solid red";
            $("footer").append("<p id='EI' class='error'>The email is invalid</p>");

        }


    })

    $(".btnnext2").click(function () {

        let regexnumb = /[0-9]{2}/;
        let regexphone = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        let number = document.getElementById("number").value;
        let phone = document.getElementById("phone").value;
        $("#numb").remove();
        $("#numtest").remove();

        if (($("#number").val() == "") || ($("#phone").val() == "")) {

            $(this).addClass("error");



            $("footer").append("<p id='numb' class='error'>They are a error in your form </p>");




        } else if (!(regexnumb.test(number)) || number < parseInt(18) || number > parseInt(100)) {

            document.getElementById("number").style.border = "3px solid red";

            $("footer").append("<p id='numtest' class='error'>enter two number in your age Or have more than 18</p>");


        } else if (!(regexphone.test(phone))) {
            document.getElementById("phone").style.border = "3px solid red";

            $("footer").append("<p id='numtest' class='error'>enter a international phone number</p>");


        } else {

            $(".error").remove();

            $(this).addClass("validate").delay(3000);





            document.getElementById("informationplus").style.animation = "hideMe 1s forwards";
            setTimeout(function () {
                $("#informationplus").hide();

            }, 500);

            setTimeout(function () {
                $("#checkboxchoice").show();
                document.getElementById("checkboxchoice").style.animation = "showMe 1s forwards";
            }, 500);
        }



    })

    $(".btnnext3").click(function () {

    
        var radios = document.querySelectorAll("input[type='radio']");
        
        
        
       
        var validradio = false;
        $("#CYA").remove();
      


        for (var radio of radios) {

            if (radio.checked == true) {
                validradio = true;
                break;
            } else {
                validradio = false;
            }
        }

        if (validradio) {
        
            var ele = document.getElementsByName('app');
              var choice;
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    console.log("choix: "+ele[i].value);
                choice = ele[i].value;
                }
                 };
                        
                        if( choice == "yes"){
                            document.getElementById("checkboxchoice").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#checkboxchoice").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#yescovid").show();
                                document.getElementById("yescovid").style.animation = "showMe 1s forwards";
                            }, 500);
                                
        
                        }
        
                        else if( choice =="no"){
                            document.getElementById("checkboxchoice").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#checkboxchoice").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#nocovid").show();
                                document.getElementById("nocovid").style.animation = "showMe 1s forwards";
                            }, 500);
                        }else{
                            document.getElementById("checkboxchoice").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#checkboxchoice").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#iDKcovid").show();
                                document.getElementById("iDKcovid").style.animation = "showMe 1s forwards";
                            }, 500);
                        }
           

               

            

           

            

            

        } else {
            alert("validation bad");
            $("footer").append("<p id='CYA' class='error'> Check your answer</p>")
            return false;
        };
       









    });

    $(".btnyescovid").click(function(){
        $("#CYA").remove();
        var valueL = document.getElementById("vQ2");
        var listArray = [];
        
        var checkboxes = document.querySelectorAll(" input[type='checkbox']");
        var validcheckbox = false;


        for (var checkbox of checkboxes) {
            if (checkbox.checked == true) {
                listArray.push(checkbox.value);
                valueL.innerHTML = listArray.join(" / ");

                validcheckbox = true;

            }


        }

        if(validcheckbox){
            document.getElementById("yescovid").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#yescovid").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#SG").show();
                                document.getElementById("SG").style.animation = "showMe 1s forwards";
                            }, 500);
                                
        
                        }

         else {
            alert("validation bad");
            $("footer").append("<p id='CYA' class='error'> Check your answer</p>")
            return false;
        };


    })

    $(".btnnext5").click(function(){

        var valueL2 = document.getElementById("vQ2");
        var listArray2 = [];
        var checkboxes2 = document.querySelectorAll(" input[type='checkbox']");
        var validcheckbox2 = false;


        for (var checkbox of checkboxes2) {
            if (checkbox.checked == true) {
                listArray2.push(checkbox.value);
                valueL2.innerHTML = listArray2.join(" / ");

                validcheckbox2 = true;

            }


        }


        

       

       

        if(validcheckbox2){
            document.getElementById("SG").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#SG").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#someinformation").show();
                                document.getElementById("someinformation").style.animation = "showMe 1s forwards";
                            }, 500);
                                
        
                        }

         else {
            alert("validation bad");
            $("footer").append("<p id='CYA' class='error'> Check your answer</p>")
            return false;
        };

    })

    $(".btnnext6").click(function(){
        var radios = document.querySelectorAll("input[type='radio']");
        
        
        
       
        var validradio = false;
        $("#CYA").remove();
      


        for (var radio of radios) {

            if (radio.checked == true) {
                validradio = true;
                break;
            } else {
                validradio = false;
            }
        }

        if (validradio) {
        
            var ele = document.getElementsByName('no');
              var choice;
            for(i = 0; i < ele.length; i++) {
                if(ele[i].checked){
                    console.log("choix: "+ele[i].value);
                choice = ele[i].value;
                }
                 };
                        
                        if( choice == "yes"){
                            document.getElementById("nocovid").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#nocovid").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#yescovid").show();
                                document.getElementById("yescovid").style.animation = "showMe 1s forwards";
                            }, 500);
                                
        
                        }
        
                        else if( choice =="no"){
                            document.getElementById("nocovid").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#nocovid").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#SG").show();
                                document.getElementById("SG").style.animation = "showMe 1s forwards";
                            }, 500);
                        }else{
                            document.getElementById("checkboxchoice").style.animation = "hideMe 1s forwards";
                            setTimeout(function () {
                                $("#checkboxchoice").hide();
                
                            }, 500);
                
                            setTimeout(function () {
                                $("#iDKcovid").show();
                                document.getElementById("iDKcovid").style.animation = "showMe 1s forwards";
                            }, 500);
                        }
           

               

            

           

            

            

        } else {
            alert("validation bad");
            $("footer").append("<p id='CYA' class='error'> Check your answer</p>")
            return false;
        };

    })

    $(".btnnext4").click(function () {

        $("#FYE").remove();
        $("#chars").remove();

        if ($("#textexp").val() == "") {

            $("footer").append("<p id='FYE' class='error'>Fill your experience</p>");

        } else if (document.getElementById("textexp").value.length < parseInt(50)) {

            $("footer").append("<p id='chars' class='error'>The contain must be have more than 50 characters</p>")

        } else {



            document.getElementById("someinformation").style.animation = "hideMe 1s forwards";
            setTimeout(function () {
                $("#someinformation").hide();

            }, 500);

            setTimeout(function () {
                $("#validate").show();
                document.getElementById("validate").style.animation = "showMe 1s forwards";
            }, 500);


            document.getElementById("vname").innerHTML = document.getElementById("name").value;
            document.getElementById("vemail").innerHTML = document.getElementById("email").value;
            document.getElementById("vage").innerHTML = document.getElementById("number").value;
            document.getElementById("vphone").innerHTML = document.getElementById("phone").value;
            document.getElementById("vtitel").innerHTML = document.getElementById("dropdown").value;
            document.getElementById("vQ1").innerHTML = document.querySelector("input[type='radio']:checked").value;
            document.getElementById("vExp").innerHTML = document.getElementById("textexp").value;






        }







    });


});