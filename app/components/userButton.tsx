import { UserButton } from "@clerk/nextjs";

const UserProfile = () => {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
};

export default UserProfile;
