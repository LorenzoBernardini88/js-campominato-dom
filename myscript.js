
let button = document.getElementById('button');//seleziono button richiamando id dell'elemento.
//let imgHidden = document.getElementsByClassName('ms_game_img');

button.addEventListener("click", function(){
    // imgHidden.classList.add('hidden');
    let scelta = document.getElementById('select').value;
    let griglia = document.getElementById('ms_griglia');// selezionio div contenitore griglia richiamando la classe.
    griglia.innerHTML = '';
    griglia.classList.remove('container');


    
    if(scelta == 1){

        griglia.classList.add('ms_container1')
        for(i=1; i<=100; i++){
            griglia.innerHTML += `<div class="casella">${i}</div>`;
        }
    }else if(scelta == 2) {

        griglia.classList.add('ms_container2');
        for(i=1; i<=81; i++){
            griglia.innerHTML += `<div class="casella">${i}</div>`;
        }
    }else {
        
        griglia.classList.add('ms_container3');
        for(i=1; i<=49; i++){
            griglia.innerHTML += `<div class="casella">${i}</div>`;
        }
    }
    
    let box = document.getElementsByClassName('casella');
    for (i=0; i<box.length; i++) {
        
        box[i].addEventListener('click',function(){

            this.classList.add('color');
        })
    }

})

    const numBomb = 16;
    let bombArr = [];

    for(i=0; i< numBomb;){
        
        let numRandom = Math.floor(Math.random()*100 +1);
        if(!bombArr.includes(numRandom)){
            
            bombArr.push(numRandom);
            i++;
        }
    }
    console.log(bombArr);



