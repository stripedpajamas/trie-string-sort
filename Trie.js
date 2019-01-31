/**
 * A trie node
 */
class TrieNode {
  constructor () {
    this.value = null
    // using an array for children, so byte = idx
    // this is a big waste of space and needs to be optimized
    // i.e. potentially 255 null values in the children array per byte
    this.children = [] 
  }
}

module.exports = TrieNode
