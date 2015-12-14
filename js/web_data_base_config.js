db = openDatabase("liulian", "0.1", "the test data in the project liulian");
if (!db) {
    alert("请使用chrome!");
}

var User  = new Object();

User.getUser = function($id){
  var sql_str = "select * from users where id="+$id;
};
