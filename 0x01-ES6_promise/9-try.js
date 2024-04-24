export default function guardrail(mathFunction) {
  const queue = [];

  const processResult = (result) => {
    queue.push(result);
    queue.push('Guardrail was processed');
    return queue;
  };

  try {
    const res = mathFunction();
    return processResult(res);
  } catch (err) {
    return processResult(err.toString());
  }
}
