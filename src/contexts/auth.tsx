import React from 'react'
import { CognitoUserExt } from '../types'
import useAuth from '../utils/client/useAuth'


const AuthContext = React.createContext<{
  loading: boolean
  data: CognitoUserExt | null
}>({ loading: false, data: null })
export const useAuthCtx = () => React.useContext(AuthContext)
export const AmplifyAuthProvider: React.FC = ({ children }) => {
  const { data: user, loading } = useAuth()
  return (
    <AuthContext.Provider value={{ data: user, loading }}>
      {children}
    </AuthContext.Provider>
  )
}
