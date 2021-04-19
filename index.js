import Input from './input.js';

class Start {

    timers = [];
    id = 0;
    input;
    
    constructor() {
        this.input = new Input();
    }

    initialize() {
        this.input.init();
        this.addEvnet();
    }
    

    addEvnet() {
        document.addEventListener('registTimer', (e) => {
            const timer = e.detail.timer;
            this.register(timer);
        })

        const deleteAll = document.getElementsByClassName('delete-all-btn')[0];
        deleteAll.addEventListener('click', () => {
            this.timers.forEach(item => {
                clearInterval(item.interval);
                item.element.remove();
            })
        })
    }

    register(num) {
        const ul = document.getElementsByClassName('timer-list')[0];
        const li = document.createElement('li');
        const span = document.createElement('span');
        span.innerText = num;

        li.appendChild(span);
        ul.appendChild(li);

        this.id ++;

        const interval = setInterval(() => {
            num = num - 1;
            span.innerText = num;
            if (num < 0) {
                clearInterval(interval);
                li.remove();
                this.timers = this.timers.filter(item => item.id !== timer.id);
            }
        }, 1000)

        const timer = {
            id: this.id,
            element: li,
            interval
        }

        this.timers.push(timer);
    }
}

const start = new Start();

start.initialize();