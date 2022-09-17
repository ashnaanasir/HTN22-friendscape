export default class FriendManager {
    constructor(database, mapManager) {
        this.database = database;
        this.mapManager = mapManager;
        this.friends = [];
    
    }

    getFriends() {
        this.database.getFriends().then((data) => {
            data.forEach((friend) => {
                this.friends.push(new Friend(friend.id, this.database, this.mapManager));
            });
        });
    }

    async addFriend(id) {
        await this.database.addFriend(id);
        this.friends.push(new Friend(id, this.database, this.mapManager));
    }

    async removeFriend(id) {
        await this.database.removeFriend(id);
        this.friends = this.friends.filter((friend) => friend.id !== id);
    }

    async updateFriends() {
        this.friends.forEach((friend) => {
            friend.updatePosition();
        });
    }
}