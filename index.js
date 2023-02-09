const core = require('@actions/core');
const AWS = require('aws-sdk');

const secretName = core.getInput('secret_name');
const accessKeyId = core.getInput('aws_access_key');
const secretAccessKey = core.getInput('aws_secret_access_key');
const awsRegion = core.getInput('aws_region');

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
