export default function getResult(input) {
  const result = input.reduce(
    (acc, item) => {
      const tokens = item.split(' ');
      const uniqueTokens = [];
      for (let index = 0; index < tokens.length; index++) {
        const token = tokens[index];
        if (uniqueTokens.includes(token)) {
          return acc;
        }

        uniqueTokens.push(token);
      }

      return acc + 1;
    },
    0
  );

  return result;
}
