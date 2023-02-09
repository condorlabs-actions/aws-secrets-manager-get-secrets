# aws-secrets-manager-get-secrets
GitHub Action that gets secrets from AWS Secrets Manager using a secret name as identifier, and then saves those secrets as environment variables.

## Usage

```yaml
  - name: Get secrets from AWS Secrets Manager
    uses: condorlabs-actions/aws-secrets-manager-get-secrets@v1.0.0
    with:
      secret-name: 'My-secret-name'
      aws-access-key-id: 'my-aws-access-key-id'
      aws-secret-access-key: 'my-aws-secret-access-key'
      aws-region: 'my-aws-region'
```
