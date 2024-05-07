import Node from './node.js'

function LinkedList() {
    let _size = 0

    function createNode(value) {
        const node = Node()
        node.value = value
        return node
    }

    function append(value) {
        const node = createNode(value)

        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.tail.nextNode = node
            this.tail = node
        }

        _size++
    }
    function prepend(value) {
        const node = createNode(value)

        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            node.nextNode = this.head
            this.head = node
        }

        _size++
    }
    function at(index) {}
    function pop() {}
    function contains(value) {}
    function find(value) {}
    function toString() {
        let out = ''
        let temp = this.head
        while (temp !== null) {
            out = out + `(${temp.value}) -> `
            temp = temp.nextNode
        }
        out = out + 'null'
        return out
    }

    return {
        head: null,
        tail: null,
        get size() {
            return _size
        },
        append,
        prepend,
        at,
        pop,
        contains,
        find,
        toString,
    }
}

const l = LinkedList()
l.prepend(3)
l.prepend(3)
l.prepend(3)
l.prepend(3)
l.append(5)
l.prepend(6)
console.log(l.toString())
