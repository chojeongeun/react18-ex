import { useState } from 'react';

function App() {
	const [Count, SetCount] = useState(0);
	const [Items, setItems] = useState([]);

	const handleClick = () => {
		SetCount(Count + 1);
		const arr = Array(10000)
			.fill(1)
			.map((_, idx) => Count + idx);
		setItems(arr);
	};
	return (
		<div className='App'>
			<button onClick={handleClick}>{Count}</button>

			<ul>
				{Items.map((num) => {
					return <li key={num}>{num}</li>;
				})}
			</ul>
		</div>
	);
}

export default App;

/*
  Automatic Batching
  : 핸들러 함수 안쪽에서 복수개의 state값이 변경될때 해당 변경사항을 묶어서 (batching)해서 한번만 리랜더링
  : 기존의 17버전에서는 promise를 반환하는 함수 안에서는 auto batching 동작 불가 (18버전에서 개선)

	useTransition
	: 컴포넌트 렌더링시 연산의 우선순위를 둬서 좀 늦게 렌더링해도 될 것들을 지정
	: 기존에는 한번 렌더링 연산이 시작되면 중간에 멈출 수 없었음
	: 문제 - 특정 핸들러 함수에 의해서 화면을 재연산해야되는 경우 중간에 무거운 로직이 실행되는 연산이 있으면 나머지 연산도 같이 지연이 일어남
	: 
*/
