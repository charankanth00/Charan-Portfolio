"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function FluidCursor() {
  const [isVisible, setIsVisible] = useState(true);
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 20, stiffness: 300 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  // Enhanced mobile detection
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const isMobileDevice = /android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(userAgent);
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      const isSmallScreen = window.innerWidth <= 768;
      const hasCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
      
      setIsMobile(isMobileDevice || isTouchDevice || isSmallScreen || hasCoarsePointer);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    window.addEventListener('orientationchange', checkMobile);

    return () => {
      window.removeEventListener('resize', checkMobile);
      window.removeEventListener('orientationchange', checkMobile);
    };
  }, []);

  useEffect(() => {
    // Skip all cursor logic on mobile
    if (isMobile) return;

    const moveCursor = (e) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);
    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);
    
    const handleHoverStart = (e) => {
      setIsHovering(true);
      // Add blue glow class to the hovered element
      e.target.classList.add('cursor-hover-glow');
    };
    
    const handleHoverEnd = (e) => {
      setIsHovering(false);
      // Remove blue glow class from the element
      e.target.classList.remove('cursor-hover-glow');
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseenter", handleMouseEnter);
    window.addEventListener("mouseleave", handleMouseLeave);

    // Enhanced interactive elements selector
    const interactiveElements = document.querySelectorAll(
      `a, button, [role='button'], input, textarea, select, 
       .cursor-pointer, [data-cursor='pointer'], 
       input[type="checkbox"], input[type="radio"], 
       input[type="submit"], input[type="button"], 
       [tabindex], [onclick], .btn, .button, 
       summary, details, label[for], 
       .clickable, .interactive, .hover-target,
       nav a, .nav-link, .menu-item, .bg-gradient-to-r`
    );

    // Add listeners with immediate effect checking
    const addInteractiveListeners = () => {
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleHoverStart, { passive: true });
        el.addEventListener("mouseleave", handleHoverEnd, { passive: true });
        el.addEventListener("focus", handleHoverStart, { passive: true });
        el.addEventListener("blur", handleHoverEnd, { passive: true });
      });
    };

    // Initial setup
    addInteractiveListeners();

    // Re-scan for new interactive elements periodically
    const rescanInterval = setInterval(() => {
      const newElements = document.querySelectorAll(
        `a, button, [role='button'], input, textarea, select, 
         .cursor-pointer, [data-cursor='pointer'], 
         input[type="checkbox"], input[type="radio"], 
         input[type="submit"], input[type="button"], 
         [tabindex], [onclick], .btn, .button, 
         summary, details, label[for], 
         .clickable, .interactive, .hover-target,
         nav a, .nav-link, .menu-item, .bg-gradient-to-r`
      );
      
      newElements.forEach((el) => {
        if (!el.hasAttribute('data-cursor-listener')) {
          el.setAttribute('data-cursor-listener', 'true');
          el.addEventListener("mouseenter", handleHoverStart, { passive: true });
          el.addEventListener("mouseleave", handleHoverEnd, { passive: true });
          el.addEventListener("focus", handleHoverStart, { passive: true });
          el.addEventListener("blur", handleHoverEnd, { passive: true });
        }
      });
    }, 1000);

    return () => {
      clearInterval(rescanInterval);
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
      
      // Remove all interactive element listeners
      document.querySelectorAll('[data-cursor-listener]').forEach((el) => {
        el.removeEventListener("mouseenter", handleHoverStart);
        el.removeEventListener("mouseleave", handleHoverEnd);
        el.removeEventListener("focus", handleHoverStart);
        el.removeEventListener("blur", handleHoverEnd);
        el.removeAttribute('data-cursor-listener');
      });
    };
  }, [cursorX, cursorY, isMobile]);

  // Don't render anything on mobile devices
  if (isMobile) return null;

  return (
    <>
      {/* Moon/Sun cursor that changes based on hover state */}
      <motion.div
        className={isHovering ? "sun-cursor" : "moon-cursor"}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 0.7 : isHovering ? 1.4 : 1,
          rotate: isHovering ? 360 : 0,
          opacity: isVisible ? 1 : 0,
        }}
        transition={{ 
          type: "spring", 
          stiffness: 400, 
          damping: 25,
          rotate: { duration: 0.8, ease: "easeInOut" }
        }}
      >
        {isHovering ? "☀️" : "🌙"}
      </motion.div>

      {/* Dynamic glow effect that changes color based on cursor type */}
      <motion.div
        className={isHovering ? "sun-glow" : "moon-glow"}
        style={{
          left: cursorXSpring,
          top: cursorYSpring,
        }}
        animate={{
          scale: isClicking ? 1.5 : isHovering ? 2 : 1.2,
          opacity: isVisible ? (isHovering ? 0.6 : 0.3) : 0,
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeOut"
        }}
      />
    </>
  );
}
