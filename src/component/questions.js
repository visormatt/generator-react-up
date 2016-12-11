// Vendor
import chalk from 'chalk';

// Just to keep the Class a bit cleaner
const createQuestions = (data) => {
  const { tag, type } = data;

  return [{
    type: 'confirm',
    name: 'create',
    message: `Create ${ chalk.cyan(type) } component ${ chalk.yellow(tag) }`,
    default: true
  }, {
    type: 'confirm',
    name: 'tests',
    message: `Create ${ chalk.cyan('test') } folder & stub?`,
    default: true
  }];
};

export default createQuestions;
