const now = new Date();
const newYears = new Date('1/1/22');

console.log(now.toLocaleDateString('en-GB', {
    // timeZoneName: 'short',
    // weekday: 'long',
    dateStyle: 'medium'
}))

const dayOfWeek = (date) => date.toLocaleDateString('en-GB', {
    weekday: 'long',
    year: 'numeric'
})

console.log(`<p>Today's day of week is ${dayOfWeek(newYears)}`);