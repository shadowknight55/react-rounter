import { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  
  // Simulated login function
  const login = (username, password) => {
    // For demo purposes only - in a real app, you would validate with a backend
    if (username === 'user' && password === 'password') {
      setUser({
        id: '1',
        username,
        name: 'Demo User',
        isAdmin: false
      });
      return true;
    }
    return false;
  };
  
  // Simulated logout function
  const logout = () => {
    setUser(null);
  };
  
  const value = {
    user,
    isAuthenticated: !!user,
    login,
    logout
  };
  
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
