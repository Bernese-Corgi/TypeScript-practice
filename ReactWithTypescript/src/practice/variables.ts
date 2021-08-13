let count = 0;
count += 1;
// count = 'string'; // error

const message: string = 'hello world';
const done: boolean = false;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world'];

// message.push(1); // error

let mightBeUndefined: string | undefined = undefined;
let nullAbleNumber: number | null = null;

let color: 'red' | 'orange' | 'yellow' = 'red';
color = 'yellow';
// color = 'green'; // error
