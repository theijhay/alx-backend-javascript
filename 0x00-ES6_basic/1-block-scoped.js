export default function taskBlock(trueOrFalse) {
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-var */
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    task = true;
    task2 = false;
  }

  return [task, task2];
}
