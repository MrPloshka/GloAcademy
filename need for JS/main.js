const score = document.querySelector('.score'),
    start = document.querySelector('.start'),
    gameArea = document.querySelector('.gameArea'),
    car = document.createElement('div');
    
    car.classList.add('car');


    start.addEventListener('click', startGame);    //методы = функции уже записанные в джэс или которые мы сами написали
    document.addEventListener('keydown', startRun);
    document.addEventListener('keyup', stopRun);

    const keys = {
        ArrowUp: false,  //имя свойства: значение
        ArrowDown: false,
        ArrowLeft: false,
        ArrowRight: false
    };

    const setting = {
        start: false,
        score: 0,
        speed: 3
    };

    function startGame(){
        start.classList.add('hide');
        setting.start = true;
        gameArea.appendChild(car);
        requestAnimationFrame(playGame);
    }

    function playGame(){
        console.log('Play Game!');
        if (setting.start === true){
            requestAnimationFrame(playGame);
        }
    }

    function startRun(event){
        event.preventDefault();
        keys[event.key] = true;
    }

    function stopRun(event){
        event.preventDefault();
        keys[event.key] = false;
    }