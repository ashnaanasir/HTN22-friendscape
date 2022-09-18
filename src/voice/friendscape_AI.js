// https://docs.cohere.ai/generate-reference
// https://docs.cohere.ai/api-reference/
// cohere HTN sign up: https://os.cohere.ai/register?utm_source=sponsorship&utm_medium=event&utm_campaign=hackthenorth2022
const cohere = require('cohere-ai');

// our NLP class
class friendscape_AI {
    // initializes the AI API using its api key
    constructor(api_key = "") {
        cohere.init(api_key);
    }

    // the AI generates a text response from input audio
    async generate_response (input) {
        const response = await cohere.generate({ prompt: input });
        return `${response.body.generations[0].text}`;
    }
}

ai = new friendscape_AI('ysZygoq6DRCGW7FPzlSaYBUhB5qENdBw96KMPFNx');
ai.generate_response("Why are we still here? just to suffer?").then(function(result) {
    console.log(result) // "Some User token"
})