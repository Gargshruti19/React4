import React from "react"; 
import ReactDOM from "react-dom/client";

const heading2 = (
	<h1 id="title" key="h1" className="head">
		Shruti Garg
	</h1>
);


const Title = () => {
	return <h1>Shruti</h1>;
};

const ContainerComponent3 = () => (
	<div>
		<h1 id="title" key="h1" className="head">
			Shruti Garg
		</h1>

		<h2>Hello</h2>
		<h2>World</h2>
	</div>
);
// const ContainerComponent2 = () => (
// 	<div>
// 		{heading2}

// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
// const ContainerComponent2 = () => (
// 	<div>
// 		<Title />
c
// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
// const ContainerComponent2 = () => (
// 	<div>
// 		{Title()}

// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
var a = 10; // the one in parenthesis wil work this is any piece of javacript
// const ContainerComponent2 = () => (
// 	<div>
// 		{a}

// 		<h2>Hello</h2>
// 		<h2>World</h2>
// 	</div>
// );
const ContainerComponent2 = () => (
	<div>
		{/* {console.log(a)} */ 1 + 2}

		<h2>Hello</h2>
		<h2>World</h2> 
	</div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(ContainerComponent());
root.render(<ContainerComponent2 />); //both same
