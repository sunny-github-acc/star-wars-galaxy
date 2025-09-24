'use client';

import { Terminal as TerminalIcon } from 'lucide-react';
import { useEffect, useState } from 'react';

import Terminal from '@/app/components/Terminal';

type SystemStatus = 'OFFLINE' | 'CONNECTING' | 'NOMINAL';

const STATUSES: SystemStatus[] = ['OFFLINE', 'CONNECTING','NOMINAL' ];

const STATUS_PANEL = {
  title: 'SYSTEM STATUS:',
  operationalText: 'All systems online and operational. Awaiting directive.',
  guidanceText: 'Use the navigation panel to access the Film Archives or Personnel Database.'
};

export default function SystemStatusPanel() {
  const [status, setStatus] = useState<SystemStatus>(STATUSES[0]);

  const statusColors = {
    OFFLINE: 'text-red-500',
    CONNECTING: 'text-yellow-400 animate-pulse',
    NOMINAL: 'text-green-400'
  };

  useEffect(() => {
    const timeoutId1 = setTimeout(() => {
      setStatus(STATUSES[1]);
    }, 1000);

    const timeoutId2 = setTimeout(() => {
      setStatus(STATUSES[2]);
    }, 3000);

    return () => {
      clearTimeout(timeoutId1);
      clearTimeout(timeoutId2);
    };
  }, []);

  return (
    <div
      className='w-full max-w-2xl p-6 border bg-black/20'
      style={{ borderColor: 'var(--imperial-blue-glow)' }}
    >
      <div className='flex items-center space-x-3'>
        <TerminalIcon className='h-6 w-6' style={{ color: 'var(--imperial-blue-glow)' }} />
        <p className='text-xl font-bold text-white text-left' role='status'>
          {STATUS_PANEL.title} <span className={statusColors[status]}>{status}</span>
        </p>
      </div>
      <p className='mt-4 text-left' style={{ color: 'var(--imperial-text)' }}>
        {STATUS_PANEL.operationalText}
        <br />
        {STATUS_PANEL.guidanceText}
      </p>
      <Terminal />
    </div>
  );
}