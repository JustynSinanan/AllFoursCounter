let count1 = 0;

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

document.getElementById("resetBtn2").onclick = function(){
    count1 = 0;
    document.getElementById("counter2").innerHTML = count1;
}

document.getElementById("increaseBtn2").onclick = function(){
    if(count1 < 14){
        count1 += 1;
        document.getElementById("counter2").innerHTML = count1;
    }
    if(count1 == 14){
        document.getElementById("counter2").innerHTML = count1 + " - " + "WINNER!";
    }
}

