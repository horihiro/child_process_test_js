const { spawnSync } = require('child_process');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const { stdout, stderr} = spawnSync(
    process.execPath, // node executable
    ["test.js"]
  );
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      stdout: stdout?stdout.toString() : null,
      stderr: stderr?stderr.toString() : null
    }
  };
}