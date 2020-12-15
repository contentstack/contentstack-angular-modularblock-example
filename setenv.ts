const { writeFile } = require('fs');

const targetPath = './src/environments/environment.ts';

// we have access to our environment variables in the process.env
const environmentFileContent = `
  export const environment = {
    production: false,
    config : {
      api_key: '${process.env.API_KEY}',
      delivery_token: '${process.env.DELIVERY_TOKEN}',
      environment: '${process.env.ENVIRONMENT}',
      region: '${process.env.REGION || 'us'}'
    }
  };
`;

// write the content to the respective file if env exists
if (process.env.API_KEY && process.env.DELIVERY_TOKEN && process.env.ENVIRONMENT)
  writeFile(targetPath, environmentFileContent, function (err) {
    if (err) {
      console.log(err);
    }
    console.log(`Wrote variables to ${targetPath}`);
  });