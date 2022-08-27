import 'dotenv/config';

const _env = {
  NODE_ENV: process.env.NODE_ENV,
  NODE_PORT: process.env.NODE_PORT,
  API_URL: process.env.API_URL,
};

let shouldExit = false;

for (const key in _env) {
  if (!_env[key as keyof typeof _env]) {
    console.log(`${key} must be set in order to run the application`);
    shouldExit = true;
  }
}

if (shouldExit) {
  process.exit(1);
}

export const env: Record<keyof typeof _env, string> = {
  ...(_env as Record<keyof typeof _env, string>),
};
