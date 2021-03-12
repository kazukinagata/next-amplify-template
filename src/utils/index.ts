import { Auth } from 'aws-amplify'
import { CognitoUserExt } from '../types'
import { GraphQLOptions, GraphQLResult } from '@aws-amplify/api-graphql'
export const checkAuth = async (AuthClass: typeof Auth) => {
  try {
    const user = (await AuthClass.currentAuthenticatedUser()) as CognitoUserExt
    return user
  } catch (error) {
    return null
  }
}

export async function callGraphQL<T>(
  API: any,
  options: GraphQLOptions
): Promise<GraphQLResult<T>> {
  return (await API.graphql(options).catch(
    (err: Error) => err
  )) as GraphQLResult<T>
}
