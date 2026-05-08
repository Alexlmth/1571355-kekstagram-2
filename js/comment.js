import {comment, names} from './data.js';
import {getRandomArrayItem, getRandomInteger} from './util.js';

const createMessage = () => {
  const arr = [];
  for (let i = 1; i <= getRandomInteger(1, 2); i++) {
    arr.push(getRandomArrayItem(comment));
  }
  return arr.join('');
};

const createComment = (index) => ({
  id: index,
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
  message: createMessage(),
  name: getRandomArrayItem(names),
});

const createComments = () => {
  const arr = [];
  for (let i = 1; i <= getRandomInteger(0, 30); i++) {
    arr.push(createComment(i));
  }
  return arr;
};

export {createComments};
