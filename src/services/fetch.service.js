export default function FetchServise (endpoint){
    this.getAll =  ()=> fetch(`https://jsonplaceholder.typicode.com/${endpoint}`).then(value => value.json());
    this.getbyId = (id)=> fetch(`https://jsonplaceholder.typicode.com/${endpoint}/${id}`).then(value => value.json());
};