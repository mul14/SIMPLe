/* Deno app 
   
   How to run?
   deno run hello.ts
*/

function hello(name: string): string {
  return `Hello, ${name}.`;
}

const name = 'Stranger';
const message = hello(name);

console.log(message);
