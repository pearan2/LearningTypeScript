// Array 클래스는 every 라는 이름의 인스턴스 메서드를 제공합니다.
// every 메서드는 배열의 모든 아이템이 어떤 조건을 만족하면 true 를 반환합니다.
// 다음 코드에서 isAllTrue 함수는 every 메서드를 사용해 배열에 담긴 값이 모두 true 인지 확인합니다.

const isAllTrue = ((values:boolean[]):boolean => {
	return (
			values.every((value:boolean):boolean => {
			return (value == true)
		})
	)
})

console.log(
	isAllTrue([true, true, true]),
	isAllTrue([true, false, false])
)