var h1 = document.querySelector("h1");
var loc = document.querySelector("#loc");
function switchName(element){
    h1.innerText = "David Kral";
    loc.innerText = "Concord, CA";
}

function updateRequests(id){
    var request = document.querySelector("#"+id);
    request.remove();
}