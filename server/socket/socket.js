let connections = [];

module.exports = (socket, io) => {
    if(!connections.includes(socket.conn.id)) {
        connections.push(socket.conn.id);
        io.emit('connections', connections.length);
    };

    socket.on('disconnect', () => {
        connections.splice(connections.indexOf(socket.conn.id), 1);
        io.emit('connections', connections.length);
    });

    socket.on('get-connections', () => {
        io.emit('connections', connections.length);
    });
}