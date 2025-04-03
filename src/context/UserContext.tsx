import { User } from "@/services/auth/LoginResponse";
import { getUserData } from "@/services/user/getUserData";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

interface UserContextType {
  user: User | null;
  loading: boolean;
  initUser: (userData: User, rememberMe: boolean) => void;
  updateUserField: (field: keyof User, value: string | boolean) => void;
  fetchUserData: () => Promise<void>;
  logout: () => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedUser =
      sessionStorage.getItem("user") || localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }

    setLoading(false);
  }, []);

  const initUser = (userData: User, rememberMe: boolean) => {
    const storage = rememberMe ? localStorage : sessionStorage;
    storage.setItem("user", JSON.stringify(userData));
    setUser(userData);
  };

  const updateUserField = (field: keyof User, value: string | boolean) => {
    setUser((prevUser) => {
      if (!prevUser) return null;

      const updatedUser = { ...prevUser, [field]: value };
      const storage = localStorage.getItem("user")
        ? localStorage
        : sessionStorage;
      storage.setItem("user", JSON.stringify(updatedUser));

      return updatedUser;
    });
  };

  const fetchUserData = async () => {
    try {
      const { result } = await getUserData({ user_id: user!.id });
      setUser(result.user_id);

      const storage = localStorage.getItem("user")
        ? localStorage
        : sessionStorage;
      storage.setItem("user", JSON.stringify(result.user_id));
    } catch (error) {
      console.error("Failed to fetch user data:", error);
    }
  };

  const logout = () => {
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    setUser(null);
  };

  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        initUser,
        updateUserField,
        fetchUserData,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
