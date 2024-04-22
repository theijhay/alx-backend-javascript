export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  if (trueOrFalse) {
    // This line will cause an error because task is already declared as a constant.
    // const task = true;
  }

  return [task, task2];
}
