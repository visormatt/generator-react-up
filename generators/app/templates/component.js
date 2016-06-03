import React from 'react';
<% if (radium) { %>import radium from 'radium';<% } %>
import styles from './styles';

/**
 * <<%= name %> />
 *
 * created: <%= date %>
 */
const <%= name %> = (props) => {
  return (
    <div className="<%= slug %>" style={ styles.<%= slug %> }>
      <h2><%= name %></h2>
    </div>
  );
};

// Enforce required properies or methods
<%= name %>.propTypes = {
};

<% if (radium) { %>export default radium(<%= name %>);<% } else { %>export <%= name %>;<% } %>
