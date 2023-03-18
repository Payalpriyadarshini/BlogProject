

const url = 'https://jsonplaceholder.typicode.com/posts/';

$(document).ready(function(){
    $("#registerForm").submit(function(){
        userData = {
            title: $('#title').val(),
            body: $('#body').val(),
        };
        $.post(url, userData, function (data) {
            alert(`Hi ! Your blog on ${data.title} is registered successfully.`);
            setTimeout(() => {
                $(location).attr('href', 'index.html');
            }, 5000)
          //  $("#userdata").text(`Hi ${data.title}! You have registered successfully.`);
        })
            .fail(function (error) {
               alert("something went wrong");
            });
            document.getElementById("title").value=null;
            document.getElementById("body").value=null
      //alert("wellcome" +userData.title +" "+userData.body);
       
    })

});
