const sentence = "hello there from lighthouse labs";
let i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);

  }, i += 50);
  if (i === sentence.length * 50) {
    setTimeout(() => {
      process.stdout.write('\n');

    }, sentence.length * 50);
  

  }
  
}