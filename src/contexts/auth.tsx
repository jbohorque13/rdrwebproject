import React from 'react';

interface ProviderProp {
  children: React.ReactNode;
}

const AuthContext = React.createContext({
  name: 's',
  toggleName: () => {}
});

export function useAuthContext () {
  return React.useContext(AuthContext);
}

const ProviderAuth = (props: ProviderProp) => {
  const [name, setName] = React.useState<string>('josue');

  const toggleNameS = React.useCallback(() => {
    setName('joheny');
  }, []);

  return (
    <AuthContext.Provider value={{
        name,
        toggleName: toggleNameS
    }}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default ProviderAuth;