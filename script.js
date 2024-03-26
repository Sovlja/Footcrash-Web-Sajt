let firebaseUrl = 'https://web-dizajn-21eb5-default-rtdb.firebaseio.com/'
let request = new XMLHttpRequest();
import allCategories from "./Footcrash - početna strana.js"
console.log(allCategories())

// request.onreadystatechange = function () {
//     if (this.readyState == 4) {
//         if (this.status == 200) {
//             let courses = JSON.parse(request.responseText);


//             for (var id in courses) {
//                 var course = courses[id];
//                 appendCourseRow('tableJS', course);
//             }
//         } else {
//             alert('Error occurred. Courses could not be loaded.');
//         }
//     }
// }
   

// request.open('GET', firebaseUrl + '/courses' + '.json');
// request.send();