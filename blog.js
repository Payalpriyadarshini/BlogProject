
const url="https://jsonplaceholder.typicode.com/posts/"
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
       
        
        // $.get(url2+users, function (data) {
        //     //alert(users);
        //       document.getElementById('Author').innerHTML=data.name