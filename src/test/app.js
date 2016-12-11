// Vendor
import path from 'path';
import assert from 'yeoman-assert';
import helpers from 'yeoman-test';

describe('generator-react-up TestComponent', () => {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators'))
      .withPrompts({
        create: true,
        tests: true
      })
      .toPromise();
  });

  it('creates files', () => {
    assert.file([
      '__test__/TestComponentSpec.js',
      'package.json',
      'TestComponent.js',
      'styles.scss'
    ]);
  });
});
