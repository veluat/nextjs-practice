import {createContext, ReactNode, useContext, useState} from 'react'

type AuthContextType = {
  isAuth: boolean;
  toggleAuth: () => void;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const AuthProvider = ({children}: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(false)

  const toggleAuth = () => {
    setIsAuth((prev) => !prev)
  }

  return (
    <AuthContext.Provider value={{isAuth, toggleAuth}}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}