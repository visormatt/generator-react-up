// Vendor
import React from 'react';

/**
 * @class <%%= name %>
 * @description Brief description
 */
class <%%= name %> extends React.Component {
  render() {
    return (
      <div className="<%%= slug %>">
        <h2><%%= name %></h2>
      </div>
    );
  }
}

// Enforce required properies or methods
<%%= name %>.propTypes = {
  // active: React.PropTypes.bool.isRequired
};

const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter))
  }
});

// Export the Redux connected component
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(<%%= name %>);
