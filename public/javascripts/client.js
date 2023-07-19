var socket=io();

var uname;
var chats=document.querySelector(".chats");
var users_list=document.querySelector('.users-list')
var users_count=document.querySelector('#users-count')
var user_send=document.querySelector('#user-send')
var user_msg=document.querySelector('#user-msg')


do{
    uname=prompt("Enter your name : ")
}while(!uname);

/* It will be called when new user joins */
socket.emit("new-user-joined",uname);

// notifying that user has joined
socket.on('user-connected',function(name){
    userJoinLeft(name,'joined');
})
// notifying that user has left
socket.on('user-disconnected',function(name){
    userJoinLeft(name,'left');
})

// for updating users-list and users-count
socket.on('user-list',function(users){
    users_list.innerHTML="";
    users_arr=Object.values(users);
    for(i=0;i<users_arr.length;i++){
        let p=document.createElement('p');
        p.innerHTML=users_arr[i];
        users_list.appendChild(p);
    }
    users_count.innerHTML=users_arr.length;
})


// function to create joined/left status div
function userJoinLeft(name,status){
    let div=document.createElement("div");
    div.classList.add("user-join");
    let content=`
        <p><b>${name}</b> ${status} the chat</p>
    `
    div.innerHTML=content;
    chats.appendChild(div);
    chats.scrollTop=chats.scrollHeight;

}

//for sending messages

user_send.addEventListener('click',function(){
    let data={
        user:uname,
        msg:user_msg.value
    };
    if(user_msg.value != ''){
        appendMessage(data,'outgoing');
        socket.emit('message',data);
        user_msg.value='';
    }
})

// for recieving message
socket.on("message",function(data){
    appendMessage(data,'incoming');
})

function appendMessage(data,status){
    let div=document.createElement("div");
    div.classList.add("message",status);
    let content=`
        <h5>${data.user}</h5>
        <p>${data.msg}</p>
    `;
    div.innerHTML=content;
    chats.appendChild(div);
    chats.scrollTop=chats.scrollHeight;

}