// Setup any preferred defaults
const TEST_EXT = '.test.js';
const TEST_FOLDER = '_test';

/**
 * @description Modify the existing configurations or create your own
 * @example yo react-up SomeName <key>
 */
const mappings = (data = {}) => {
  const { args, name } = data;

  // NOTE: Uncomment the line below to see the data available to the templates
  // console.log('- available template data:', data);

  /**
   * @description The idea is that you can setup your own template sets and
   */
  return {

    /**
     * @name yo react-up <ReactComponentName> class
     */
    class: {
      description: 'React Component',
      detail: 'Create a `React Class` w/ testing folder + stub.',
      files: [
        ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
        ['common/package.json', `${ name }/package.json`],
        ['common/styles.scss', `${ name }/styles.scss`],
        ['component/class.js', `${ name }/${ name }.js`]
      ]
    },

    /**
     * @name yo react-up <ComponentName> pure
     */
    pure: {
      description: 'Functional Component',
      detail: 'Create a `Functional Component` w/ testing folder + stub.',
      files: [
        ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
        ['common/package.json', `${ name }/package.json`],
        ['common/styles.scss', `${ name }/styles.scss`],
        ['component/pure.js', `${ name }/${ name }.js`]
      ]
    },

    /**
     * @name yo react-up <name> test
     */
    test: {
      description: 'Test Stub',
      detail: `Create a test file: ${ args[0] }`,
      files: [
        ['_test/index.js', `${ args[0] }${ TEST_EXT }`]
      ]
    },

    /**
     * @name yo react-up MyExample example
     * @description This one is for demonstration purposes.
     *
     * Demonstrates:
     *  - uses TEST_FOLDER and TEST_EXT constants set in `_templates/defaults.js`
     *  - intentional template file is missing to demonstrate feedback
     *  - contains working example of various template tags
     *  - simple files renaming and multi-level folder structures
     */
    example: {
      description: 'example',
      detail: 'Create an example component?',
      files: [
        ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
        ['example/README.md', `${ name }/sub-folder/custom.md`],
        ['example/README.md', `${ name }/README.md`],
        ['something/that/doesnt/exist.md', `${ name }/README.md`]
      ]
    }
  };
};

module.exports = mappings;
