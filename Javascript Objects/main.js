import {peeps, comments} from './data.js'

// EASIER CHALLENGES (using the peeps array) //

// 1. Count the number of people in the people array.
const numPeep = peeps.length;

// 2. List full names of people in a new array.
peeps.reduce((acc, peep) => {
    return [...acc, peep.name.first + " " + peep.name.last];
}, []);

// 3. Return “true” if everyone is older than 24.
peeps.every((peep) => {
    return peep.age > 18
});

// 4. Return “true” if at least one person is younger than 26.
peeps.some((peep) => {
    return peep.age < 26;
});

// 5. Return a new array called “young peeps” of all peeps less than 30.
const youngPeeps = peeps.filter((peep) => {
    return peep.age < 30;
});

// 6. Sort the peeps by age from oldest to youngest in an array called “sortedPeeps”.
const sortedPeeps = peeps.sort((a, b) => b.age - a.age);

// 7. Create a new array called “firstNamePeeps” with only the first names of the peeps.
const firstNamePeeps = peeps.map(peep => {
    return peep.name.first;
});

// HARDER CHALLENGES (using the comments object and peeps array) //

// 1. List all the comments in an array of strings called “commentsArray”
const commentsArray = Object.values(comments).map(comment => comment.text);

// 2. Return all comments with the word “love” in the comment in a new array called “loveComments”
const loveComments = Object.values(comments).filter(comment => comment.text.includes('love'));

// 3. List all the comments in an array of strings called “sortedCommentsArray" from lowest rating to highest rating. Ignore comments without a rating.
const sortedCommentsArray = Object.values(comments)
    .filter(c => c.rating)
    .sort((a, b) => a.rating - b.rating)
    .map(c => c.text);

// 4. Return a new object called “commentObj” with the comment id as a key and the comment text as the value.
const commentObj = Object.values(comments).reduce((acc, c) => {
    return {...acc, [c.userId]: c.text};
}, {});

// 5. Return a new object called “groupedRatings” with the rating as a key and an array of comments with that rating as the value. Ignore comments without a rating.
const groupedRatings = Object.values(comments)
    .filter(c => c.rating)
    .reduce((acc, c) => {
        const key = c.rating;
        const currGroup = acc[key] || [];
        return {...acc, [key]: [...currGroup, c.text]};
    }, {});

// 6. Return the average rating of all comments.
const averageRating = Object.values(comments).reduce((acc, c) => {
    return acc += c.rating || 0;
}, 0) / Object.values(comments).filter(c => c.rating).length;

// 7. Group all comments by the user who made the comment. Return a new object called “groupedPeepComments” with the user’s first and last name as a string key. The value of each object should be an array of comment objects by the person.
const groupedPeepComments = Object.values(comments)
    .reduce((acc, comment) => {
        const peep = peeps.find(p => p.id === comment.userId);
        const key = `${peep.name.first} ${peep.name.last}`;
        const currGroup = acc[key] || [];
        return {...acc, [key]: [...currGroup, comment]}
    }, {});