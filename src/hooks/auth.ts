import { useCallback } from 'react';
import { IUser } from '../domain/models/user';

const CURRENT_MOCK_USER: IUser = {
  id: 2,
  name: 'Alice'
};

interface IUseAuth {
  currentUser: () => IUser;
  isAuthenticated: () => boolean;
}
const useAuth = (): IUseAuth => {
  const currentUser = useCallback((): IUser => {
    return CURRENT_MOCK_USER;
  }, []);

  const isAuthenticated = useCallback((): boolean => true, []);

  return {
    currentUser,
    isAuthenticated
  };
};

export default useAuth;
