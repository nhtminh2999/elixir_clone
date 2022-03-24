import React, { useEffect, useRef } from 'react'

function FadeAnimation({ children }) {
  const fadeAnimationRef = useRef(null);

  const ChildComponentWithRef = React.forwardRef((props, ref) => (
    React.cloneElement(children, { ...props, ref })
  ));

  const callBack = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('fade-in-bottom');
    entry.target.classList.remove('opacity-0');
    entry.target.classList.add('fade-in-bottom');
    observer.unobserve(entry.target);
  };

  useEffect(() => {
    let observerRefValue = null
    const options = { root: null, threshold: 0.8 };

    const observer = new IntersectionObserver(callBack, options)

    if (fadeAnimationRef.current) {
      observer.observe(fadeAnimationRef.current);
      observerRefValue = fadeAnimationRef.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    }
  }, []);

  return <ChildComponentWithRef ref={fadeAnimationRef} />
}

export default FadeAnimation;