import { auth } from '../_lib/auth';

export const metadata = {
  title: 'Guest Area',
};

const AccountPage = async () => {
  const session = await auth();
  const firstName = session.user.name
    .split(' ')
    .at(0);
  console.log(session);

  return (
    <div className="text-2xl font-semibold text-accent-400 mb-7">
      Welcome, {firstName}
    </div>
  );
};

export default AccountPage;
