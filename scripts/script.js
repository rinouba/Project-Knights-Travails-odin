import Knight from './knight.js'

let knightTravails = new Knight()

knightTravails.startGame([4, 3], [3, 3])
// => You made it in 2 spec move  Here's your path:
//  [0, 0]
//  [1, 2]

// knightTravails.startGame([0, 0], [3, 3])
// => You made it in 3 spec moves!  Here's your path:
//  [0, 0]
//  [1, 2]
//  [3, 3]


// knightTravails.startGame([3, 3], [4, 3])
// knight.js:53 => You made it in 4 spec moves!  Here's your path:
//  [3, 3]
//  [4, 5]
//  [6, 4]
//  [4, 3]


// knightTravails.startGame([4, 3], [3, 3])
// => You made it in 4 spec moves!  Here's your path:
//  [4, 3]
//  [6, 4]
//  [5, 2]
//  [3, 3]