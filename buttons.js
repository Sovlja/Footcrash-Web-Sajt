let firebaseUrl = 'https://web-dizajn-21eb5-default-rtdb.firebaseio.com/'
let request = new XMLHttpRequest();

request.onreadystatechange = function () {
    if (this.readyState == 4) {
        if (this.status == 200) {

            let course01 = document.getElementById("course01")
            course01.innerText = "Pregledaj kurseve"
            course01.addEventListener("click", function (e) {
                window.location.href = "Footcrash - Kategorija 01.html";
            })



        }
    }
}


request.open('GET', firebaseUrl + '/courses' + '.json');
request.send();