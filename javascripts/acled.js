// var topics = ["Battles", "Violence against civilians", "Remote violence", "Riots/Protests", "Others"];

var topics = ["Assassination",
    "Hijacking",
    "Kidnapping",
    "Barricade Incident",
    "Bombing/Explosion",
    "Armed Assault",
    "Unarmed Assault",
    "Facility/Infrastructure Attack",
    "Unknown"];

var dataFileName, totalFrequenciesABox;

function getTop(suddenData, top){
    suddenData.forEach((data) => {
        topics.forEach((topic) => {
            data["words"][topic] = data["words"][topic]
                .slice(0,top);
        })
    });
    return suddenData;
}

function loadFreq(callback) {
    d3.json("data/GTD/" + dataFileName + "Freq.json", function (error, freqData) {
        //d3.json("data/" + dataFileName + "Freq.json", function (error, freqData) {
        if (error) {
            return callback(error);
        }
        else {
            var data = freqData.slice(26,47);
            totalFrequenciesABox = callback(data);
            // console.log(totalFrequenciesABox);
        }
    });
}
function dataHandler(data){
    return data;
}

function loadAcledDataAsia() {
    dataFileName = "Asia";
    loadFreq(dataHandler);
    d3.json("data/Asia.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("hi");
            var temp = JSON.parse(JSON.stringify(inputData));
            var topData = getTop(temp, 50);        // same input, output specific

            console.log("final data:");
            console.log(topData);

            data = tfidf(topData);
            console.log("Oh");
            draw(data);
        }
    });
}
function loadAcledDataME() {
    dataFileName = "MiddleEast";
    loadFreq(dataHandler);
    d3.json("data/MiddleEast.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {

            var temp = JSON.parse(JSON.stringify(inputData));
            var topData = getTop(temp, 120);        // same input, output specific


            data = tfidf(topData);
            console.log("Oh");
            draw(data);
            // timeArcs()
        }
    });
}
function loadAcledDataAfrica() {
    dataFileName = "Africa";
    loadFreq(dataHandler);
    d3.json("data/Africa.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {

            var temp = JSON.parse(JSON.stringify(inputData));
            var topData = getTop(temp, 30);        // same input, output specific


            data = tfidf(topData);
            console.log("Oh");
            draw(data);
        }
    });
}
function loadAcledDataMEMonth() {
    dataFileName = "MiddleEastMonth";
    loadFreq(dataHandler);
    d3.json("data/MiddleEastMonth.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {

            var temp = JSON.parse(JSON.stringify(inputData));
            var topData = getTop(temp, 50);        // same input, output specific

            data = tfidf(topData);
            console.log("Oh");
            draw(data);
            // timeArcs()
        }
    });
}

function loadGTD() {
    dataFileName = "gtd";
    loadFreq(dataHandler);
    d3.json("data/GTD/gtd.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {

            // var temp = inputData.slice(26,47);
            var temp = JSON.parse(JSON.stringify(inputData));
            var topData = getTop(temp, 80);        // same input, output specific

            data = tfidf(topData);
            draw(data);
            // timeArcs()
        }
    });
}