let PlanWraper = document.querySelectorAll('.form__PlanWraper');
let summ = document.querySelector('#summ');
let numberResult = document.querySelector('#numberResult');

summ.innerHTML = 0;
function Coef(){
    let coef = document.querySelector('#coef').value;
    return coef.value;
};

for (i=0; i<PlanWraper.length; i++) {
    PlanWraper[i].addEventListener("click", function(){
        for (i=0; i<PlanWraper.length; i++) {
            PlanWraper[i].classList.remove('form__PlanWraper--active');
        };
        this.classList.add('form__PlanWraper--active');
        let sumitem = this.querySelector('.form__Planprise').innerHTML;
        Coef();
        summ.innerHTML = sumitem * coef.value;
        let number = this.querySelector('.number').innerHTML;
        numberResult.innerHTML = number;
        document.querySelector('#coef').addEventListener('change', function() {
            Coef()
            summ.innerHTML = sumitem * coef.value;
        });
    });
};






