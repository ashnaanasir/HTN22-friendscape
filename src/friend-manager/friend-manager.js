import friendData from "../../sample_data/friends_database";
import axios from "axios";

export default class FriendManager {
    constructor(context) {
        this.context = context;
        this.friends = [];
        this.loadFriendData();
    }

    //Hack for presentations. 
    async loadFriendData() {
        for(let i = 0; i < friendData.length; i++) {
            let x = new Friend(friendData[i].id, this.context)
            
            await axios.post('http://localhost:3001/api/insert', {
                type: 'friend',
                id: x.id,
                name: x.name,
                points: x.points,
                likes: x.likes,
                dislikes: x.dislikes,
                personality: x.personality
            })

            this.friends.push(x);
        }
    }

    async updateFriends() {
        this.friends.forEach((friend) => {
            friend.update();
        });
    }
}