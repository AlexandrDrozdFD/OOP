const getElement = (selection) => {
  const element = document.querySelector(selection);
  if (element) {
    return element;
  } 
  throw new Error (
    `Please check "${selection}" selector, no such element exists`
  );
}

class Counter {
  constructor(element, value) {
    this.counter = element;
    this.value = value;
    this.resetBtn = element.querySelector('.reset');
    this.increaseBtn = element.querySelector('.increase');
    this.decreaseBtn = element.querySelector('.decrease');
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    this.resetBtn.addEventListener('click', this.reset);
    this.increaseBtn.addEventListener('click', this.increase);
    this.decreaseBtn.addEventListener('click', this.decrease);
  }

  reset = () => {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
  increase = () => {
    this.value++;
    this.valueDOM.textContent = this.value;
  }
  decrease = () => {
    this.value--;
    this.valueDOM.textContent = this.value;
  }


}

const firstCounter = new Counter(getElement('.first-counter'), 100)
const secondCounter = new Counter(getElement('.second-counter'), 200)
console.log(firstCounter.value)