const Trie = require('./Trie')

/**
 * Returns a function that pushes value of node to the input array
 * @param {array} output the array all node values should be pushed to
 * @returns {function}
 */
function collector (output = []) {
  return function collect (node) {
    if (!node.value) return
    output.push(node.value)
  }
}

/**
 * Adds all strings to a trie
 * Preorder traverses trie
 * Collects sorted output strings
 * @param {array} strings an array of strings to sort lexicographically
 */
function sortStrings (strings) {
  // put all strings into a trie
  const trie = new Trie()
  for (let s of strings) {
    trie.insert(s, s)
  }
  // traverse the trie in preorder and collect leaf values
  const output = []
  const collect = collector(output)
  trie.traversePreorder(collect)
  return output
}

module.exports = sortStrings
