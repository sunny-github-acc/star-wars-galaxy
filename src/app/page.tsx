import Layout from '@/app/components/Layout';

import HolonetHeader from '@/app/components/HolonetHeader';
import SystemStatusPanel from '@/app/components/SystemStatusPanel';

export default function Home() {
  return (
    <Layout>
      <HolonetHeader />
      <div className='mt-8 flex flex-col items-center justify-center space-y-8'>
        <SystemStatusPanel />
      </div>
    </Layout>
  );
}
