import {guantityPictures, descriptions} from './data.js';
import {getRandomInteger} from './util.js';
import {createComments} from './comment.js';

const createPictureItem = (index) => ({
  id: index,
  url: `photos/${index}.jpg`,
  description: descriptions[index - 1],
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const createArrayPictures = () =>
  Array.from({ length: guantityPictures }, (_, pictureIndex) =>
    createPictureItem(pictureIndex + 1)
  );

export {createArrayPictures};
