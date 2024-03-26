const firebaseUrl = 'https://web-dizajn-21eb5-default-rtdb.firebaseio.com'

function allCategories() {
    const categories = () => {
        let categoryParent = document.querySelector(".columns")
        // async function getCategories() {
        //     console.log("test")
        //     const response = await fetch(firebaseUrl + "/korisnici.json")
        //     const categoryList = await response.json()
        //     return categoryList
        // }
        // async function showCategories() {
        //     console.log("test")
        //     const allCategories = await getCategories()
        //     let categoryList = objectToArray(allCategories)
        //     console.log(categoryList)
        // }
        // function objectToArray(object) {
        //     const array = [];
        //     const keys = Object.keys(object);
        //     keys.forEach((key) => {
        //         array.push(object[key]);
        //     });
        //     return array;
        // }
        // showCategories()
    }
    return categories


}
export default allCategories