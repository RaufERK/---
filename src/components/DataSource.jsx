import { nanoid } from 'nanoid';
import faker from 'faker';

class DataSource {
  constructor() {
    this.messages = [];
    for (let index = 0; index < 10; index++) {
      this.createPost();
    }
    this.interval = null;
  }

  createPost() {
    this.messages.push({ id: nanoid(), text: faker.lorem.text() });
  }

  addChangeListener(cbFoo) {
    this.interval = setInterval(() => {
      this.createPost();
      cbFoo();
    }, 10000);
    console.log('addChangeListener! :-)');
  }

  removeChangeListener() {
    clearInterval(this.interval);
    console.log('removeChangeListener! ;-(');
  }

  getComments() {
    return this.messages;
  }
}

export default new DataSource();
