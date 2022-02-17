---
title: 'React for Beginners'
excerpt: 'An explanation of React for Beginners'
coverImage: '/assets/blog/react-beginner/cover.jpg'
date: '2022-02-16T21:00:07.322Z'
author:
  name: Ali Ismail
  picture: '/assets/blog/authors/ali.jpeg'
ogImage:
  url: '/assets/blog/react-beginner/cover.jpg'
---

# React for Beginners

Simply put, react is a JavaScript library used to make interactive UIs bottom up!
This is achieved by creating encapsulated components and mounting them on the DOM.

Here’s an example how you can do this with plain vanilla JavaScript.

```html
<body>
  <div id="root"></div>
  <script type="text/javascript">
    const rootElement = document.getElementById('root')
    const element = document.createElement('div')
    element.textContent = 'Hello World'
    element.className = 'container'
    rootElement.appendChild(element)
  </script>
</body>
```

In this example we are getting the element div by its ID “root”. And then we are creating another element which is also a div. And we are writing “hello world” and giving it the class “container” and appending it to the root div.

And here is an example of how we would do it using the React Library.

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js" />
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js" />
  <script type="text/javascript">
    const rootElement = document.getElementById('root')
    const element = React.createElement('div', {
        className: 'container',
        children: 'Hello World',
    })
    ReactDom.render(element, rootElement)
  </script>
</body>
```

Here is how you would use JSX Syntax
```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js" />
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js" />
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js" />
  <script type="text/babel">
	const rootElement = document.getElementById('root')
	const element = <div className="container">Hello World</div>
	ReactDom.render(element, rootElement)
  </script>
</body>
```

Interpolate Variable in JSX

```html
<body>
  <div id="root"></div>
  <script src="https://unpkg.com/react@16.12.0/umd/react.development.js" />
  <script src="https://unpkg.com/react-dom@16.12.0/umd/react-dom.development.js" />
  <script src="https://unpkg.com/@babel/standalone@7.8.3/babel.js" />
  <script type="text/babel">
	const rootElement = document.getElementById('root')
	const children = 'Hello World'
	const className = 'container'
	const element = <div className={className}>{ children }</div>
	ReactDom.render(element, rootElement)
  </script>
</body>
```


React Fragments 

```html
const element = {
	<React.Fragment>
		<span>Hello</span> <span>World</span>
	</React.Fragment>
}
const element2 = {
	<>
		<span>Hello</span> <span>World</span>
	</>
}
ReactDom.render(element, document.getElementById('root'))
```

