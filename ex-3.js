const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getTodoTopics(todos) {
  // Start coding here
  //let todoTopics = [];
  //todoTopics = todos.map(todos => todos.topic)
  const todoTopics = todos.map(( topics ) => {return topics.topic });
  return todoTopics;
}

getTodoTopics(todos);
console.log(getTodoTopics(todos));
/* 
	Output:
	[
		'Doing pre-work',
		'Workout',
		'Playing computer games',
		'Relax',
		'Clean the room'
	]
*/
