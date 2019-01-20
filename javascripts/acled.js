var topics = ["Battles", "Violence against civilians", "Remote violence", "Riots/Protests", "Others"];
var acledFileName, totalFrequenciesABox;

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
    d3.json("data/" + acledFileName + "Freq.json", function (error, freqData) {
        if (error) {
            return callback(error);
        }
        else {
            totalFrequenciesABox = callback(freqData);
            console.log(totalFrequenciesABox);
        }
    });
}
function dataHandler(data){
    return data;
}

function loadAcledDataAsia() {
    acledFileName = "Asia";
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
    acledFileName = "MiddleEast";
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
    acledFileName = "Africa";
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
    acledFileName = "MiddleEastMonth";
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