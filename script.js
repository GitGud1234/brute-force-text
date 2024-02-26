async function bruteForce() {
  let target = prompt('Type anything of your choice!');
  let chars =
    ' abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_?[]+-./,={}';
  let outputDiv = document.getElementById('output');
  let unscrambled = '';

  for (const element of target) {
    for (let char of chars) {
      await new Promise(resolve => setTimeout(resolve, 25));
      let final = unscrambled + char;
      outputDiv.innerHTML = final;
      if (char === element) {
        unscrambled = final;
        break;
      }
    }
  }
}
bruteForce();
