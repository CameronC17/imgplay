window.onload = function() {

/*document.getElementById('clicky').onclick = function() {
   alert("button was clicked");
 };*/

document.getElementById('imgUpload').onchange = function(e) {
   var file = e.srcElement.files[0];

   var reader = new FileReader();
   reader.onloadend = function() {
        document.getElementById('mainImage').src = reader.result;
        var imageDims = [document.getElementById('mainImage').clientWidth, document.getElementById('mainImage').clientHeight];

        if (imageDims[0] > imageDims[1]) {
          document.getElementById('mainImage').style.width = "800px";
        }
        else {
          document.getElementById('mainImage').style.height = "600px";
        }


        //fade out animation
        var op = 1;
        var timer = setInterval(function () {
            if (op <= 0){
                clearInterval(timer);
                document.getElementById('loadImagePanel').style.display = 'none';
            }
            if (op > 0){
              document.getElementById('loadImagePanel').style.opacity = op;
              document.getElementById('loadImagePanel').style.filter = 'alpha(opacity=' + op * 100 + ")";
              op -= op * 0.1;
            }
        }, 30);
   }
   reader.readAsDataURL(file);

 };


}
