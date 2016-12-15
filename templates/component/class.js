// Vendor
import React from 'react';

// Internal

// Setup

/**
 * @class <%%= name %>
 * @description Brief description
 */
class <%%= name %> extends React.Component {
  // https://goo.gl/g1KBEL
  constructor() {
    super();

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  // https://goo.gl/JF9C1l
  componentWillMount() {}

  // https://goo.gl/cYkK3s
  componentDidMount() {}

  // https://goo.gl/5wgkZj
  componentWillReceiveProps(nextProps) {}

  // https://goo.gl/eIiU56
  shouldComponentUpdate(nextProps, nextState) {}

  // https://goo.gl/lLPyps
  componentWillUpdate(nextProps, nextState) {}

  // https://goo.gl/WgsPWE
  componentDidUpdate(prevProps, prevState) {}

  // https://goo.gl/cGM9sI
  componentWillUnmount() {}

  /**
   * Just a sample click event
   */
  onClick() {
    console.log(`- onClick event`, this.state);
  }

  // https://goo.gl/HBJp32
  render() {
    return (
      <div className="<%%= slug %>"
        onClick={ this.onClick }>
        <h2><%%= name %></h2>
      </div>
    );
  }
};

// Enforce required properies or methods
<%%= name %>.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default <%%= name %>;
