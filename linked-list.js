function LinkedList() {
    let head, tail, _size
    head = tail = null
    _size = 0

    function append() {}
    function prepend() {}
    function at(index) {}
    function pop() {}
    function contains(value) {}
    function find(value) {}
    function toString() {}

    return {
        head,
        tail,
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
