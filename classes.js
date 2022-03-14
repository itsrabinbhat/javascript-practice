/**** Classes ****/

class User {
  constructor(userName, id, post) {
    this.userName = userName;
    this.id = id;
    this.post = post;
  }

  showUserDetails() {
    console.log(this);
  }
}

const user1 = new User("Anonymous", "34db", "Chief");

// console.table(user1);

user1.showUserDetails();
