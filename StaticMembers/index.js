class Store {
    static storeLocation() {
        return 'New York';
    }
}
console.log(Store.storeLocation())
let store = new Store();
// console.log(store.storeLocation()); //error

// alternative way of creating static properties
const Project = {

}
Project.id = 20202;
console.log(Project.id);