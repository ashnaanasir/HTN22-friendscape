import { gaussian } from "../helpers/math-helpers";

const SERVER_URL = "http://localhost:3001";

export default class Friend {
    constructor(id, context) {
        this.id = id;
        this.context = context;

        //this.getFriendData();

        this.updatePosition();
    }

    getFriendData() {
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
            }

            switch(this.personality) {
                case "introvert":
                    this.updateCooldownMax = 400;
                    this.updateInterval = 3;
                    break;
                case "extrovert":
                    this.updateCooldownMax = 300;
                    this.updateInterval = 1;
                    break;
                case "ambivert":
                    this.updateCooldownMax = 360;
                    this.updateInterval = 2;
                    break;
            }

            this.updateCooldown = 0;
        });
    }

    async updatePoints(points) {
        this.points += points;
        await postMessage(this.id, this.points);
    }

    async addToPrefs(topic, likeBool) {
        const likeOrNot = likeBool ? "likes" : "dislikes";
        await this.database.addToPrefs(this.id, topic, likeOrNot);
    }

    async updatePosition() {
        console.log(this.context)
        this.position = {
            latitude: this.context.region.latitude + (gaussian(0, 0.2, 0.1, 0.03) - 0.1),
            longitude: this.context.region.longitude + (gaussian(0, 0.2, 0.1, 0.03) - 0.1)
        };
    }

    async update() {
        this.updateCooldown++;
        this.updateCooldown %= this.updateCooldownMax;

        if (this.updateCooldown == 0) {
            this.updatePoints(1);
        }
        if (!this.updateCooldown % this.updateInterval) {
            this.updatePosition();
        }
    }

}