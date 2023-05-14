import app from './app/messages.json';
import character from './character/index';
import content from './content/index';

const messagesEnUS = {
  ...app,
  ...character,
  ...content,
}
export default messagesEnUS;
