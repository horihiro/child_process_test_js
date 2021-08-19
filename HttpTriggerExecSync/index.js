const { execSync } = require('child_process');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const result = execSync(
    `"${process.execPath}" test.js`,
  );
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: result
  };
}