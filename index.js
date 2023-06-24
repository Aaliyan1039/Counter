// document.getElementById("count").innerText = 5



let countEl=document.getElementById("count-el")
let saveEl=document.getElementById("save-el")

console.log(countEl);


let count = 0;
function increment(){
    //console.log("This button was pressed");
    count++;
    countEl.innerText=count;
    }
function decrement (){
    if (count > 0) {
    count--;
    //console.log("this button was pressed");
    countEl.innerText=count;
    }
    
}
let save1 = 0;
let save2 = 0;
function save(){ 
    // console.log("This button was pressed");
    if (save2 >= 0) {
    save2 = count;
    save1=count + " - ";
    saveEl.textContent+=save1;
    count=0;
    console.log(save1);
    countEl.innerText = count ; }
    
    }
function reload () {
    countEl.innerText = save2;
}

    



