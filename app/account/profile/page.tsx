import SelectCountry from '@/app/_components/SelectCountry';
import UpdateProfileForm from '@/app/_components/UpdateProfileForm';
import Image from 'next/image';

export const metadata = {
  title: 'Upate Profile',
};

export default function Page() {
  // CHANGE
  const nationality = 'portugal';

  return (
    <div>
      <h2 className="mb-4 text-2xl font-semibold text-accent-400">
        Update your guest profile
      </h2>

      <p className="mb-8 text-lg text-primary-200">
        Providing the following information will
        make your check-in process faster and
        smoother. See you soon!
      </p>
      <UpdateProfileForm>
        <SelectCountry
          name="nationality"
          id="nationality"
          className="w-full px-5 py-3 rounded-sm shadow-sm bg-primary-200 text-primary-800"
          defaultCountry={nationality}
        />
      </UpdateProfileForm>
    </div>
  );
}
