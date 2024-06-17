let reset = document.querySelector('.reset');
let inputs = document.querySelector('.inputs');
let lives = document.querySelector('.remaining-guess') ;
let wrongSpan = document.querySelector('.incorrect');
let incorrect =[];
let correct =[];
let word;
let html;
function getWord(){
    incorrect = [];
    correct = [];
    let randomWord = game[Math.floor(Math.random()*game.length)];
    word = randomWord.word;
    let hint = document.querySelector('.hint');
    let hintStatement = randomWord.hint;
    lives.textContent = 8;

    let html = '';
    for(let i = 0 ; i<word.length ;i++){
        html += `<input type="text">`
        inputs.innerHTML = html;
    }
    hint.innerText = hintStatement;
}
getWord()
reset.addEventListener('click', getWord);
let hiddin = document.querySelector('.hiddin');
document.addEventListener('keydown',function(){
    hiddin.focus()
})
function initGame(e){
    let key = e.target.value;
    if (key.match(/^[A-Za-z]+$/) && !incorrect.includes(key) ){
        if(word.includes(key)){
            for (let i = 0; i < word.length; i++) {
                if (word[i] === key){
                    inputs.querySelectorAll('input')[i].value = key
                    correct.push(key);
                    window.onkeyup = function(){
                         if ( word.length == correct.length ){
                        window.alert('that is right')
                    }
                    }
                   
                   
                }else{
                }
                hiddin.value ='';
                
            }
        }else{
           hiddin.value ='';
           lives.textContent--;
           incorrect.push(key);
           if(correct.length === word.length){
            window.alert('that is right');
            initGame(e)

           }
           else if (lives.textContent<1 ){
        window.alert('game over!');
        for (let i = 0; i < word.length; i++) {
                inputs.querySelectorAll('input')[i].value = word[i]
            hiddin.value ='';
            incorrect= [];
            initGame(e);
        }

    }
        }
    }
    wrongSpan.innerHTML = incorrect;
    hiddin.value ='';
}
hiddin.addEventListener('input', initGame)
