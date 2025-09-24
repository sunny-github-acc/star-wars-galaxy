'use client';

import { useRouter } from 'next/navigation';
import React, { useState, useRef, useEffect, KeyboardEvent } from 'react';

const Loader = ({ text = 'Processing...' }: { text?: string }) => {
  const [frame, setFrame] = useState(0);
  const frames = ['|', '/', '—', '\\'];

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((prev) => (prev + 1) % frames.length);
    }, 150);
    return () => clearInterval(interval);
  }, [frames.length]);

  return <div style={{ color: 'var(--imperial-blue-glow)' }}>{text} [{frames[frame]}]</div>;
};

const WelcomeMessage = () => (
  <div className='text-gray-400'>
    <p>{'// ISB HOLONET KERNEL v3.1'}</p>
    <p className='mt-2'>{'Enter directive \'help\' for a list of available commands.'}</p>
  </div>
);

const Terminal = () => {
  const router = useRouter();
  const [history, setHistory] = useState<React.ReactNode[]>([<WelcomeMessage key='welcome' />]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [history]);

  useEffect(() => {
    const handleClick = () => inputRef.current?.focus();
    const terminalElement = terminalRef.current;
    terminalElement?.addEventListener('click', handleClick);
    return () => {
      terminalElement?.removeEventListener('click', handleClick);
    };
  }, []);

    useEffect(() => {
    if (!isLoading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isLoading]);

  const processCommand = (command: string): React.ReactNode => {
    const [cmd, arg] = command.toLowerCase().split(' ');

    switch (cmd) {
      case 'help':
        return 'Available directives: cd <path>, home, clear. Paths: films, characters.';

      case 'cd':
        if (arg === 'films' || arg === 'characters') {
          router.push(`/${arg}`);
          return `// Navigating to ${arg.toUpperCase()} archives...`;
        }
        return `// Invalid path: ${arg}. Available paths: films, characters.`;

      case 'home':
        router.push('/');
        return '// Returning to terminal home...';

      case 'clear':
        setHistory([<WelcomeMessage key={Date.now()} />]);
        return '';

      default:
        return `// Directive not recognized: ${cmd}. Use 'help' for a list of directives.`;
    }
  };

  const handleKeyDown = async (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !isLoading) {
      const currentInput = input;
      setInput('');
      setIsLoading(true);

      const commandEntry = (
        <div className='flex flex-row space-x-2'>
          <span
            className='flex-shrink'
            style={{ color: 'var(--imperial-red-accent)' }}
          >
            {'ISB>'}
          </span>
          <span style={{ color: 'var(--imperial-text)' }}>
            {currentInput}
          </span>
        </div>
      );

      let loadingText = 'Processing directive...';
      if (currentInput.startsWith('cd')) {
        loadingText = 'Establishing HoloNet connection...';
      }

      setHistory(prev => [...prev, commandEntry, <Loader text={loadingText} key={Date.now()} />]);

      // Simulate network delay for effect
      await new Promise(res => setTimeout(res, 300 + Math.random() * 400));

      const commandOutput = processCommand(currentInput);

      setHistory(prev => {
        const newHistory = [...prev];
        newHistory[newHistory.length - 1] = (
          <div style={{ color: 'var(--imperial-text)' }}>
            {commandOutput}
          </div>
        );
        return newHistory;
      });

      setIsLoading(false);
    }
  };

  return (
    <div ref={terminalRef} className='h-full w-full font-mono overflow-y-auto'>
      <div>{history.map((item, index) => <div key={index}>{item}</div>)}</div>
      <div className='flex flex-row space-x-2'>
        <label
          htmlFor='prompt'
          className='flex-shrink'
          style={{ color: 'var(--imperial-red-accent)' }}
        >
          {'ISB>'}
        </label>
        <input
          ref={inputRef}
          id='prompt'
          type='text'
          className='flex-grow bg-transparent focus:outline-none'
          style={{ color: 'var(--imperial-text)' }}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={isLoading}
          autoFocus
        />
      </div>
    </div>
  );
};

export default Terminal;