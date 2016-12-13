// Setup any preferred defaults
const TEST_EXT = '.test.js';
const TEST_FOLDER = '_test';

/**
 * @description This file lets you run custom generators / templates using the
 * key as the method
 *
 * @example default mappings include: (class|pure|test|example)
 *    yo react-up:custom SomeName example
 */
const mappings = (data = {}) => {
  const { name } = data;

  // NOTE: Uncomment the line below to see the data available to the templates
  // console.log('- available template data:', data);

  /**
   * @description The idea is that you can setup your own template sets and
   *
   */
  return {

    /**
     * @name yo react-up Name class
     * @description Create a React Functional Component w/ initial
     * testing folder + stub.
     */
    class: [
      ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
      ['common/package.json', `${ name }/package.json`],
      ['common/styles.scss', `${ name }/styles.scss`],
      ['component/class.js', `${ name }/${ name }.js`]
    ],

    /**
     * @name yo react-up Name pure
     * @description Create a self-contained functional component w/ initial
     * testing folder + stub.
     */
    pure: [
      ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
      ['common/package.json', `${ name }/package.json`],
      ['common/styles.scss', `${ name }/styles.scss`],
      ['component/pure.js', `${ name }/${ name }.js`]
    ],

    /**
     * @name yo react-up Name test
     * @description Creates an initial testing folder + stub.
     */
    test: [
      ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`]
    ],

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
    example: [
      ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
      // ['common/DoesntExist.md', `${ name }/README.md`],
      ['example/README.md', `${ name }/sub-folder/custom.md`],
      ['example/README.md', `${ name }/README.md`]
    ]
  };
};

module.exports = mappings;
