# Generator Templates:
What started as a generator to simply create some pre-defined files and stub them has evolved to included user defined boiler plates. Yeoman uses [EJS.co](http://ejs.co/) as it's templating engine so we've just built off of that.

Using the object returned from `mappings.js` we get some basic information. From there we loop over the array of files return which each item is an array of `[source, destination]` and copy the files in place. `Destination` is optional and if not provided we'll copy the structure it had coming in.


```js
// Here we output the marker tags with `%%`
const before = {
  args: [
  <%% args.forEach((args) => { %>
    '<%%= args -%>',
  <%% }); -%>
  ],
  config: {
    domain: '<%%= config.domain %>',
    root: '<%%= config.root %>',
    templates: '<%%= config.templates %>',
  },
  current: '<%%= current %>',
  date: '<%%= date %>',
  name: '<%%= name %>',
  slug: '<%%= slug %>',
  tag: '<%%- tag %>',
  type: '<%%= type %>',
}

// And this is the generated output
const after = {
  args: [
<% args.forEach((args) => { -%>
    '<%= args -%>',
<% }); -%>
  ],
  config: {
    domain: '<%= current %>',
    root: '<%= current %>',
    templates: '<%= current %>'
  },
  current: '<%= current %>',
  date: '<%= date %>',
  name: '<%= name %>',
  slug: '<%= slug %>',
  tag: '<%- tag %>',
  type: '<%= type %>'
}
```
