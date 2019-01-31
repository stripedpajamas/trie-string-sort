const TrieNode = require('./Trie')

function insert (root, key, value) {
  let node = root
  for (let c of key) {
    let n = c.charCodeAt(0)
    if (!node.children[n]) {
      node.children[n] = new TrieNode()
    }
    node = node.children[n]
  }
  node.value = value
}

function traversePreorder (root, visit) {
  if (!root) return
  visit(root)
  for (let child of root.children) {
    traversePreorder(child, visit)
  }
}

function collector (output = []) {
  return function collect (node) {
    if (!node.value) return
    output.push(node.value)
  }
}

function sortStrings (strings) {
  const root = new TrieNode()
  // put all strings into a trie
  for (let s of strings) {
    insert(root, s, s)
  }
  const output = []
  const collect = collector(output)
  // traverse the trie in preorder and collect leaf values
  traversePreorder(root, collect)
  return output
}

module.exports = sortStrings
