<script>
    import { quiz as quizStore } from './quiz-store.js';

    let userAnswer = [];

/*SUBSCRIPTION

    let quiz;

    const unsubscribe = quizStore.subscribe(value => quiz = value);

    onDestroy(() => {
        if (unsubscribe) {
            unsubscribe();
        }
    });
*/
</script>

{#each $quizStore as {question, a, b}, index (quizStore.question)} <!-- AUTO SUBSCRIPTION with $ -->
    <div class="my-5">
        <p class="lead font-weight-normal">{question}</p>
        <div class="form-check my-2 text-white-50">
            <input class="form-check-input" type="radio" name={`q${index + 1}`} value="A">
            <label class="form-check-label">{a}</label>
        </div>
        <div class="form-check my-2 text-white-50">
            <input class="form-check-input" type="radio" name={`q${index + 1}`} value="B">
            <label class="form-check-label">{b}</label>
        </div>
    </div>
{/each}