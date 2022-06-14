// import { useScroll } from "../components/useScroll";
import Image from "next/image";
import { motion } from "framer-motion";
import { useScroll } from "../useScroll";
import communityMsg from "../../public/img/landing/community-msg.svg";
import rocket from "../../public/img/emoji/rocket.png";
import party from "../../public/img/emoji/party-popper.png";
import { headerAnimation, imageAnimation } from "../Animations";

export default function Starter() {
  const [element, controls] = useScroll();
  return (
    <div
      ref={element}
      className="relative flex flex-col pt-24
                      laptop:grid laptop:grid-cols-2"
    >
      <div
        className="relative flex flex-col mb-6 justify-center
                        laptop:order-2 laptop:mb-0"
      >
        <motion.div
          whileHover={{ y: -5 }}
          whileTap={{ y: 0 }}
          variants={headerAnimation}
          animate={controls}
          transition={{ delay: 0.2, type: "tween" }}
        >
          <Image src={communityMsg} alt="image" />
        </motion.div>
      </div>

      <div
        className="relative flex flex-col items-center
                        laptop:block laptop:order-1"
      >
        <div
          className="relative flex flex-col items-center
                          laptop:items-start "
        >
          <h5>Don&apos;t buy tickets</h5>
          <h1 className="mb-1">Buy NFT</h1>
          <h4 className="mb-1 text">NFT as a ticketing service</h4>
          <h4 className="relative flex flex-row mb-3 ">
            Community Of Developers
            <p className="h-8 w-8 ml-2">
              <Image src={rocket} alt="image" />
            </p>
          </h4>
          {/* <p
            className="relative sub-heading-1 mb-6 text-center max-w-[50%]
                          laptop:mb-11 laptop:text-left laptop:max-w-[75%]"
          >
            CodeAsia is a non-profit of students who encourage each other to do
            the best as makers & coders.
          </p> */}
        </div>
        <motion.button className="primary" whileHover={{ y: -2 }} whileTap={{ y: 0 }}>
          
            Connect Wallet&nbsp;
            <Image width={20} height={20} src={party} alt="image" />
        
        </motion.button>
      </div>
    </div>
  );
}
