import { gaussian } from "../helpers/math-helpers";

export default class Friend {
    constructor(id, database, mapManager) {
        this.id = id;
        this.database = database;

        this.loadFriendData();

        this.updatePosition();
    }

    loadFriendData() {
        this.database.getFriend(this.id).then((data) => {
            if (data) {
                this.name = data.name;
                this.points = data.points;
                this.likes = data.likes;
                this.dislikes = data.dislikes;
                this.personality = data.personality;
                this.last_meetup = data.last_meetup;
            } else {
                this.name = "Unknown";
                this.points = 0;
                this.likes = []; //Generate ranom likes and dislikes, single word topics.
                this.dislikes = [];
                this.personality = ["introvert", "extrovert", "ambivert"][Math.floor(gaussian(0, 3, 1.5, 0.5))];
                this.last_meetup = null;
            }

            switch(this.personality) {
                case "introvert":
                    this.updateCooldownMax = 3;
                    break;
                case "extrovert":
                    this.updateCooldownMax = 1;
                    break;
                case "ambivert":
                    this.updateCooldownMax = 2;
                    break;
            }

            this.updateCooldown = 0;
        });
    }

    async updatePoints(points) {
        this.points += points;
        await this.database.updatePoints(this.id, this.points);
    }

    async addToPrefs(topic, likeBool) {
        const likeOrNot = likeBool ? "likes" : "dislikes";
        await this.database.addToPrefs(this.id, topic, likeOrNot);
    }

    async updatePosition() {
        let location = await this.map.getRandomLocation();
    }


    async update() {
        this.updateCooldown++;
        this.updateCooldown %= this.updateCooldownMax;

        if (this.updateCooldown == 0) {
            this.updatePoints(1);
        }
    }

}