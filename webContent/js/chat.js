let chat = document.querySelector("#fakeScreen>ul");


ComfyJS.onChat = (user, message, flags, self, extra) => {
        if(chat.getElementsByTagName("li").length > 5)
          chat.firstChild.remove()
        //remove cursor null safe
        document.querySelector("#cursor")?.remove();
        //create message
        let newMessage = document.createElement("li");
        newMessage.classList.add("line");
        newMessage.innerText = `${user} > ${message}`;
        //create cursor
        let cursor = document.createElement("span");
        cursor.setAttribute('id','cursor');
        cursor.classList.add("cursor");
        cursor.innerText = `_`;
        //add cursor to message
        newMessage.append(cursor);
        //add message to chat box
        chat.append(newMessage);
}

ComfyJS.Init("cesargasca");
