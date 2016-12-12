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

  /**
   * NOTE: Uncomment to see what else is available for further customization.
   * This data is passed to each template and can be used in each template.
   */
  // console.log('- available template data:', data);

  return {
    class: [
      ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
      ['common/package.json', `${ name }/package.json`],
      ['common/styles.scss', `${ name }/styles.scss`],
      ['component/class.js', `${ name }/${ name }.js`]
    ],

    pure: [
      ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`],
      ['common/package.json', `${ name }/package.json`],
      ['common/styles.scss', `${ name }/styles.scss`],
      ['component/pure.js', `${ name }/${ name }.js`]
    ],

    test: [
      ['_test/index.js', `${ name }/${ TEST_FOLDER }/${ name }${ TEST_EXT }`]
    ],

    /**
     * A very dumbed down example of using an a key and array of files which take
     * source (relative to local templates) and an optional destination. If the
     * user doesn't supply a destination it copy it as it's found.
     */
    example: [
      ['common/package.json', 'common/package.json']
    ]
  };
};

module.exports = mappings;
