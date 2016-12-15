// Vendor
import React from 'react';

// Internal

// Setup

/**
 * @class <%%= name %>
 * @description Brief description
 */
class <%%= name %> extends React.Component {

  /**
   * @link https://goo.gl/g1KBEL
   * @description The constructor for a React component is called before it is
   * mounted. When implementing the constructor for a React.Component subclass,
   * you should call super(props) before any other statement. Otherwise, this.props
   * will be undefined in the constructor, which can lead to bugs.
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
   * @description Invoked immediately before mounting occurs. It is called before
   * render(), therefore setting state in this method will not trigger a re-rendering.
   * Avoid introducing any side-effects or subscriptions in this method. This is the
   * only lifecycle hook called on server rendering. Generally, we recommend using
   * the constructor() instead.
   */
  componentWillMount() {}

  /**
   * @link https://goo.gl/cYkK3s
   * @description Invoked immediately after a component is mounted. Initialization
   * that requires DOM nodes should go here. If you need to load data from a remote
   * endpoint, this is a good place to instantiate the network request. Setting
   * state in this method will trigger a re-rendering.
   */
  componentDidMount() {}

  /**
   * @link https://goo.gl/5wgkZj
   * @description Invoked before a mounted component receives new props. If you
   * need to update the state in response to prop changes (for example, to reset
   * it), you may compare this.props and nextProps and perform state transitions
   * using this.setState() in this method.
   *
   * NOTE: React may call this method even if the props have not changed, so make
   * sure to compare the current and next values if you only want to handle changes.
   * This may occur when the parent component causes your component to re-render.
   *
   * componentWillReceiveProps() is not invoked if you just call this.setState()
   */
  componentWillReceiveProps(nextProps) {}

  /**
   * @link https://goo.gl/eIiU56
   * @description Use shouldComponentUpdate() to let React know if a component's
   * output is not affected by the current change in state or props. The default
   * behavior is to re-render on every state change, and in the vast majority of
   * cases you should rely on the default behavior.
   */
  shouldComponentUpdate(nextProps, nextState) {}

  /**
   * @link https://goo.gl/lLPyps
   * @description Invoked immediately before rendering when new props or state
   * are being received. Use this as an opportunity to perform preparation before
   * an update occurs. This method is not called for the initial render.
   *
   * NOTE: You cannot call this.setState() here. If you need to update state in
   * response to a prop change, use componentWillReceiveProps() instead.
   */
  componentWillUpdate(nextProps, nextState) {}

  /**
   * @link https://goo.gl/WgsPWE
   * @description invoked immediately after updating occurs. This method is not
   * called for the initial render. Use this as an opportunity to operate on the
   * DOM when the component has been updated. This is also a good place to do
   * network requests as long as you compare the current props to previous props
   * (e.g. a network request may not be necessary if the props have not changed).
   *
   * NOTE: Will not be invoked if shouldComponentUpdate() returns false.
   */
  componentDidUpdate(prevProps, prevState) {}

  /**
   * @link https://goo.gl/cGM9sI
   * @description Invoked immediately before a component is unmounted and destroyed.
   * Perform any necessary cleanup in this method, such as invalidating timers,
   * canceling network requests, or cleaning up any DOM elements that were created
   * in componentDidMount
   */
  componentWillUnmount() {}

  /**
   * @link https://goo.gl/HBJp32
   * @description When called, it should examine this.props and this.state and
   * return a single React element. This element can be either a representation
   * of a native DOM component, such as <div />, or another composite component
   * that you've defined yourself.
   *
   * You can also return null or false to indicate that you don't want anything
   * rendered. When returning null or false, ReactDOM.findDOMNode(this) will
   * return null.
   *
   * The render() function should be pure, meaning that it does not modify
   * component state, it returns the same result each time it's invoked, and it
   * does not directly interact with the browser. If you need to interact with
   * the browser, perform your work in componentDidMount() or the other lifecycle
   * methods instead. Keeping render() pure makes components easier to think about.
   *
   * NOTE: Not be invoked if shouldComponentUpdate() returns false.
   */
  render() {
    return (
      <div className="<%%= slug %>">
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
