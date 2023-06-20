"use client"
import {useUser} from "react";
import RootLayout from './layout.js';
 
const Profile = () => {
  const { user } = useUser({ redirectTo: '/login' })

  if (!user || user.isLoggedIn === false) {
    return <RootLayout>Loading...</RootLayout>
  }
 
  return (
    <RootLayout>
      <h1>Your Profile</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
    </RootLayout>
  )
}
 
export default Profile;