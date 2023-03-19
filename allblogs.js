
const url="https://jsonplaceholder.typicode.com/posts"
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
