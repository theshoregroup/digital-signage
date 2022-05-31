import { useSession, signIn } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function AddANewClient() {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const router = useRouter();
  const { id } = router.query;

  const [token, setToken] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { token };
      await fetch("/api/admin/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add New Client</h1>
      uuid: {id}
      <form onSubmit={handleSubmit}>
        <label htmlFor="token">Title</label>
        <input
          type="text"
          id="token"
          value={token}
          onChange={(e) => setToken(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
