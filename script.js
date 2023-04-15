let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log
  arr.map(function(fun){
    if(fun.profession=="developer"){
      console.log(fun);
    }
  })
}

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach(function(fun){
    if(fun.profession=="developer"){
      console.log(fun);
    }
});
}

function addData() {
  //Write your code here, just console.log
  let obj = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(obj)
  console.log(arr);
}

function removeAdmin() {
  //Write your code here, just console.log
  let filterArray= arr.filter((arr)=>arr.profession=="admin");
  console.log(filterArray);
}

function concatenateArray() {
  //Write your code here, just console.log
  let newArr = [{ id: 5, name: "ram", age: "19", profession: "developer"}];
  let concatArr = arr.concat(newArr);
  console.log(concatArr);
}