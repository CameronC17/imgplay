window.onload = function() {

/*document.getElementById('clicky').onclick = function() {
   alert("button was clicked");
 };*/

document.getElementById('imgUpload').onchange = function(e) {
   var file = e.srcElement.files[0];

   var reader = new FileReader();
   reader.onloadend = function() {
        document.getElementById('mainImage').src = reader.result;
        document.getElementById('mainImage').style.height = "600px";
        //fade out animation
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0){
                clearInterval(timer);
                document.getElementById('loadImagePanel').style.display = 'none';
            }
            document.getElementById('loadImagePanel').style.opacity = op;
            document.getElementById('loadImagePanel').style.filter = 'alpha(opacity=' + op * 100 + ")";
            op -= op * 0.1;
        }, 30);
   }
   reader.readAsDataURL(file);

 };


}
