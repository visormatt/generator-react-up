// Just to keep the Class a bit cleaner
export default {
  customize: {
    default: true,
    message: 'Would you like to continue customizing?',
    name: 'customize',
    type: 'confirm'
  },

  domain: {
    default: 'example.com',
    message: 'Enter a custom domain:',
    name: 'domain',
    type: 'input'
  },

  template: {
    default: '_templates/',
    message: 'Enter a local template path',
    name: 'path',
    type: 'input'
  }
};
