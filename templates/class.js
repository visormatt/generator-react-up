// Vendor
import React from 'react';

// Internal

// Setup

/**
 * @class <%= name %>
 * @description Brief description
 */
class <%= name %> extends React.Component {

  /**
   * @link https://goo.gl/g1KBEL
   */
  constructor() {
    super();

    this.state = {
      open: false
    };

    // Chance to bind anything we need to.
    this.onClick = this.onClick.bind(this);
  }

  /**
   * @link https://goo.gl/JF9C1l
   */
  componentWillMount() {}

  /**
   * @link https://goo.gl/cYkK3s
   */
  componentDidMount() {}

  /**
   * @link https://goo.gl/5wgkZj
   */
  componentWillReceiveProps(nextProps) {}

  /**
   * @link https://goo.gl/eIiU56
   */
  shouldComponentUpdate(nextProps, nextState) {}

  /**
   * @link https://goo.gl/lLPyps
   */
  componentWillUpdate(nextProps, nextState) {}

  /**
   * @link https://goo.gl/WgsPWE
   */
  componentDidUpdate(prevProps, prevState) {}

  /**
   * @link https://goo.gl/cGM9sI
   */
  componentWillUnmount() {}

  /**
   * @link https://goo.gl/HBJp32
   */
  render() {
    return (
      <div className="<%= slug %>">
        <h2><%= name %></h2>
      </div>
    );
  }
};

// Enforce required properies or methods
<%= name %>.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

export default <%= name %>;
