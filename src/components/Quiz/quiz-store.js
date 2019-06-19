import { readable } from 'svelte/store';

export const quiz = readable([
    {
        question: '1. How do you give a ninja directions?',
        a: 'Show them a map',
        b: 'Don\'t worry, the ninja will find you'
    },
    {
        question: '2. If a ninja has 3 apples, then gives one to Mario & one to Yoshi, how many apples does the ninja have left?',
        a: '1 apple',
        b: '3 apples, and two corpses'
    },
    {
        question: '3. How do you know when you\'ve met a ninja?',
        a: 'You\'ll recognize the outfit',
        b: 'The grim reaper will tell you'
    },
    {
        question: '4. What\'s a ninja\'s favourite array method?',
        a: 'forEach()',
        b: 'slice()'
    }
]);