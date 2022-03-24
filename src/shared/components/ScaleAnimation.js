import React, { useEffect, useRef } from 'react';

function ScaleAnimation({ children }) {
  const scaleAnimationRef = useRef(null);

  const ChildComponentWithRef = React.forwardRef((props, ref) => (
    React.cloneElement(children, { ...props, ref })
  ));

  const callBack = (entries, observer) => {
    const [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.classList.remove('scale-animation');
    entry.target.classList.add('scale-animation');
    observer.unobserve(entry.target);
  };

  useEffect(() => {
    let observerRefValue = null
    const options = { root: null, threshold: 0.8 };

    const observer = new IntersectionObserver(callBack, options)

    if (scaleAnimationRef.current) {
      observer.observe(scaleAnimationRef.current);
      observerRefValue = scaleAnimationRef.current;
    }

    return () => {
      if (observerRefValue) observer.unobserve(observerRefValue);
    }
  }, []);

  return <ChildComponentWithRef ref={scaleAnimationRef} />

}

export default ScaleAnimation;