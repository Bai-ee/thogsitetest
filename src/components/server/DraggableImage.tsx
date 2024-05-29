"use client";

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Draggable } from 'gsap/all';
import Image from 'next/image';

gsap.registerPlugin(Draggable);

const DraggableImage: React.FC = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && imageContainerRef.current) {
      Draggable.create(imageContainerRef.current, {
        type: 'x',
        edgeResistance: 0.65,
        inertia: true,
        onDragEnd: function() {
          const bounds = this.endX;
          const containerWidth = imageContainerRef.current!.offsetWidth;
          const windowWidth = window.innerWidth;

          // If the user swipes to the left end or right end, bounce back to place
          if (bounds > 0) {
            gsap.to(imageContainerRef.current, { x: 0, duration: 0.5, ease: "elastic.out(1, 0.5)" });
          } else if (bounds < -(containerWidth - windowWidth)) {
            gsap.to(imageContainerRef.current, { x: -(containerWidth - windowWidth), duration: 0.5, ease: "elastic.out(1, 0.5)" });
          }
        }
      });
    }
  }, []);

  return (
    <div ref={imageContainerRef} style={styles.container}>
      <Image
        src="/images/thoggame/bg_noRainbo.png"
        alt="section 1 background"
        fill
        sizes="(max-width: 1800px) 1800px, 100vw"
        quality={100}
        priority
        className="object-cover"
        style={styles.image}
      />
    </div>
  );
};

const styles = {
  container: {
    width: '100%',
    height: '100%',
    position: 'absolute' as 'absolute',
    cursor: 'pointer',
    overflow: 'visible',
    zIndex: 1000,
  },
  image: {
    position: 'absolute' as 'absolute',
    height: '100%',
    width: '100%',
    inset: 0,
    color: 'transparent',
    touchAction: 'pan-y',
    overflow: 'visible',
    zIndex: 1000,
  }
};

export default DraggableImage;
