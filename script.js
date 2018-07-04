function sendMail() {
         var link = "mailto:benjamin-newman@live.co.uk"
         + "&subject=" + escape("This is my subject")
         + "&body=" + escape(document.getElementById('message').value)
     ;

     window.location.href = link;
 }
