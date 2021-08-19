const { spawn } = require('child_process');

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');
  const { stdout, stderr } = await new Promise((resolve, reject) => {
    const ret = {
      stdout: '',
      stderr: '',
      code: undefined
    };
    const p = spawn(
      process.execPath, // node executable
      ["test.js"]
    );
    p.stdout.on('data', (data) => {
      ret.stdout += data;
    });

    p.stderr.on('data', (data) => {
      ret.stderr += data;
    });

    p.on('close', (code) => {
      ret.code = code;
    });

    p.on('exit', (code) => {
      ret.code = code;
      resolve(ret);
    });
  })
  context.res = {
    // status: 200, /* Defaults to 200 */
    body: {
      stdout: stdout?stdout.toString() : null,
      stderr: stderr?stderr.toString() : null
    }
  };
}