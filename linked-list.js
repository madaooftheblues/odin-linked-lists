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

    function at(index) {
        if (this.head === null) return
        if (index < 0) return this.head

        let temp = this.head
        for (let i = 0; temp !== null && i < index; i++) temp = temp.nextNode

        if (temp === null) return this.tail

        return temp
    }

    function pop() {
        if (this.head === null) return
        if (this.head.nextNode === null) {
            this.head = null
            this.tail = null
        } else {
            let temp = this.head
            while (temp.nextNode.nextNode !== null) temp = temp.nextNode
            temp.nextNode = null
            this.tail = temp
        }

        _size--
    }

    function contains(value) {
        if (this.head.value === value) return true
        if (this.tail.value === value) return true

        let temp = this.head.nextNode
        while (temp.nextNode !== null) {
            if (temp.value === value) return true
            temp = temp.nextNode
        }

        return false
    }

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
