import { useUser } from '@clerk/clerk-react';

export default function UserName() {
  const { user } = useUser();
  const fullName = user?.fullName;
  return <span>{fullName}</span>;
}
