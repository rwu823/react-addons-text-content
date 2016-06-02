[![version](https://img.shields.io/npm/v/react-addons-text-content.svg?label=version)](https://www.npmjs.org/package/react-addons-text-content) [![Build Status](https://img.shields.io/travis/rwu823/react-addons-text-content.svg?branch=master)](https://travis-ci.org/rwu823/react-addons-text-content/) [![Coverage](https://img.shields.io/coveralls/rwu823/react-addons-text-content.svg)](https://coveralls.io/github/rwu823/react-addons-text-content)

# react-addons-text-content

Like DOM API's `Node.textContent` and it works in React Element

## Install

```sh
$ npm install --save react-addons-text-content
```



## Usage

```javascript
import textContent from 'react-addons-text-content'
 
render() {
  const {children} = this.props
  const text = textContent(children)
  
  return (...)
}
```



## Examples

```javascript
test('should be got text `Hello World`', assert => {
  const Com =
      <div>
        <h1>Hello</h1> World
      </div>

  assert.is(textContent(Com), `Hello World`)
})
```

```javascript
test('array children', assert => {
  const Com = (
    <div>
      <h1>Hello</h1> World
      {
        ['a', <h2>b</h2>]
      }
    </div>
  )
  
  assert.is(textContent(Com), `Hello Worldab`)
})
```

```javascript
test('array component', assert => {
  const Com = (
    [
      <h1>a</h1>, 'b', 'c',
      <div>
        <h2>x</h2>y
      </div>
    ]
  )

  assert.is(textContent(Com), `abcxy`)
})
```



## API

### textContent([React Element])