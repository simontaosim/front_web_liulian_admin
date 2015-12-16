if(window.localStorage){
  console.log('确认允许您的浏览器访问本地数据');
}else{
  console.log('推荐使用chrome访问本离线应用！');
}
var users = [
  {count: 3},
  {user1: {
    username: "simon",
    password: "123666",
    role: "student"
  }
  },
  {
    user2:{
    username: "webmaster",
    password: "liulianxueshe2016",
    role: "webmaster"
  }
},
{
  user3:{
    username: "韩老师",
    password: "123456",
    role: "teacher"
  }
}
]
localStorage.users_count = users[0].count;
console.log(users.length);
for(var i=1;i<users.length; i++ ){
  localStorage["user"+i.toString()] = JSON.stringify(users[i]["user"+i.toString()]);
}
