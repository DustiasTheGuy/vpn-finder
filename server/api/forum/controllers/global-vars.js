class GlobalVars {
    constructor() {
        this.onlineUsers = [];
    }

    addUser(id) {
        this.onlineUsers.push(id.toString());
        return;
    };

    removeUser(id) {
        const index = this.onlineUsers.indexOf(id.toString());
        this.onlineUsers.splice(index, 1);
        return;
    };

    isOnline(id) {
        console.log(this.onlineUsers);
        return this.onlineUsers.includes(id.toString());
    };
}

module.exports = {
    globalVars: new GlobalVars()
}