# Runtime error: Cannot read properties of undefined (reading 'property') in TypeScript
This repository demonstrates a common runtime error in TypeScript that occurs when attempting to access a property of a variable that is null or undefined.

## Problem
TypeScript's type system allows you to define variables that may be null or undefined. However, if you try to access a property of a variable that currently holds a null or undefined value, you'll get a runtime error.

## Solution
The best way to prevent this error is to add checks before accessing properties of variables that could be null or undefined. This is typically done using optional chaining (`?.`) or nullish coalescing (`??`).

## Example
The `bug.ts` file demonstrates the problem, while `bugSolution.ts` shows how to solve it using optional chaining and nullish coalescing.