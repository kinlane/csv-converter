function readfile(f) {
    var reader = new FileReader(); 
    reader.readAsText(f); 
    reader.onload = function() { 
        var text = reader.result; 
        var out = document.getElementById("dataInput");  
        out.innerHTML = "";                          
        out.appendChild(document.createTextNode(text));
    }
    reader.onerror = function(e) {
        console.log("Error", e);  
    };
}