import { withSSRContext } from 'aws-amplify'
import { GetServerSideProps } from 'next'
import { checkAuth } from '../utils'

export default function withSSRAuth(
  pageGssp: GetServerSideProps,
  redirectTo: string
): GetServerSideProps {
  const gssp: GetServerSideProps = async (ctx) => {
    const { Auth } = withSSRContext({ req: ctx.req })
    const user = await checkAuth(Auth)
    if (!user) {
      return {
        redirect: {
          destination: redirectTo,
          permanent: false,
        },
      }
    }
    return pageGssp(ctx)
  }
  return gssp
}
