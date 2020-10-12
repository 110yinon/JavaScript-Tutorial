// render chat templates to the DOM
// clear the list of chats (when the room changes)

class ChatUI {
    constructor(list) {
        this.list = list;
    }
    render(chat) {
        const when = dateFns.distanceInWordsToNow(
            chat.created_at.toDate(),
            { addSuffix: true } // add 'ago' keyword
        );
        const html = `
        <li>
            <span class="content">
                <span class="name">${chat.username}</span>
                ${chat.message}
            </span>
            <div class="timestamp">${when}</div>
        </li>
        `;
        this.list.innerHTML += html;
    }
}

