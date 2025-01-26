function printName(name: string | null | undefined): void {
  console.log(`Hello, ${name ?? 'Guest'}!`);
}

printName(null);
printName(undefined);
printName('John');