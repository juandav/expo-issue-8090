import { ExpoConfig, ConfigContext } from '@expo/config';
import manifiest from './package.json';

const Mode = {
  DEVELOPMENT: 'DEVELOPMENT',
  QA: 'QA',
  PRODUCTION: 'PRODUCTION',
}

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  version: manifiest.version,
  // All values in extra will be passed to your app.
  extra: {
    mode: Mode.DEVELOPMENT,
  },
});
