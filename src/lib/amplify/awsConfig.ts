import Amplify from 'aws-amplify'
import config from '../../aws-exports'

// Overide fields as you need.
// For example switch redirect_url per environment if you have set multiple redirect_url
export const awsConfig = {
  ...config,
  oauth: {
    ...config.oauth,
  },
}

export const configureAmplify = () => {
  Amplify.configure({
    ...awsConfig,
    ssr: true,
  })
}
