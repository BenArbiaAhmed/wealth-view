import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <p className="text-[22px] md:text-[33px]">Wealth View</p>
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
    </div>
  );
}
