window.onload = function() {

document.getElementById('clicky').onclick = function() {
   alert("button was clicked");
 };

 document.getElementById('imgUpload').onchange = function(e) {
   var file = e.srcElement.files[0];

   var img = document.createElement("img");
   var reader = new FileReader();
   reader.onloadend = function() {
        img.src = reader.result;
   }
   reader.readAsDataURL(file);

   //document.getElementById('imgUpload').after(img);
   document.getElementById('mainImage').src = img;
   document.getElementById('loadImagePanel').style.display = "none";

  };



}
