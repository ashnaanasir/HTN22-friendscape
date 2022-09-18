const axios = require("axios");
const fs = require("fs");


// our STT class
class friendscape_STT {
    assembly = [];

    // initializes the AI API using its api key
    constructor(api_key = "") {
        this.assembly = axios.create({
            baseURL: "https://api.assemblyai.com/v2",
            headers: {
                authorization: api_key,
                "content-type": "application/json",
                "transfer-encoding": "chunked",
            },
        });
    }

    // get text from cohere API
    async get_STT_res (data) {
        let json_res = await this.assembly.post("/upload", data)
        .then((res) => {/*console.log(res.data);*/ return res;});
    
        let json_res2 = await this.assembly
        .post("/transcript", { audio_url: json_res["data"]["upload_url"]
        })
        .then((res) => {/*console.log(res.data);*/ return res})
        .catch((err) => {console.error(err);});
    
        let stat = "queued"
        let STT_res = {}
    
        do {
            await sleep(500);
            STT_res = await this.assembly
            .get(`/transcript/${json_res2["data"]["id"]}`)
            .then((res) => {/*console.log(res.data);*/ stat = res["data"]["status"]; return res})
            .catch((err) => console.error(err));
        } while (stat != "completed" )
    
        return STT_res["data"]["text"];
        
    }

    // reads an audio file and converts it to text, if you want to input real time audio data you can try audio file streams or something like that
    async read_file (file) {
        let audio_data = fs.readFileSync(file,  function (err, data) {
            if (err) {return console.error(err)} else {return data}
        }
        )
        //console.log(audio_data)
        return await this.get_STT_res(audio_data);
    }
    
    // converts an audio file to text
    async STT_synthesize(file) {
        return await this.read_file(file)
    }
}

function sleep(ms) {
    return new Promise(resolveFunc => setTimeout(resolveFunc, ms));
}


//test code:
const file = "./Why are we still here just to suffer.mp3";
let STT = new friendscape_STT("dae5f69676b245c6a71ec100e4cc4074")
STT.STT_synthesize(file).then(function(result) {
    console.log(result) // "Some User token"
})
