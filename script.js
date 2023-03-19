const url="https://jsonplaceholder.typicode.com/posts/"

//random



//write blog

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


// //blog
// const url2="https://jsonplaceholder.typicode.com/users/"
// let uref=localStorage.getItem('pgnumber');
// let users;
//     $.get(url+uref, function (data) {
//             document.getElementById('atitle').innerHTML=data.title;
//             document.getElementById('bbody').innerHTML=data.body;
//            users=data.userId;
//               //alert(users);
//                $.get(url2+users, function (data) {
//                  //alert(users);
//                    document.getElementById('Author').innerHTML=data.name;
//                    document.getElementById('Acontact').innerHTML=data.email;
//                    document.getElementById('Acity').innerHTML=data.address.city;
//                  });
           
//         });
       
        
        // $.get(url2+users, function (data) {
        //     //alert(users);
        //       document.getElementById('Author').innerHTML=data.name



//All Blogs
$(document).ready(function () {
    $.get(url, function (data) {
        for(let i=0;i<data.length;i++){
            document.getElementById('bloglist').innerHTML +=  `<P><a href="blog.html" onclick="blog('${data[i].id}')">${data[i].title}</a></p>`;
        }
    });
});
const blog= (arg) => {
    localStorage.setItem('pgnumber', arg);
   // alert(localStorage.getItem('pgnumber'));
}