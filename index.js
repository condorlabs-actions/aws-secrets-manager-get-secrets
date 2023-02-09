const core = require('@actions/core');
const AWS = require('aws-sdk');

const secretName = core.getInput('secret-name');
const accessKeyId = core.getInput('aws-access-key-id');
const secretAccessKey = core.getInput('aws-secret-access-key');
const awsRegion = core.getInput('aws-region');

AWS.config.update({ region: awsRegion});

const secretsManager = new AWS.SecretsManager({
  accessKeyId,
  secretAccessKey
});

async function getSecrets() {
  const secret = await secretsManager.getSecretValue({ SecretId: secretName }).promise();

  const secretsObject = JSON.parse(secret.SecretString);

  for (const variable in secretsObject) {
    core.exportVariable(variable, secretsObject[variable]);
  }
}

getSecrets();
