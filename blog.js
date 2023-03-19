
//const url="https://jsonplaceholder.typicode.com/posts/"
const url2="https://jsonplaceholder.typicode.com/users/"
let uref=localStorage.getItem('pgnumber');
let users;
    $.get(url+uref, function (data) {
            document.getElementById('atitle').innerHTML=data.title;
            document.getElementById('bbody').innerHTML=data.body;
           users=data.userId;
              //alert(users);
               $.get(url2+users, function (data) {
                 //alert(users);
                   document.getElementById('Author').innerHTML=data.name;
                   document.getElementById('Acontact').innerHTML=data.email;
                   document.getElementById('Acity').innerHTML=data.address.city;
                 });
           
        });

//random code
        $(document).ready(function(){
       $('#rand').click(function () {
    $.get(url, function (data) {
        // for(let i=0;i<data.length;i++){
        //     document.getElementById('bloglist').innerHTML +=  `<P><a href="blog.html" onclick="blog('${data[i].id}')">${data[i].title}</a></p>`;
        // }
        let rand =Math.round(Math.random() * data.length+1);
        localStorage.setItem('pgnumber',rand);
        // let payal=localStorage.getItem('pgnumber');
        // alert(payal)

    });
});
});
        
        // $.get(url2+users, function (data) {
        //     //alert(users);
        //       document.getElementById('Author').innerHTML=data.name