# aws-secrets-manager-get-secrets
GitHub Action that gets secrets from AWS Secrets Manager using a secret name as identifier, and then saves those secrets as environment variables.

## Usage

```yaml
  - name: Get secrets from AWS Secrets Manager
    uses: condorlabs-actions/aws-secrets-manager-get-secrets@v1.0.0
    with:
      secret_name: 'My-secret-name'
      aws_secret_name: 'My-aws-secret-name'
      aws_access_key_id: 'my-aws-access-key-id'
      aws_secret_access_key: 'my-aws-secret-access-key'
      aws_region: 'my-aws-region'
```
