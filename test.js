/**
 * JavaScript 6일차 과제
 * 큐 자료구조 만들기
 *
 * 출력 확인법
 * Terminal 창에 다음 코드를 작성해주세요.
 * node main
 *
 * 요구사항
 * - 큐의 4가지 기능을 각각의 함수로 만들어 큐를 구현해주세요.
    - 기능 1. `enqueue` : 뒤(rear)에서 데이터 추가
    - 기능 2. `dequeue`: 앞(front)에서 데이터 제거
    - 기능 3. `peek`: 가장 앞의 값 확인
    - 기능 4. `isEmpty`: 큐가 비어있는지 확인
 */

// 여기에 작성해주세요.

const queue = {
    frontKey: 0,
    rearKey: 0,
    storage: {},

    enqueue: (data) => {

        queue.storage[queue.rearKey] = data
        queue.rearKey++
        return Object.keys(queue.storage).length
    },

    dequeue: () => {
        const deletingData = queue.storage[queue.frontKey]
        delete queue.storage[queue.frontKey]

        queue.frontKey++

        return deletingData
    },

    peak: () => {
        return queue.storage[queue.frontKey]
    },

    isEmpty: () => {
        return queue.frontKey === queue.rearKey
    },

    logAll: () => {
        console.log(
            "frontKey:", queue.frontKey,
            "\nrearKey:", queue.rearKey,
            "\nstorage:", queue.storage,
            "\npeak:", queue.peak(),
            "\nisEmpty:", queue.isEmpty()
        )
    }
}

queue.enqueue("아차차")
queue.logAll()
queue.enqueue("아차차2")
queue.logAll()
queue.enqueue("아차차3")
queue.logAll()
queue.enqueue("아차차4")
queue.logAll()

queue.dequeue()
queue.logAll()
queue.dequeue()
queue.logAll()
queue.dequeue()
queue.logAll()
queue.dequeue()
queue.logAll()






