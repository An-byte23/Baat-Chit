
const io=require("socket.io")();
const socketapi={
    io:io
};

var users={};

io.on("connection",function(socket){

    socket.on("new-user-joined",function(uname){
        users[socket.id]=uname;
        socket.broadcast.emit('user-connected',uname)
        io.emit('user-list',users);
    })

    socket.on('message',function(data){
        socket.broadcast.emit("message",data);
    });

    socket.on("disconnect",function(){
        socket.broadcast.emit('user-disconnected',user=users[socket.id]);
        delete users[socket.id];
        io.emit('user-list',users);
    })
})

module.exports=socketapi