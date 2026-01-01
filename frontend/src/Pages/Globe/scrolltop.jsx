import React, { useState, useEffect } from 'react'

const Scrolltop = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Handle scroll to show/hide scroll-to-top button
  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down more than 300px
      // You can adjust this value based on your banner height
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div>
      <div 
        className="scroll-to-top scroll-to-target" 
        data-target="html"
        style={{ 
          display: showScrollTop ? "block" : "none", 
          cursor: "pointer" 
        }}
        onClick={scrollToTop}
      >
        <span className="icon fa fa-angle-up" />
      </div>
    </div>
  )
}

export default Scrolltop
