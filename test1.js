function Queue () {
    if (!(this instanceof Queue)) {
        return new Queue()
    }
    this.queue = []
}
Queue.prototype.enqueue = function (val) {
    this.queue.push(val)
}
Queue.prototype.dequeue = function () {
    return this.queue.length ? this.queue.shift() : null
}

function findMax (arr) {
    let min = arr[0], max = arr[0]
    arr.forEach((item) => {
        max = item > max ? item : max
        min = item < min ? item : min
    })
    return max - min
}

function findMax (arr) {
    let min = arr[0], max = arr[0]
    arr.forEach((item) => {
        if (item > max) {
            max = item
        } else if (item < min) {
            min = item
        }
    })
    return max - min
}

function letter_count (str) {
    let obj = {}
    for (let i = 0; i < str.length; i++) {
        obj[str[i]] ? obj[str[i]]++ : obj[str[i]] = 1
    }
    return Object.keys(obj).map(item => ({[item]: obj[item]}))
}

function valid_password (pwd) {
    return /^[a-zA-Z]\w{0,8}
    [0-9a-zA-Z]$/.test(pwd)
}
