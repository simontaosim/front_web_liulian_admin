// In the following line, you should include the prefixes of implementations you want to test.
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
// DON'T use "var indexedDB = ..." if you're not in a function.
// Moreover, you may need references to some window.IDB* objects:
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange
// (Mozilla has never prefixed these objects, so we don't need window.mozIDB*)
if (!window.indexedDB) {
    alert("浏览器不支持本地存储，无法离线使用，推荐使用chrome的最新版本浏览器")
}
else{
  console.log("浏览器支持本地存储，本地数据已经准备");
}
const customerData = [
  { ssn: "444-44-4444", name: "Bill", age: 35, email: "bill@company.com" },
  { ssn: "555-55-5555", name: "Donna", age: 32, email: "donna@home.org" }
];
const students=[{
            id:1001,
            name:"Byron",
            age:24
        },{
            id:1002,
            name:"Frank",
            age:30
        },{
            id:1003,
            name:"Aaron",
            age:26
        }];

const dbName = "the_name";

var request = indexedDB.open(dbName, 2);

request.onerror = function(event) {
  // 错误处理程序在这里。
};
request.onupgradeneeded = function(event) {
  var db = event.target.result;

  // 创建一个对象存储空间来持有有关我们客户的信息。
  // 我们将使用 "ssn" 作为我们的 key path 因为它保证是唯一的。
  var objectStore = db.createObjectStore("customers", { keyPath: "id" });

  // 创建一个索引来通过 name 搜索客户。
  // 可能会有重复的，因此我们不能使用 unique 索引。
  objectStore.createIndex("name", "name", { unique: false });

  // 创建一个索引来通过 email 搜索客户。
  // 我们希望确保不会有两个客户使用相同的 email 地址，因此我们使用一个 unique 索引。
  objectStore.createIndex("email", "email", { unique: true });

  var studentObjectStore = db.createObjectStore("students", { keyPath: "ssn" });

  studentObjectStore.createIndex("email", "email", { unique: true });

  // 在新创建的对象存储空间中保存值
  for (var i in customerData) {
    objectStore.add(customerData[i]);
  }

  for(var i in students){
    studentObjectStore.add(students[i]);
  }
};
