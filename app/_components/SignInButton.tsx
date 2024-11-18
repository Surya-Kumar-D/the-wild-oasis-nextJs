import Image from 'next/image';

function SignInButton() {
  return (
    <button className="relative flex items-center gap-6 px-10 py-4 text-lg font-medium border border-primary-300">
      <Image
        fill
        src="https://authjs.dev/img/providers/google.svg"
        alt="Google logo"
        height="24"
        width="24"
      />
      <span>Continue with Google</span>
    </button>
  );
}

export default SignInButton;
