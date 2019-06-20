<script>
	import { createEventDispatcher } from 'svelte';
	import Quiz from './Quiz.svelte';

	// const correctAnswers = ['B', 'B', 'B', 'B'];
	let form;
	const dispatch = createEventDispatcher();

	function finishQuiz() {
		dispatch('finish-quiz', form);
	}

	// const submitForm = event => {
	// 	let score = 0;

	// 	const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

	// 	// check answers
	// 	userAnswers.forEach((answer, index) => {
	// 		if(answer === correctAnswers[index]) {
	// 			score += 25;
	// 		}
	// 	});
	// 	console.log(score);
	// }
	
</script>

<div class="quiz py-4 bg-primary">
	<div class="container">
		<h2 class="my-5 text-white">On with the questions...</h2>

		<form bind:this={form} class="quiz-form text-light" on:submit|preventDefault={finishQuiz}>

        	<Quiz />
		
			<div class="text-center">
				<input type="submit" class="btn btn-light"> 
			</div>
		</form>

	</div>
</div>