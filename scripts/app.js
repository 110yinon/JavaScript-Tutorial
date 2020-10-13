// DOM queries
const chatList = document.querySelector('.chat ul');
const newChatForm = document.querySelector('.msg-input');
const newNameForm = document.querySelector('.name-input');
const updateMsg = document.querySelector('.update-msg');


// addd a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))

});

// update username
newNameForm.addEventListener('submit', e => {
    e.preventDefault();
    // update name via chatroom
    const newName = newNameForm.name.value.trim();
    chatroom.updateName(newName);
    // reset the form
    newNameForm.reset();
    // show then hide the update message
    updateMsg.innerText = `Your name was updated to: ${newName}`;
    setTimeout(() => updateMsg.innerText = '', 3000);
});

// check local storage for a name
const username = localStorage.username ? localStorage.username : 'anon';


// class instances
const chatroom = new Chat('gaming', username);
const chatUI = new ChatUI(chatList);

// get the chats and render
chatroom.getChats(data => chatUI.render(data));