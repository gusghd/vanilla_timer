export default class Input {
    init() {
        const container = document.querySelector('.input-area');
        const template = `
            <input id="input-timer" placeholder="Input Timer" />
            <button id="regist-btn">등록</button>
        `;
    
    
        container.innerHTML = template;
    
        this.bindEvent();
    }

    bindEvent() {
        const registHandelr = () => {
    
            const input = document.getElementById('input-timer');
            const value = parseInt(input.value, 10);
    
            if (value !== 'NaN' && value <= 60) {
                const event = new CustomEvent('registTimer', {detail: {timer: value}});
                document.dispatchEvent(event);
                input.value = '';
            } else {
                alert('올바른 값을 입력해주세요.');
                input.value = '';
            }
    
        };
    
        document.getElementById('regist-btn').addEventListener('click', registHandelr);
        document.getElementById('input-timer').addEventListener('keydown', (e) => {
            if(e.code === 'Enter') {
                registHandelr();
            }
        })
    }
}