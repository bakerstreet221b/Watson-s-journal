<script language="JavaScript">
    alert('Hello, World!');
</script>


var txtFile = new XMLHttpRequest();
txtFile.open("GET", "http://my.remote.url/myremotefile.txt", true);
txtFile.onreadystatechange = function() 
{
 if (txtFile.readyState === 4)   // Makes sure the document is ready to parse.
 {
  if (txtFile.status === 200)   // Makes sure it's found the file.
   {
    allText = txtFile.responseText; 
   }
 }
}


function readText(url) {
    var rq = null;

    if(window.XMLHttpRequest) {
    } else if(window.ActiveXObject) {
        try {
            rq = new ActiveXObject("Msxml2.XMLHTTP");
        } catch(o) {
            try {
                rq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch(e) {
            }
        }
    }

    if(!rq) throw new Error("Couldn't create a request object.");

    rq.open('GET', url, false);

    rq.send(null);

    if(rq.status >= 200 && rq.status < 400) return rq.responseText;

    throw new Error("Couldn't read the requested file; status = " + rq.status.toString());
}
