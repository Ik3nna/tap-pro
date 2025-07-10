import { useEffect, useRef, useState } from "react"
import { 
  IoIosArrowDown
} from "react-icons/io";
import { motion, AnimatePresence, easeInOut } from "framer-motion";


function App() {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [showPayButton, setShowPayButton] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowPayButton(true);
    }, 3000); // 5 seconds

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        setShowModal(false);
      }
    }

    if (showModal) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal]);
  
  return (
    <main className="container">
      <section className="header" ref={modalRef}>
        <div className="flex">
          <img className="tapro" alt="Tapro icon" src="https://d1wqzb5bdbcre6.cloudfront.net/182832760f652d8d4cb33cb14428cd4acbabc67629b9192c99d551950baead7d/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878555756344e5842484e6a5656567a5a3464566f3366475a6662476c325a56396951546c6e4e486c3259556f34537a4a42646b784553586f77566e51334d455130304975716c5a50654a/6d65726368616e745f69643d616363745f31516578357047363555573678755a3726636c69656e743d5041594d454e545f50414745" />
          <div>Tapro</div>
        </div>

        <div className="flex" onClick={() => setShowModal(!showModal)} >
          <div>{showModal ? "Close" : "Details"}</div>
          <IoIosArrowDown className={`arrow ${showModal ? "open" : ""}`} />
        </div>

        <AnimatePresence>
          {showModal && (
            <motion.div
              className="dropdown-wrapper"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="dropdown-menu">Dropdown Content</div>
              <div className="partial-overlay" onClick={() => setShowModal(false)} />
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      <section className="content">
        <motion.img 
          className="tapro" 
          alt="Tapro icon" 
          {...defaultMotionProps} 
          variants={fadeUpVariant} 
          transition={createTransition(1, 0.3)}
          src="https://d1wqzb5bdbcre6.cloudfront.net/182832760f652d8d4cb33cb14428cd4acbabc67629b9192c99d551950baead7d/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878555756344e5842484e6a5656567a5a3464566f3366475a6662476c325a56396951546c6e4e486c3259556f34537a4a42646b784553586f77566e51334d455130304975716c5a50654a/6d65726368616e745f69643d616363745f31516578357047363555573678755a3726636c69656e743d5041594d454e545f50414745" 
        />

        <div className="description">
          <motion.p
            {...defaultMotionProps} 
            variants={fadeUpVariant} 
            transition={createTransition(1, 0.2)}
          >
            Try BETA Business Tier
          </motion.p>
          <motion.p
            {...defaultMotionProps} 
            variants={fadeUpVariant} 
            transition={createTransition(1, 0.3)}
          >
            €350.00
          </motion.p>
          <motion.p
            {...defaultMotionProps} 
            variants={fadeUpVariant} 
            transition={createTransition(1, 0.4)}
          >
            Then €100.00 per year
          </motion.p>
        </div>

        <AnimatePresence>
          {showPayButton && (
            <motion.div
              className="pay"
              variants={fadeUpVariant}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.8 }}
            >
              Pay
            </motion.div>
          )}
        </AnimatePresence>

        <motion.article layout>
          <div className="line">
            <motion.hr 
              {...defaultMotionProps} 
              variants={fadeLeftVariant} 
              transition={createTransition(1, 0.5)}
            />
             
            <motion.div
              {...defaultMotionProps} 
              variants={fadeDownVariant} 
              transition={createTransition(1, 0.5)}
            >
              or
            </motion.div> 
            
            <motion.hr 
              {...defaultMotionProps} 
              variants={fadeRightVariant} 
              transition={createTransition(1, 0.5)}
            />
          </div>

          <div>
            <motion.p
              {...defaultMotionProps} 
              variants={fadeUpVariant} 
              transition={createTransition(1, 0.4)}
            >
              Email
            </motion.p>
            <motion.input 
              type="email" 
              placeholder="Enter your email" 
              {...defaultMotionProps} 
              variants={fadeUpVariant} 
              transition={createTransition(1, 0.5)}
            />
          </div>
        </motion.article>
      </section>
    </main>
  )
}

export default App



const defaultMotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, amount: 0.3 },
};
const fadeUpVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 }
};
export const fadeDownVariant = {
  hidden: { opacity: 0, y: -30 },
  visible: { opacity: 1, y: 0 }
};
export const fadeLeftVariant = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0 }
};
export const fadeRightVariant = {
  hidden: { opacity: 0, x: 30 },
  visible: { opacity: 1, x: 0 }
};
export const createTransition = (duration: number, delay: number) => ({
  duration,
  delay,
  ease: easeInOut
});