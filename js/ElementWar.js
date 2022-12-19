let playerAttack
let enemyAttack
let playerLives = 3
let enemyLives = 3
let result

function playStart(){
    let buttonMonster = document.getElementById('Monster-button')
    buttonMonster.addEventListener('click', buttonMonsterSelect)
    
    let button_fire = document.getElementById('Fire-button')
    button_fire.addEventListener('click', attackFire)
    let button_water = document.getElementById('Water-button')
    button_water.addEventListener('click', attackWater)
    let button_earth = document.getElementById('Earth-button')
    button_earth.addEventListener('click', attackEarth)    
}
window.addEventListener('load', playStart)
function attackFire(){
    playerAttack = 'Fire'
    enemyAttackAlea()
}
function attackWater(){
    playerAttack = 'Water'
    enemyAttackAlea()
}
function attackEarth(){
    playerAttack = 'Earth'
    enemyAttackAlea()
}
function enemyAttackAlea(){
    aleatoryAttack = aleatorio(1,3)

    if (aleatoryAttack == 1){
        enemyAttack = 'Fire'
    
    }else if(aleatoryAttack == 2){
        enemyAttack = 'Water'
        
    }else{
        enemyAttack = 'Earth'
    } 
    combat()
    createMessage()
}


function combat(){ 
    let spanPlayerLives = document.getElementById('player_lives')
    let spanEnemyLives = document.getElementById('enemy_lives')   
    if (enemyAttack == playerAttack) {
        result = ("Draw")
    }else if (playerAttack == 'Fire' && enemyAttack == 'Earth'){
        result = ("You're win!") 
        enemyLives-- 
        spanEnemyLives.innerHTML = enemyLives     
    }else if (playerAttack == 'Water' && enemyAttack == 'Fire'){
        result = ("You're lose")        
        playerLives--  
        spanPlayerLives.innerHTML = playerLives            
    }else if (playerAttack == 'Earth' && enemyAttack == 'Water'){
        result = ("You're Win") 
        enemyLives-- 
        spanEnemyLives.innerHTML = enemyLives      
    } else{
        result = ("You're lose")
        playerLives--
        spanPlayerLives.innerHTML = playerLives        
    }
    remainingLives()   
}
function remainingLives(){
    if (playerLives == 0){
        alert("You are the loser!") 
    } else if (enemyLives == 0){
        alert("You are the Champion!!")
    }
}

function createMessage(){
    let sectionMessages = document.getElementById('Message')
    let paragraph = document.createElement('p')
    paragraph.innerHTML = 'Your Monster attacked with ' + playerAttack  + ' The enemy Monster  attacked with ' + enemyAttack + '-' + result

    sectionMessages.appendChild(paragraph)
}

function buttonMonsterSelect() {
    
    let inputTaquito = document.getElementById('Taquito')
    let inputChesquito = document.getElementById('Chesquito')
    let inputVampirin = document.getElementById('Vampirin')
    let inputGarguis = document.getElementById('Garguis')
    let inputEsquitin = document.getElementById('Esquitin')
    let inputBarbacha = document.getElementById('Barbacha')
    let spanMonsterPlayer = document.getElementById('monster-player')
        
    if (inputTaquito.checked){
        spanMonsterPlayer.innerHTML = 'Taquito'
    } else if (inputChesquito.checked) {
        spanMonsterPlayer.innerHTML = 'Chesquito'
    } else if (inputVampirin.checked) {
        spanMonsterPlayer.innerHTML = 'Vampirin'
    } else if(inputGarguis.checked){
        spanMonsterPlayer.innerHTML = 'Garguis'
    } else if(inputEsquitin.checked){
        spanMonsterPlayer.innerHTML = 'Esquitin'
    } else if(inputBarbacha.checked){
        spanMonsterPlayer.innerHTML = 'Barbacha'    
    } else {
        createMessage('You need to select an option')    
    }
    MonsterEnemSelect()
}

function MonsterEnemSelect(){
    let spanMonsterOpponent = document.getElementById('monster-opponent')
    let Atackenem = aleatorio(1,6)    
    
    if (Atackenem == 1) {
        spanMonsterOpponent.innerHTML = 'Taquito'
    }else if (Atackenem == 2){
        spanMonsterOpponent.innerHTML = 'Chesquito'
    } else if (Atackenem == 3){
        spanMonsterOpponent.innerHTML = 'Vampirin'
    }else if (Atackenem == 4){
        spanMonsterOpponent.innerHTML = 'Garguis'    
    }else if (Atackenem == 5){
        spanMonsterOpponent.innerHTML = 'Esquitin'    
    }else if (Atackenem == 6){
        spanMonsterOpponent.innerHTML = 'Barbacha'    
    }
}
function aleatorio(min, max){
    return Math.floor(Math.random() * (max - min) + min)
}    