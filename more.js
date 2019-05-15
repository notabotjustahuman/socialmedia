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

let user1form = document.getElementById('user1-form')
let user2inbox = document.getElementById('user2-inbox')
window.addEventListener('keydown', function(event) {
  if(event.which == 13) {
    sendMessage()
  }
})

function sendMessage() {
  let text = document.getElementById('msg-content')
  let p = document.createElement('p')
  p.innerText = text.value
  user2inbox.appendChild(p)
  text.value = ''
  text.focus()
}

user1form.addEventListener('submit', function(event) {
  event.preventDefault()
  sendMessage()
})








// msg = new Message('Why do the Knicks suck?')
