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

/**
 * Handles insertions and other functions of the TrieNodes
 */
class Trie {
  constructor () {
    // the root of a Trie is empty
    this.root = new TrieNode()
  }
  insert (key, value) {
    let node = this.root
    for (let c of key) {
      let n = c.charCodeAt(0)
      if (!node.children[n]) {
        node.children[n] = new TrieNode()
      }
      node = node.children[n]
    }
    node.value = value
  }
  traversePreorder (visit, node = this.root) {
    if (typeof visit !== 'function') {
      throw new Error('visit should be a function')
    }
    if (!node) return
    visit(node)
    for (let child of node.children) {
      if (typeof child === 'undefined') continue
      this.traversePreorder(visit, child)
    }
  }
}

module.exports = Trie
