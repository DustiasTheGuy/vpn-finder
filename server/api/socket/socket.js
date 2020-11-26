let connections = [];
let history = [];

module.exports = (socket, io) => {
    console.log(history);

    if(!connections.includes(socket.conn.id)) {
        connections.push(socket.conn.id);

        history.push({
            length: connections.length,
            time: Date.now()
        });

        io.emit('connections', {
            length: connections.length,
            time: Date.now()
        });
    };

    socket.on('disconnect', () => {
        connections.splice(connections.indexOf(socket.conn.id), 1);
        history.push({
            length: connections.length,
            time: Date.now()
        });
        
        io.emit('connections', {
            length: connections.length,
            time: Date.now()
        });
    });

    socket.on('get-connections', () => {
        io.emit('history', history);
    });
}