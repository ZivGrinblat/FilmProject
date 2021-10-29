
function show(film)
{
    film=parseInt(film);
    var request = new XMLHttpRequest();
    request.open('GET', 'https://swapi.dev/api/films/'+film+'/');
    request.send();
    request.onload = ()=>
    {
    const data = JSON.parse(request.response);
    
    var output = "<h4>Title : " + data.title + "</h4>";
    output += "<h4>Director : " + data.director + "</h4>";
    output += "<h4>Producer : " + data.producer +"</h4>";
    output += "<h4>Abstract : </h4>";
    output += "<p>"+data.opening_crawl + "</p>";

    document.getElementById('result').innerHTML = output;
    document.getElementById('favdata').value = film;
    document.getElementById('fav').style.visibility = "visible";
    
    var favid = "film"+film;
    loadfav(favid);

    }

}

function setfav()
{
    var favid = "film"+parseInt(document.getElementById('favdata').value);
    var favres = localStorage.getItem(favid);
    if (favres == null)
        {
            localStorage.setItem(favid, '1');
            document.getElementById('fav').style.color = "red";
        }
        else
        {
            localStorage.removeItem(favid);
            document.getElementById('fav').style.color = "white";
        }


}


function loadfav(favid)
{
    var favres = localStorage.getItem(favid);
    if (favres == null)
        {
            document.getElementById('fav').style.color = "white";
        }
        else
        {
            document.getElementById('fav').style.color = "red";
        }
}