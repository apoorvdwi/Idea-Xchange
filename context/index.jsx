import { Account, Client, Databases } from 'appwrite';
import React, { createContext, useContext, useEffect, useState } from 'react';

const client = new Client();
client
  .setEndpoint(process.env.NEXT_PUBLIC_APPWRITE_URL)
  .setProject(process.env.NEXT_PUBLIC_APPWRITE_PROJECT);

const account = new Account(client);
const databases = new Databases(client);

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    account
      .get()
      .then((data) => {
        if (data) {
          setUser(data);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const loginWithGoogle = () => {
    account.createOAuth2Session(
      'google',
      `${process.env.NEXT_PUBLIC_CLIENT_URL}`,
    );
  };

  const logout = () => {
    account
      .deleteSessions()
      .then(() => {
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const contextProps = {
    user,
    databases,
    setUser,
    loading,
    setLoading,
    loginWithGoogle,
    logout,
  };

  return (
    <GlobalContext.Provider value={contextProps}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
