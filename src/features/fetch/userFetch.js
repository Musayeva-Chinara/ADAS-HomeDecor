import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setNewUser, setUserData } from "../user/userSlice";

const useUserFetch = (initialData = {}) => {
  const dispatch = useDispatch();
  const apiURL = "http://localhost:3000";
  const { newUser, userData } = useSelector((state) => state.user);
  const [user, setUser] = useState({});

  const getUserData = async (email, password) => {
    try {
      const response = await fetch(
        `${apiURL}/users?email=${email}&password=${password}`
      );
      if (response.ok) {
        const data = await response.json();
        if (data.length) {
          setUser(data[0]);
        }
      } else {
        throw new Error(`HTTP Error code: ${response.status}`);
      }
    } catch (error) {
      alert("Error occurred while logging in: " + error);
    }
  };

  useEffect(() => {
    if (Object.keys(user).length) {
      dispatch(setUserData(user));
    }
  }, [user]);

  const registerUser = async () => {
    console.log("ssssssssss");
    try {
      console.log("New User Data:", newUser);

      const response = await fetch(`${apiURL}/users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newUser),
      });
      if (response.ok) {
        getUserData(newUser.email, newUser.password); /// ? ? ?
      } else {
        console.log(response.status);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(newUser).length) {
      registerUser();
    }
  }, [newUser]);

  const checkRegister = async (newUserData) => {
    try {
      const response = await fetch(
        `${apiURL}/users?email=${newUserData.email}`
      );

      if (response.ok) {
        const data = await response.json();

        if (!data.length) {
          dispatch(setNewUser(newUserData));
          return true;
        } else {
          return false;
        }
      } else {
        throw new Error(`HTTP Hata Kodu: ${response.status}`);
      }
    } catch (error) {
      console.error(error);
      return false;
    }
  };

  const editUserData = async (changeData) => {
    try {
      const res = await fetch(`${apiURL}/users/${userData.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(changeData),
      });
      console.log(res);
      if (res.ok) {
        const data = await res.json();
        setUser(data);
      }
    } catch (error) {
      alert("Error add to wishlist: " + error);
    }
  };

  return { getUserData, checkRegister, registerUser, editUserData };
};

export default useUserFetch;

// ????????????????????????????????????????

// const useUserFetch1 = (initialData = {}) => {
//   const dispatch = useDispatch();
//   const { newUser, userData } = useSelector((state) => state.userData);
//   const apiUrl = "http://localhost:3000";

//   const [users, setUsers] = useState(undefined);
//   const [user, setUser] = useState(undefined);
//   //   const [ errorLogin, setErrorLogin ] = useState(false)

//   const getUsers = async (email, password, onError) => {
//     fetch(`${apiUrl}/users?email=${email}&password=${password}`) // ? ? ?
//       .then((res) => {
//         if (res.ok) {
//           return res.json();
//         } else {
//           throw new Error("HTTP Error Status");
//         }
//       })
//       .then((data) => {
//         if (data.length) {
//           setUser(data[0]);
//           localStorage.setItem("email", email);
//           localStorage.setItem("password", password);
//         } else {
//           dispatch(setError());
//         }
//         setUsers(data);

//         // data.length == setUser(data[0]);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };

//   const registerUser = async () => {
//     try {
//       console.log("New User Data:", newUser);

//       const response = await fetch(`${apiUrl}/users`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(newUser),
//       });
//       if (response.ok) {
//         getUsers(newUser.email, newUser.password); /// ? ? ?
//       } else {
//         console.log(response.status);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const checkRegister = async (newUserData) => {
//     try {
//       const response = await fetch(
//         `${apiUrl}/users?email=${newUserData.email}`
//       );

//       if (response.ok) {
//         const data = await response.json();

//         if (!data.length) {
//           dispatch(setNewUser(newUserData));
//           return true;
//         } else {
//           return false;
//         }
//       } else {
//         throw new Error(`HTTP Hata Kodu: ${response.status}`);
//       }
//     } catch (error) {
//       console.error(error);
//       return false;
//     }
//   };

//   const editUserData = async (changeData) => {
//     try {
//       const res = await fetch(`${apiUrl}/users/${userData.id}`, {
//         method: "PUT",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(changeData),
//       });
//       console.log(res);
//       if (res.ok) {
//         const data = await res.json();
//         setUser(data);
//       }
//     } catch (error) {
//       alert("Error add to wishlist: " + error);
//     }
//   };

//   useEffect(() => {
//     user && dispatch(setUserData(user));
//   }, [user]);

//   return {
//     getUsers,
//     checkRegister,
//     registerUser,
//     editUserData,
//     newUser,
//   };
// };
