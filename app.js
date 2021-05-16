src = [];
function createNewEvent() {
    var event = document.createElement("div");event.innerHTML = "<input type='text' class='event' placeholder='Event'/>"

    var year = document.createElement("div");
    year.innerHTML = "<input type='number' class='year' placeholder='Year'/>"

    var description = document.createElement("div");
    description.innerHTML = "<input type='textarea' class='description' placeholder='Description'/>"

    document.getElementById("anything").appendChild(event);
    document.getElementById("anything").appendChild(year);
    document.getElementById("anything").appendChild(description);
}
function submit12() {
    var event1 = document.getElementsByClassName('event');
    var year1 = document.getElementsByClassName('year');
    var description1 = document.getElementsByClassName('description');
    var count = 0;
    for(count = 0; count<event1.length; count++) {
        src[count] = [event1[count].value, year1[count].value, description1[count].value];
    }
    var abc = document.getElementById('ag');
    abc.style.visibility='hidden';
    var def = document.getElementById('hello');
    def.style.visibility='visible';
}
function final() {
    var table = document.getElementById('dataTable');
    var i = 0;
    for (i = 0; i < src.length; i++)
    {
        var row = table.insertRow(1);
        
        var cell1 = row.insertCell(0);
        cell1.innerHTML = src[i][0];

        var cell2 = row.insertCell(1);
        cell2.innerHTML = src[i][1];

        var cell3 = row.insertCell(2);
        cell3.innerHTML = src[i][2];

    }
}