"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Page() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  console.log(user);

  return (
    <div>
      <h1>Week 10</h1>

      <p>
        {user ? (
          <button onClick={firebaseSignOut}>Sign Out</button>
        ) : (
          <button onClick={gitHubSignIn}>Sign In</button>
        )}
      </p>

      {user && (
        <div>
          <p>Welcome, {user.displayName}!</p>
          <p>Your email address is {user.email}.</p>

          {/* ✅ Ensure safe image rendering */}
          {user.photoURL && (
            <img
              src={user.photoURL}
              alt={user.displayName}
              style={{ width: "100px", borderRadius: "50%" }}
            />
          )}

          <p>
            <Link href="/week-10/shopping-list">Visit the Landing page.</Link>
          </p>
        </div>
      )}
    </div>
  );
}
