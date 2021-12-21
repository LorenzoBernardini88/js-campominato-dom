
let button = document.getElementById('button');//seleziono button richiamando id dell'elemento.
//let imgHidden = document.getElementsByClassName('ms_game_img');
let griglia = document.getElementById('ms_griglia');// selezionio div contenitore griglia richiamando la classe.
let bombArr = [];


button.addEventListener("click", function(){
    // imgHidden.classList.add('hidden');s
    let scelta = document.getElementById('select').value;

    griglia.innerHTML = '';
    griglia.classList.remove('container');

    if(scelta == 1){

        griglia.classList.add('ms_container1')
        generaGriglia( 100 )

    }else if(scelta == 2) {

        griglia.classList.add('ms_container2');
        generaGriglia( 81 )

    }else {

        griglia.classList.add('ms_container3');
        generaGriglia( 49 )
        
    }
    console.log(bombArr);
    generaBomb( 16 );

    let box = document.getElementsByClassName('casella');
    for (i=0; i<box.length; i++) {
        
        box[i].addEventListener('click',function(){

            //prendo il numero della cella che ho cliccato
            const numeroCella = parseInt( this.innerHTML ); 
            this.classList.add('color');
            //se il numero è presente nell'array di bombe, ho perso
            if( bombArr.includes( numeroCella ) )
            {
                this.classList.add('red');
                console.log('HAI TROVATO UNA BOMBA!');
            }
        })
    }
    
})


function generaGriglia( numeroCelle )
{
    for(i=1; i<=numeroCelle; i++){
        griglia.innerHTML += `<div class="casella">${i}</div>`;
    }
}


function generaBomb( numBomb ){

    while( bombArr.length < numBomb )
    {
        let numRandom = Math.floor(Math.random()*100+1);
        if( !bombArr.includes(numRandom)){
        bombArr.push(numRandom);
        }
    }

}
    




