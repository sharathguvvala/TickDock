import Image from "next/image";
import emailTop from "../../public/img/contact/emailTop.svg";
import emailBig from "../../public/img/contact/emailBig.svg";

export default function Contact(props){
    return (
      <div className="flex items-center justify-center">
        <div
          className="flex flex-col items-center mx-4 mt-4 mb-16 p-5 border-2 border-white rounded-xl
            laptop:grid laptop:grid-cols-2 laptop:m-24 laptop:p-16 max-w-[1700px]"
        >
          <div className="laptop:hidden">
            <Image src={emailTop} alt="image" />
          </div>
          <div className="laptop:oder-2">
            {/* <div className="text-center mb-6 mt-8">
              <h1 className="m-auto text-left">
                Our Team is Here to Help! <span className="text-black">💬</span>
              </h1>
              <p className="sub-heading-2 m-auto font-normal laptop:text-left text-center">
                You can reach out to us for any feedback or suggestion. We will
                always be ready to help.
              </p>
            </div> */}
            <form action="https://formspree.io/f/xknyqeza" method="POST">
              <div className="laptop:grid laptop:grid-cols-1">
                <div className="mt-4">
                  <label className="form-text" htmlFor="title">
                    Title
                  </label>
                  <input
                    id="title"
                    name="title"
                    type="text"
                    className="input-form"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label htmlFor="description" className="form-text block">
                    Description of Event
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    className="input-form"
                  />
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="location">
                    Location
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    className="input-form"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="time">
                    Time
                  </label>
                  <input
                    id="time"
                    name="time"
                    type="text"
                    className="input-form"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="priceineth">
                    Price(In ETH)
                  </label>
                  <input
                    id="priceineth"
                    name="priceineth"
                    type="text"
                    className="input-form"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="priceindai">
                    Price(In DAI)
                  </label>
                  <input
                    id="priceindai"
                    name="priceindai"
                    type="text"
                    className="input-form"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="numberofseats">
                    Number of Seats
                  </label>
                  <input
                    id="numberofseats"
                    name="numberofseats"
                    type="text"
                    className="input-form"
                    required
                  />
                </div>
                <div className="mt-4">
                  <label className="form-text" htmlFor="uploadimage">
                    Upload an Image
                  </label>
                  <input
                    id="uploadimage"
                    name="uploadimage"
                    type="text"
                    className="input-form"
                    required
                  />
                </div>
              </div>

              <button className="primary m-auto mt-6">Submit</button>
            </form>
          </div>
          <div className="hidden laptop:block ml-16 text-center">
            <Image src={emailBig} alt="image" />
          </div>
        </div>
      </div>
    );
}