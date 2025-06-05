function foo(a, b) {
    return a + b
}

// const bar = foo
const bar = (a, b) => foo(a, b)
const a = 1
const b = 2
console.log(bar(a, b))
