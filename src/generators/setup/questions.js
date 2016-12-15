// Just to keep the Class a bit cleaner
export default {
  customize: {
    default: true,
    message: 'Would you like to run the setup?',
    name: 'customize',
    type: 'confirm'
  },

  domain: {
    default: 'example.com',
    message: 'Enter a custom domain:',
    name: 'domain',
    type: 'input'
  },

  relative: {
    default: true,
    message: 'Run generator from the current directory?',
    name: 'relative',
    type: 'confirm'
  },

  template: {
    default: '_templates/',
    message: 'Enter a local template path',
    name: 'templates',
    type: 'input'
  }
};
