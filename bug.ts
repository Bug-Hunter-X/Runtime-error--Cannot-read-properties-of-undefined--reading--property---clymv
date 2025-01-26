function printName(name: string | null): void {
  console.log(`Hello, ${name}!`);
}

printName(null); // This will cause a runtime error if not handled properly.