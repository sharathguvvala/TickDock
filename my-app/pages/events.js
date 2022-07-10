import Navbar from "../components/Navbar";
import poster from "../public/img/poster.svg";
import email from "../public/img/email.svg";
import recent from "../public/img/recent.svg";
import Image from "next/image";
import ContactForm from "../components/contact/ContactForm";
import msg from "../public/img/emoji/speech-balloon.svg";
import pin from "../public/img/emoji/pushpin.svg";

import { useEffect, useState } from "react";

function Events(props) {

  useEffect(() => {
    document.querySelector("body").classList.add("events");
  });

  return (
    <div>
      <Navbar />
      <div className="mt-32 mb-[108px] max-w-7xl mx-auto">
        <h2>explore trending events</h2>
      </div>
      <div className="grid grid-cols-3 grid-rows-2 gap-y-8 mb-52 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start mt-3 mx-3">
              <Image src={poster} alt="image" />
              <div className="large-bold-text mt-2 mb-2 ml-2">
                AMA with Tanay Pratap
              </div>
              <div className="flex flex-row ml-2 mb-6">
                <button className="bg-blue-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]  mr-[18px]">
                  Date : 1/31/14
                </button>
                <button className="bg-purple-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]">
                  Time : 6 PM IST
                </button>
              </div>
              <p className="small-text mb-3 ml-2">
                Participate in high-quality,
                <br />
                engaging events and learn skills.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start mt-3 mx-3">
              <Image src={poster} alt="image" />
              <div className="large-bold-text mt-2 mb-2 ml-2">
                AMA with Tanay Pratap
              </div>
              <div className="flex flex-row ml-2 mb-6">
                <button className="bg-blue-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]  mr-[18px]">
                  Date : 1/31/14
                </button>
                <button className="bg-purple-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]">
                  Time : 6 PM IST
                </button>
              </div>
              <p className="small-text mb-3 ml-2">
                Participate in high-quality,
                <br />
                engaging events and learn skills.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start mt-3 mx-3">
              <Image src={poster} alt="image" />
              <div className="large-bold-text mt-2 mb-2 ml-2">
                AMA with Tanay Pratap
              </div>
              <div className="flex flex-row ml-2 mb-6">
                <button className="bg-blue-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]  mr-[18px]">
                  Date : 1/31/14
                </button>
                <button className="bg-purple-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]">
                  Time : 6 PM IST
                </button>
              </div>
              <p className="small-text mb-3 ml-2">
                Participate in high-quality,
                <br />
                engaging events and learn skills.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start mt-3 mx-3">
              <Image src={poster} alt="image" />
              <div className="large-bold-text mt-2 mb-2 ml-2">
                AMA with Tanay Pratap
              </div>
              <div className="flex flex-row ml-2 mb-6">
                <button className="bg-blue-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]  mr-[18px]">
                  Date : 1/31/14
                </button>
                <button className="bg-purple-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]">
                  Time : 6 PM IST
                </button>
              </div>
              <p className="small-text mb-3 ml-2">
                Participate in high-quality,
                <br />
                engaging events and learn skills.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start mt-3 mx-3">
              <Image src={poster} alt="image" />
              <div className="large-bold-text mt-2 mb-2 ml-2">
                AMA with Tanay Pratap
              </div>
              <div className="flex flex-row ml-2 mb-6">
                <button className="bg-blue-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]  mr-[18px]">
                  Date : 1/31/14
                </button>
                <button className="bg-purple-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]">
                  Time : 6 PM IST
                </button>
              </div>
              <p className="small-text mb-3 ml-2">
                Participate in high-quality,
                <br />
                engaging events and learn skills.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start mt-3 mx-3">
              <Image src={poster} alt="image" />
              <div className="large-bold-text mt-2 mb-2 ml-2">
                AMA with Tanay Pratap
              </div>
              <div className="flex flex-row ml-2 mb-6">
                <button className="bg-blue-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]  mr-[18px]">
                  Date : 1/31/14
                </button>
                <button className="bg-purple-200 hover:bg-blue-700 sub-heading-2 py-1 px-4 rounded-[20px]">
                  Time : 6 PM IST
                </button>
              </div>
              <p className="small-text mb-3 ml-2">
                Participate in high-quality,
                <br />
                engaging events and learn skills.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-32 mb-6 max-w-7xl mx-auto">
        <h2 className="flex flex-row">
          recent replay&nbsp;
          <p className="h-7 w-7 mt-[6px]">
            <Image src={pin} alt="image" />
          </p>
        </h2>
      </div>
      <div className="grid grid-cols-4 gap-y-8 mb-52 max-w-7xl mx-auto">
        <div className="flex flex-col items-center">
          <div className="flex flex-row box-border border-solid border-gradient-1 border-2 rounded-[20px]">
            <div className="flex flex-col items-start mt-3 mx-3">
              <Image src={poster} alt="image" />
              <div className="small-bold-text text-white mt-2 mb-2 ml-2">
                AMA with Tanay Pratap
              </div>
              <div className="flex flex-row ml-2 mb-6">
                <button className="bg-purple-200 text-[13.67px] hover:bg-blue-700 small-inline-bold-text py-1 px-4 rounded-[20px]  mr-[18px]">
                  Recorded on:&nbsp;&nbsp;&nbsp;Date : 1/31/14
                </button>
              </div>
              <p className="small-text mb-3 ml-2">
                Participate in high-quality...
              </p>
            </div>
          </div>
        </div>
      </div>
      <ContactForm/>
     
         </div>
  );
}
export default Events;
