let copyText = document.querySelector('.copy-text');
// console.log(copyText)
copyText.querySelector('button').addEventListener('click', function () {
  let input = copyText.querySelector('input.text');
  // console.log(input, copyText);
  input.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
});

let copyText2 = document.querySelector('.copy-text2');
// console.log(copyText2)
copyText2.querySelector('button').addEventListener('click', function () {
  let input2 = copyText2.querySelector('input.text2');
  input2.select();
  document.execCommand('copy');
  window.getSelection().removeAllRanges();
  // console.log(input2, copyText);
});