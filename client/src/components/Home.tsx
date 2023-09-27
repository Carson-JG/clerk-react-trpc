import './App.css';

import { UserButton, useSession } from '@clerk/clerk-react';

import UserEmail from './UserEmail';
import UserName from './UserName';

import { trpc, setToken } from '../utils/trpc';

export default function Home() {
  const { session } = useSession();

  session?.getToken().then(setToken);

  const onClickHandler = async () => {
    try {
      const response = await trpc.email.query();
      console.log(response);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>Clerk Test Home</h1>
      <UserButton />
      <p>
        Hello, <UserName />
        <br />
        <small>
          (<UserEmail />)
        </small>
      </p>
      <a href="/about">About &rarr;</a>
      <p>
        <button onClick={onClickHandler}>Test tRPC</button>
      </p>
    </>
  );
}
