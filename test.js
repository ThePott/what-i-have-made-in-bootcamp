// 1. 좌석 초기화 (fill)
let seats = ['비어있음', 'ko','kang','비어있음']
seats.fill("비어있음")
console.log('초기 좌석 상태:', seats);

// 2. 좌석 3번, 4번에 예약자 추가 (splice)
seats.splice(2, 2, ...["kwon", "hyun"])
console.log('kwon, hyun 예약 후:', seats);