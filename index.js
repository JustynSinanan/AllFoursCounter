let count1 = 0;

document.getElementById("decreaseBtn").onclick = function(){
    if(count1 != 0){
        count1 -= 1;
        document.getElementById("counter").innerHTML = count1;
    }
}

document.getElementById("resetBtn").onclick = function(){
    count1 = 0;
    document.getElementById("counter").innerHTML = count1;
}

document.getElementById("increaseBtn").onclick = function(){
    if(count1 < 14){
        count1 += 1;
        document.getElementById("counter").innerHTML = count1;
    }
    if(count1 == 14){
        document.getElementById("counter").innerHTML = count1 + " - " + "WINNER!";
    }
}

let count2 = 0;

document.getElementById("decreaseBtn2").onclick = function(){
    if(count2 != 0){
        count2 -= 1;
        document.getElementById("counter2").innerHTML = count2;
    }
}

document.getElementById("resetBtn2").onclick = function(){
    count2 = 0;
    document.getElementById("counter2").innerHTML = count2;
}

document.getElementById("increaseBtn2").onclick = function(){
    if(count2 < 14){
        count2 += 1;
        document.getElementById("counter2").innerHTML = count2;
    }
    if(count2 == 14){
        document.getElementById("counter2").innerHTML = count2 + " - " + "WINNER!";
    }
}

document.getElementById("clickme").onclick = function(){
    const team1 = document.getElementById("team1input").value;
    document.getElementById("demo").innerHTML = team1;
}

document.getElementById("clickme2").onclick = function(){
    const team1 = document.getElementById("team2input").value;
    document.getElementById("demo2").innerHTML = team1;
}