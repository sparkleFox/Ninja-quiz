<script>
	import TopSection from './components/TopSection.svelte';
	import ResultSection from './components/ResultSection.svelte';
	import QuizSection from './components/Quiz/QuizSection.svelte';

	const correctAnswers = ['B', 'B', 'B', 'B'];

	let score;
	let output;
	let show = false;

	const submitForm = event => {
		const form = event.detail;

		score = 0;
		output = 0;

		const userAnswers = [form.q1.value, form.q2.value, form.q3.value, form.q4.value];

		// check answers
		userAnswers.forEach((answer, index) => {
			if(answer === correctAnswers[index]) {
				score += 25;
			}
		});
		
		// show result section
		scrollTo(0, 0);
		show = true;

		const timer = setInterval(() => {
			if(output === score) {
				clearInterval(timer);
			} else {
				output++
			}
		}, 10);

	}
</script>

<!-- top section -->
<TopSection />

<!-- result section -->
<ResultSection {output} {show} />

<!-- quiz section -->
<QuizSection on:finish-quiz={submitForm}/>
