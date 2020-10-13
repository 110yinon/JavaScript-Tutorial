// DOM queries
const chatList = document.querySelector('.chat ul');
const newChatForm = document.querySelector('.msg-input');


// addd a new chat
newChatForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = newChatForm.message.value.trim();
    chatroom.addChat(message)
        .then(() => newChatForm.reset())
        .catch(err => console.log(err))

});

// class instances
const chatroom = new Chat('gaming', 'shaun');
const chatUI = new ChatUI(chatList);

// get the chats and render
chatroom.getChats(data => chatUI.render(data));