import test from 'ava'
import textContent from '../src'
import React from 'react'

test('should be got text `Hello World`', assert => {
  const Com =
      <div>
        <h1>Hello</h1> World
      </div>

  assert.is(textContent(Com), `Hello World`)
})

test('render variable', assert => {
  const Com =
    <div>
      <h1>Hello</h1> {'World' + '2'}
    </div>

  assert.is(textContent(Com), `Hello World2`)
})

test('render variable2', assert => {
  const Com =
    <div>
      <h1>Hello</h1> {1 + 1}
    </div>

  assert.is(textContent(Com), `Hello 2`)
})

test('should output empty string', assert => {
  const Com = <div />

  assert.is(textContent(Com), '')
})

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

test('array children witth null', assert => {
  const Com = (
    <div>
      <h1>Hello</h1> World
      {
        ['a', null]
      }
    </div>
  )

  assert.is(textContent(Com), `Hello Worlda`)
})

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
