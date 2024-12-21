// Primitive Data Types (e.g., string, number, boolean, bigint, undefined, null, symbol) are immutable, stored in stack memory, and copying creates a new independent value.

// Non-Primitive Data Types (e.g., object, array, function, Date, RegExp, Map, Set, WeakMap, WeakSet, Error) are mutable, stored in heap memory, and copying creates a reference to the same object.

// The key difference is that primitives are stored by value, while non-primitives are stored by reference.

// Primitive Example
let x = 10;
let y = x;
y = 20;
console.log(x); // 10 (remains unchanged)

// Non-Primitive Example
let obj1 = { name: "Alice" };
let obj2 = obj1; // Reference is copied
obj2.name = "Bob";
console.log(obj1.name); // "Bob" (affected by change)
