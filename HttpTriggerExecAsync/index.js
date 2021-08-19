const { exec } = require('child_process');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const result = await new Promise((resolve, reject) => {
    const p = exec(
      `"${process.execPath}" test.js`,
      (error, stdout, stderr) => {
        if (error) return reject(error);
        resolve({ stdout, stderr });
      }
    );
  });
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      stdout: result.stdout.toString(),
      stderr: result.stderr.toString()
    }
  };
}