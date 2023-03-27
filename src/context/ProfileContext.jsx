import { useContext } from "react";
import AuthContext from "../context/authContext";
import { useState, useEffect, createContext, useRef } from "react";
import { API_URL } from "../App";

const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {
  const profileMenuRef = useRef();
  const navProfileMenuRef = useRef();
  const { currentAccessToken, currentProfile } = useContext(AuthContext);
  const [isProfileMenuvisible, setIsProfileMenuVisible] = useState(false);
  const [profileData, setProfileData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [profileBio, setProfileBio] = useState("");
  const [people, setPeople] = useState([]);
  const [skills, setSkills] = useState([]);
  const [companies, setCompanies] = useState([]);
  const [mutualConnections, setMutualConnections] = useState([]);
  const [experience, setExperience] = useState([]);

  const toggleProfileMenu = () => {
    setIsProfileMenuVisible(!isProfileMenuvisible);
  };

  useEffect(() => {
    const getprofileData = async () => {
      const response = await fetch(`${API_URL}/profile`, {
        headers: {
          Authorization: `Bearer ${currentAccessToken}`,
        },
      });
      const data = await response.json();
      setProfileData(data[0]);
      setProfileBio(data[0].about);
      setIsLoading(false);
    };
    getprofileData();
  }, []);

  useEffect(() => {
    async function fetchPeople() {
      const response = await fetch(`${API_URL}/connections`, {
        headers: {
          Authorization: `Bearer ${currentAccessToken}`,
        },
      });
      const data = await response.json();
      setPeople(data);
    }
    fetchPeople();
  }, []);

  useEffect(() => {
    async function fetchCompanies() {
      const response = await fetch(`${API_URL}/company`, {
        headers: {
          Authorization: `Bearer ${currentAccessToken}`,
        },
      });
      const data = await response.json();
      setCompanies(data);
    }
    fetchCompanies();
  }, []);

  useEffect(() => {
    async function fetchExperience() {
      const response = await fetch(`${API_URL}/experience`, {
        headers: {
          Authorization: `Bearer ${currentAccessToken}`,
        },
      });
      const data = await response.json();
      setExperience(data);
    }
    fetchExperience();
  }, []);

  useEffect(() => {
    const getSkills = async () => {
      const response = await fetch(`${API_URL}/skills`, {
        headers: {
          Authorization: `Bearer ${currentAccessToken}`,
        },
      });
      const data = await response.json();
      setSkills(data);
    };
    getSkills();
  }, []);

  useEffect(() => {
    async function fetchMututalConnections() {
      const response = await fetch(`${API_URL}/mutualconnections`, {
        headers: {
          Authorization: `Bearer ${currentAccessToken}`,
        },
      });
      const data = await response.json();
      setMutualConnections(data);
      setIsLoading(false);
    }
    fetchMututalConnections();
  }, []);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (
        isProfileMenuvisible &&
        profileMenuRef.current &&
        navProfileMenuRef.current &&
        !profileMenuRef.current.contains(e.target) &&
        !navProfileMenuRef.current.contains(e.target)
      ) {
        setIsProfileMenuVisible(false);
      }
    };
    document.addEventListener("mousedown", checkIfClickOutside);
    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, [isProfileMenuvisible]);

  return (
    <ProfileContext.Provider
      value={{
        profileData,
        isLoading,
        isProfileMenuvisible,
        toggleProfileMenu,
        profileMenuRef,
        navProfileMenuRef,
        profileBio,
        people,
        skills,
        setSkills,
        companies,
        setCompanies,
        mutualConnections,
        experience,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};

export default ProfileContext;
