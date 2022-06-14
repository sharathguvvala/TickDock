import Image from "next/image";
import emailTop from "../../public/img/contact/emailTop.svg";
import emailBig from "../../public/img/contact/emailBig.svg";
import {ethers,Contract} from 'ethers'
import {TickDock_Contract_Address,TickDock_ABI} from '../../utils/index'


export default function Contact(props){
  const createEvent = async() => {
    try {
      //const signer = await connectWallet(true)
      //const TickDockContract = new Contract(TickDock_Contract_Address,TickDock_ABI,signer)
      //const txn = await TickDockContract.addEvent()
      //await txn.wait()
    } catch (error) {
      console.log(error)
    }
  }
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