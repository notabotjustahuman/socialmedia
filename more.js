class User {
  constructor(email, password) {
    this.email = email
    this.password = password
    this.inbox = []
  }

  sendMessage(rec) {
    let msg = new Message()
    rec.inbox.push(msg)
  }
}

class Message {
  constructor(content) {
    this.content = prompt('Enter a message')
  }
}

user1 = new User('billy@example.com', '111')
user2 = new User('amy@example.com', '111')

// msg = new Message('Why do the Knicks suck?')
