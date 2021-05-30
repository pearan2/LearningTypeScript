// Promise 클래스는 앞 every 처럼 동작하는 all 이라는 이름의 클래스 메서드를 제공합니다.
// Promise.all 메서드는 Promise 객체들을 배열 형태로 받아, 모든 객체를 대상으로
// 해소(resolve) 된 값들의 배열로 만들어 줍니다. Promise.all 메서드는 이런 내용으로 구성된 또 다른
// Promise 객체를 반환하므로 해소된 값들의 배열은 then 메서드를 호출해서 얻어야 합니다.
// 만약 배열에 담긴 Promise 객체중 거절 (reject) 객체가 발생하면, 더 기다리지 않고 해당 거절 값(reject value)
// 를 담은 Promise.reject 객체를 반환합니다. 이 거절 값은 catch 메서드를 통해 얻습니다.

import { promises } from "dns";

const getAllResolvedResult = (<T>(promises: Promise<T>[]) : Promise<T[]> => 
	Promise.all(promises)
)
