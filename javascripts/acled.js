var topics = ["Battles", "Violence against civilians", "Remote violence", "Riots/Protests", "Others"];

function getTop(suddenData, top){
    suddenData.forEach((data) => {
        topics.forEach((topic) => {
            data["words"][topic] = data["words"][topic]
                .slice(0,top);
        })
    });
    return suddenData;
}

function loadAcledDataAsia() {
    d3.json("data/Asia.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("hi")
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
    d3.json("data/MiddleEast.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("hi")
            var temp = JSON.parse(JSON.stringify(inputData));
            var topData = getTop(temp, 34);        // same input, output specific

            console.log("final data:");
            console.log(topData);

            data = tfidf(topData);
            console.log("Oh");
            draw(data);
            // timeArcs()
        }
    });
}
function loadAcledDataAfrica() {
    d3.json("data/Africa.json", function (error, inputData) {
        if (error) {
            console.log(error);
        }
        else {
            console.log("hi")
            var temp = JSON.parse(JSON.stringify(inputData));
            var topData = getTop(temp, 30);        // same input, output specific

            console.log("final data:");
            console.log(topData);

            data = tfidf(topData);
            console.log("Oh");
            draw(data);
        }
    });
}