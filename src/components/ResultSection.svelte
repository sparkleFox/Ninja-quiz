<script>
	export let output;
	export let show;
</script>

<div class="result py-4 bg-light text-center" class:d-none={!show}>
	<div class="container lead">
		<p>You are <span class="text-primary display-4 p-3">{output}%</span> ninja</p>
	</div>
</div>