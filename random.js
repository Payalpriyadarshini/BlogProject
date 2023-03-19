// `const url="https://jsonplaceholder.typicode.com/posts"


$(document).ready(function () {
$('#rand').click(function () {
    $.get(url, function (data) {
        // for(let i=0;i<data.length;i++){
        //     document.getElementById('bloglist').innerHTML +=  `<P><a href="blog.html" onclick="blog('${data[i].id}')">${data[i].title}</a></p>`;
        // }
        let rand =Math.round(Math.random() * data.length+1);
        localStorage.setItem('pgnumber',rand);


    });
});
});