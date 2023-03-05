(() => {
  'use strict'
  const print = s => process.stdout.write(s + '\n')
  const deck = () => {
    return function f(n, a) { return n===0 ? a : [...f(n-1,a),n] }(52,[])
  }
  process.stdout.encoding = 'utf8'
  print('Pontoon')
  print(deck().toString())
})()
