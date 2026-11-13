let instance = null;

class counter {
  getInstance() {
    if (!instance) {
      if (instance) {
        throw new Error('you can only create one instance!');
      }
    }
    instance = this;
  }
}

const counter1 = new counter();
const counter2 = new counter();

console.log(counter1.getInstance() === counter2.getInstance());
