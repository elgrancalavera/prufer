# prufer

[![Build Status](https://travis-ci.org/elgrancalavera/prufer.svg?branch=master)](https://travis-ci.org/elgrancalavera/prufer)

* Generates random Prüfer codes
* Generates random graphs
* Generates graphs from Prüfer codes

## API

### `prufer.randomSequence(length)`

- `length` `<Integer>`

The `prufer.randomSequence()` function returns a random [Prüfer code][prufer-code] of the given `length`.

For example:

```
prufer.randomSequence(5)
  // returns [4, 1, 2, 4, 4]
  // (or any other random Prufer code)
```

### `prufer.randomTree(nodeCount)`

- `nodeCount` `<Integer>` `<2`

The `prufer.randomTree()` function returns a random tree (undirected graph) of the given `nodeCount`, where `nodeCount` is greater than 2.

A tree is represented by a list of edges.

For example:

```
prufer.randomTree(5)
  // returns [[2, 3], [1, 2], [0, 1], [0, 4]]
  // or any other randon tree with 5 nodes
```

### `prufer.tree(prufferCode)`

- `pruferCode` `<Array>` of `<Integer>`

The `prufer.tree()` function returns the graph corresponding to the given [Prüfer code][prufer-code].

For example:

```
prufer.tree([3, 3, 3, 4])
  // returns [[3, 0], [3,1], [3, 2], [4, 3], [4, 5]]
``

## CLI Usage

```
Usage: prufer <command>

where <command> is one of:
    random-sequence, random-tree, tree-from-sequence

prufer --help [-h]                Shows this screen

prufer random-sequence <length>   Generates a random Prüfer sequence
                                  with the given length

prufer random-tree <node count>   Generates a random tree (graph)
                                  with the given node count

prufer tree <Prüfer code>         Generates the tree (graph) corresponding
                                  to the given Prüfer code. A Prüfer code
                                  must be written as a list of integers
                                  enclosed in quotes: "3,3,3,4"
```

[prufer-code]:http://mathworld.wolfram.com/PrueferCode.html
