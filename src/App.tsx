import { useEffect, useRef, useState } from "react"
import { 
  IoIosArrowDown
} from "react-icons/io";
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Skeleton from "./component/skeleton";


function App() {
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false);
  const [showPayButton, setShowPayButton] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);
  const modalRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setLoading(true);
  
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
  
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  
  useEffect(() => {
    if (isMobile && !showPayButton) {
      const timeout = setTimeout(() => {
        setShowPayButton(true);
      }, 3000);
  
      return () => clearTimeout(timeout);
    }
  }, [isMobile, showPayButton]);

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
      <section className="container1">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.article
              key="skeleton"
              variants={snapshotVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex">
                <Skeleton variant="circle" className="tapro" />
                <Skeleton variant="rect" style={{ width: "150px", height: "28px" }} />
              </div>

              <div className="description">
                <Skeleton variant="rect" style={{ width: "200px", height: "20px" }} />
                <Skeleton variant="rect" style={{ width: "100px", height: "20px" }} />
                <Skeleton variant="rect" style={{ width: "150px", height: "20px" }} />
              </div>

              <div className="pay-container">
                <div className="pay">
                  <Skeleton variant="rect" style={{ width: "48px", height: "48px" }} />
                  
                  <div>
                    <div>
                      <Skeleton variant="rect" style={{ width: "100px", height: "20px" }} />
                      <Skeleton variant="rect" style={{ width: "100px", height: "20px" }} />
                    </div>

                    <Skeleton variant="rect" style={{ width: "300px", height: "20px", marginTop: "5px" }} />

                    <Skeleton variant="rect" style={{ width: "150px", height: "20px", marginTop: "5px" }} />
                  </div>
                </div>

                <div className="pay">
                  <Skeleton variant="rect" style={{ width: "48px", height: "48px" }} />

                  <div>
                    <div>
                      <Skeleton variant="rect" style={{ width: "100px", height: "20px" }} />
                      <Skeleton variant="rect" style={{ width: "100px", height: "20px" }} />
                    </div>

                    <Skeleton variant="rect" style={{ width: "300px", height: "20px", marginTop: "5px" }} />

                    <Skeleton variant="rect" style={{ width: "150px", height: "20px", marginTop: "5px" }} />
                  </div>
                </div>
              </div>
            </motion.article>
          ) : (
            <motion.article
              key="content"
              variants={snapshotVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="flex">
                <img className="tapro" alt="Tapro icon" src="https://d1wqzb5bdbcre6.cloudfront.net/182832760f652d8d4cb33cb14428cd4acbabc67629b9192c99d551950baead7d/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878555756344e5842484e6a5656567a5a3464566f3366475a6662476c325a56396951546c6e4e486c3259556f34537a4a42646b784553586f77566e51334d455130304975716c5a50654a/6d65726368616e745f69643d616363745f31516578357047363555573678755a3726636c69656e743d5041594d454e545f50414745" />
                <div>Tapro</div>
              </div>
              
              <div className="description">
                <p>Try BETA Business Tier</p>
                <p>€350.00</p>
                <p>Then €100.00 per year</p>
              </div>

              <div className="pay-container">
                <div className="pay">
                  <img alt="Tapro icon" src="https://d1wqzb5bdbcre6.cloudfront.net/182832760f652d8d4cb33cb14428cd4acbabc67629b9192c99d551950baead7d/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878555756344e5842484e6a5656567a5a3464566f3366475a6662476c325a56396951546c6e4e486c3259556f34537a4a42646b784553586f77566e51334d455130304975716c5a50654a/6d65726368616e745f69643d616363745f31516578357047363555573678755a3726636c69656e743d5041594d454e545f50414745" />

                  <div>
                    <div>
                      <p>BETA Business Tier</p>
                      <p>365 days free</p>
                    </div>

                    <p>1 person - Business Plan (Normally €25/month)</p>

                    <p>€100.00 / year after</p>
                  </div>
                </div>

                <div className="pay">
                  <img alt="Tapro icon" src="https://d1wqzb5bdbcre6.cloudfront.net/182832760f652d8d4cb33cb14428cd4acbabc67629b9192c99d551950baead7d/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878555756344e5842484e6a5656567a5a3464566f3366475a6662476c325a56396951546c6e4e486c3259556f34537a4a42646b784553586f77566e51334d455130304975716c5a50654a/6d65726368616e745f69643d616363745f31516578357047363555573678755a3726636c69656e743d5041594d454e545f50414745" />

                  <div>
                    <div>
                      <p>Tapro BETA Bundle</p>
                      <p>€350.00</p>
                    </div>

                    <p>Tapro Beta Bundle Plan (NFC card + Business Tier) normally:</p>

                    <p>€350</p>
                  </div>
                </div>
              </div>
            </motion.article>
          )}
        </AnimatePresence>
      </section>

      <section className="container2">
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.article
              key="skeleton"
              variants={snapshotVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {isMobile ? (
                <div className="mobile-payment-deet">
                  <Skeleton className="mobile-tapro" variant="rect" />

                  <div className="description">
                    <Skeleton variant="rect" style={{ width: "200px", height: "20px" }} />
                    <Skeleton variant="rect" style={{ width: "100px", height: "20px", margin: "auto" }} />
                    <Skeleton variant="rect" style={{ width: "200px", height: "20px" }} />
                  </div>
                </div>
                ) : (
                <Skeleton className="payment-deet" variant="rect" style={{ width: "150px", height: "28px" }} />
              )}
             
              <div className="container2-flex">
                <Skeleton className="payment-deet" variant="rect" style={{ width: "100px", height: "28px" }} />
                <Skeleton className="payment-deet" variant="rect" style={{ width: isMobile ? "100%" : "400px", height: "30px" }} />
              </div>

              <div className="container2-flex">
                <Skeleton className="payment-deet" variant="rect" style={{ width: "100px", height: "28px" }} />
                <Skeleton className="method" variant="rect" />
              </div>
            </motion.article> ) : (
            <motion.article
              key="content"
              variants={snapshotVariant}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {isMobile ? (
                <div className="mobile-payment-deet">
                  <img 
                    className="mobile-tapro" 
                    alt="Tapro icon" 
                    src="https://d1wqzb5bdbcre6.cloudfront.net/182832760f652d8d4cb33cb14428cd4acbabc67629b9192c99d551950baead7d/68747470733a2f2f66696c65732e7374726970652e636f6d2f66696c65732f4d44423859574e6a64463878555756344e5842484e6a5656567a5a3464566f3366475a6662476c325a56396951546c6e4e486c3259556f34537a4a42646b784553586f77566e51334d455130304975716c5a50654a/6d65726368616e745f69643d616363745f31516578357047363555573678755a3726636c69656e743d5041594d454e545f50414745" 
                  />

                  <div className="description">
                    <p>Try BETA Business Tier</p>
                    <p>€350.00</p>
                    <p>Then €100.00 per year</p>
                  </div>
                </div>
              ) : (
                <div className="payment-deet">Enter payment details</div>
              )}

              {isMobile && (
                <AnimatePresence>
                  {showPayButton && (
                    <motion.div
                      className="pay-button"
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
              )}

              <motion.article layout>
                <div className="container2-flex">
                  <p>Email</p>
                  <input 
                    type="email" 
                    placeholder="Enter your email" 
                  />
                </div>

                <div className="container2-flex">
                  <div className="payment-meth">Payment method</div>
                  <div className="method" />
                </div>
              </motion.article>
            </motion.article>
          )}
        </AnimatePresence>
      </section>
      
      
      {/* <section className="header" ref={modalRef}>
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
      </section> */}
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
const snapshotVariant = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.2, ease: easeInOut } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.3, ease: easeInOut } },
};
const createTransition = (duration: number, delay: number) => ({
  duration,
  delay,
  ease: easeInOut
});