import { useUser } from '@clerk/clerk-react';

export default function UserEmail() {
  const { user } = useUser();
  const emailAddress = user?.emailAddresses.find(
    emailAddress => emailAddress.id === user.primaryEmailAddressId
  )?.emailAddress;
  return <span>{emailAddress}</span>;
}
