// Vendor
import React from 'react';
import td from 'testdouble';
import { expect } from 'chai';
import { shallow } from 'enzyme';

// Internal
import <%= name %> from '../<%= name %>';

describe('<%= name %>: test', () => {
  let props;

  // Any initialization
  beforeEach(() => {
    props = {
     // stub your component's props here
    };
  });

  // test cases
  it('renders', () => {
    const wrapper = shallow(<<%= name %> {...props} />);

    expect(wrapper).to.not.be.empty();
  });

  // Replace this with your own specs
  it('should have more unit tests', () => {
    expect(false).to.be.true();
  });
});
