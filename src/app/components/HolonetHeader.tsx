import { homeConfig } from '@/app/home.config';

export default function HolonetHeader() {
  const { title, subtitle } = homeConfig.header;

  return (
    <div className='text-center'>
      <h1 className='text-4xl font-bold text-white'>{title}</h1>
      <p className='mt-2 text-lg text-[var(--imperial-text)]'>
        {subtitle}
      </p>
    </div>
  );
}
