<script>
    import Quiz from './Quiz.svelte';
</script>

<div class="quiz py-4 bg-primary">
	<div class="container">
		<h2 class="my-5 text-white">On with the questions...</h2>

		<form class="quiz-form text-light">

        <Quiz />
		
		<div class="text-center">
			<input type="submit" class="btn btn-light"> 
		</div>
		</form>
	</div>
</div>