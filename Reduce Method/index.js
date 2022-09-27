// const nums = [1, 2, 4, 5];

// const addNums = nums.reduce((acc, num) => {
//     if (num < 4) return acc;
//     return acc += num;
// }, 0);

// Example 1
// const people = [
//     {name: 'Alice', age: 21},
//     {name: 'Bob', age: 34},
//     {name: 'Eve', age: 18},
//     {name: 'Mallory', age: 25},
//     {name: 'Trent', age: 32},
//     {name: 'Victor', age: 18},
//     {name: 'Wendy', age: 25},
// ];

// const countedPeople = people.reduce((acc, person, index, array) => {
//     const valueIfExists = acc[person.age] || [];
//     return {...acc, [person.age]: [...valueIfExists, person.name]};
// }, {});

// Example 2
const comments = {
    293: {
        text: 'I love pizza!',
        userId: 1,
        rating: 4,
    },
    123: {
        text: 'I love pizza more than everyone!',
        userId: 1,
        rating: 5,
    },
    4223: {
        text: 'Burgers are best.',
        userId: 3,
        rating: 4,
    },
    4267: {
        text: 'Bears are beets.',
        userId: 3,
        rating: 3,
    },
    1561: {
        text: 'Best service ever!',
        userId: 2,
        rating: 5,
    },
    1899: {
        text: 'this was gross!',
        userId: 3,
        rating: 1,
    },
    415: {
        text: 'Much better than last time',
        userId: 3,
    }
};

function getUserComments(userId){
    return groupByUserId = Object.values(comments).reduce((acc, comment) => {
        const key = comment.userId;
        if (key !== userId) return acc;
        return [...acc, comment.text];
    }, []);
}

getUserComments(1);