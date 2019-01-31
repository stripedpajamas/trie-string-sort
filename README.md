# sorting strings with tries

- put all the strings into a trie
- traverse the trie in preorder
- collect leaf nodes into output array

```javascript
const sort = require('.')

const input = [
  'pete',
  'berry',
  'apple',
  'holly',
  'honey',
  'aardvark',
  'water',
  'berries',
  'patrick',
  'washer',
  'notebook'
]

const sorted = sort(input)
/*
[ 'aardvark',
  'apple',
  'berries',
  'berry',
  'holly',
  'honey',
  'notebook',
  'patrick',
  'pete',
  'washer',
  'water' ]
*/
```

## License
MIT
