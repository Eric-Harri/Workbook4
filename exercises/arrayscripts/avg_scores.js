let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let sum = 0


function getAverage(scores) {
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
        average = sum / scores.length;  
    }
    return console.log(average.toFixed(2));  
}

    getAverage(myScores);
    getAverage(yourScores);