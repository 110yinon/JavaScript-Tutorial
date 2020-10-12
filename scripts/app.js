// DOM queries
const chatList = document.querySelector('.chat ul');

// class instances
const chatroom = new Chat('gaming', 'shaun');
const chatUI = new ChatUI(chatList);

// get the chats and render
chatroom.getChats(data => chatUI.render(data));