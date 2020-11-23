let connections = [];
let history = [];

module.exports = (socket, io) => {
    console.log(history);

    if(!connections.includes(socket.conn.id)) {
        connections.push(socket.conn.id);
        history.push(connections.length);
        io.emit('connections', connections.length);
    };

    socket.on('disconnect', () => {
        connections.splice(connections.indexOf(socket.conn.id), 1);
        history.push(connections.length);
        io.emit('connections', connections.length);
    });

    socket.on('get-connections', () => {
        io.emit('history', history);
    });
}