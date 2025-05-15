// src/components/Section.tsx
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Section({
  children,
  imgSrc,
  delay = 0
}: {
  children: React.ReactNode;
  imgSrc: string;
  delay?: number;
}) {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col md:flex-row items-center gap-8 my-12"
    >
      <motion.img 
        src={imgSrc}
        alt=""
        whileHover={{ scale: 1.05 }}
        className="w-full md:w-1/2 rounded-lg shadow-xl"
      />
      <div className="w-full md:w-1/2">
        {children}
      </div>
    </motion.section>
  );
}