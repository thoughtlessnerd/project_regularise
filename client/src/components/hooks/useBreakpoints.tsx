import { useState, useEffect } from 'react';

interface Breakpoints {
  [key: string]: number; // Add an index signature
  sm: number;
  md: number;
  lg: number;
  xl: number;
  '2xl': number;
}

interface BreakpointResults {
  windowWidth: number;
  isSm: boolean;
  isMd: boolean;
  isLg: boolean;
  isXl: boolean;
  is2xl: boolean;
}

export default function useBreakpoints(): BreakpointResults {
  // Define the breakpoints
  const breakpoints: Breakpoints = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    '2xl': 1536,
  };

  // Initialize state with the current window width and active breakpoint
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [activeBreakpoint, setActiveBreakpoint] = useState('');

  useEffect(() => {
    // Function to update the window width and active breakpoint in the state
    const handleResize = () => {
      const newWidth = window.innerWidth;
      setWindowWidth(newWidth);

      // Find the active breakpoint
      const newBreakpoint = Object.keys(breakpoints).find(
        breakpoint => newWidth < breakpoints[breakpoint]
      ) || '2xl'; // Default to '2xl' if no breakpoint is matched

      setActiveBreakpoint(newBreakpoint);
    };

    // Add event listener to listen for window resize events
    window.addEventListener('resize', handleResize);

    // Initialize the active breakpoint on the initial render
    handleResize();

    // Remove event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [breakpoints]); // Include breakpoints in the dependency array

  // Return an object with the current window width and active breakpoint
  return {
    windowWidth,
    isSm: activeBreakpoint === 'sm',
    isMd: activeBreakpoint === 'md',
    isLg: activeBreakpoint === 'lg',
    isXl: activeBreakpoint === 'xl',
    is2xl: activeBreakpoint === '2xl',
  };
}