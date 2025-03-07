
import React, { useEffect, useRef, ReactNode } from 'react';
import { cn } from "@/lib/utils";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const FadeIn = ({
  children,
  className,
  delay = 0,
  direction = 'up',
  duration = 600,
  threshold = 0.1,
  once = true,
}: FadeInProps) => {
  const elementRef = useRef<HTMLDivElement>(null);
  const initiallyVisible = useRef(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Set a delay if provided
            setTimeout(() => {
              element.style.opacity = '1';
              element.style.transform = 'translate3d(0, 0, 0)';
            }, delay);
            
            if (once) {
              observer.unobserve(element);
            }
          } else if (!once) {
            element.style.opacity = '0';
            
            // Reset transform based on direction
            switch (direction) {
              case 'up':
                element.style.transform = 'translate3d(0, 20px, 0)';
                break;
              case 'down':
                element.style.transform = 'translate3d(0, -20px, 0)';
                break;
              case 'left':
                element.style.transform = 'translate3d(20px, 0, 0)';
                break;
              case 'right':
                element.style.transform = 'translate3d(-20px, 0, 0)';
                break;
              default:
                element.style.transform = 'translate3d(0, 0, 0)';
            }
          }
        });
      },
      { threshold }
    );

    // Set initial state
    switch (direction) {
      case 'up':
        element.style.transform = 'translate3d(0, 20px, 0)';
        break;
      case 'down':
        element.style.transform = 'translate3d(0, -20px, 0)';
        break;
      case 'left':
        element.style.transform = 'translate3d(20px, 0, 0)';
        break;
      case 'right':
        element.style.transform = 'translate3d(-20px, 0, 0)';
        break;
      default:
        element.style.transform = 'translate3d(0, 0, 0)';
    }

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [delay, direction, once, threshold]);

  return (
    <div
      ref={elementRef}
      className={cn(className)}
      style={{
        opacity: initiallyVisible.current ? 1 : 0,
        transition: `opacity ${duration}ms cubic-bezier(0.19, 1, 0.22, 1), transform ${duration}ms cubic-bezier(0.19, 1, 0.22, 1)`,
        willChange: 'opacity, transform'
      }}
    >
      {children}
    </div>
  );
};

export default FadeIn;
