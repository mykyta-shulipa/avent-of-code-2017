export default function getResult(input) {
  const result = input.reduce(
    (acc, item) => {
      const tokens = item.split(' ');
      const uniqueTokens = [];
      for (let index = 0; index < tokens.length; index++) {
        const token = tokens[index];
        const tokenChars = token.split('');
        const checkFailed = uniqueTokens.some(
          uniqueToken => {
            const uniqueTokenChars = uniqueToken.split('');
            return tokenChars.sort().join('') === uniqueTokenChars.sort().join('');
          }
        );

        if (checkFailed) {
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
