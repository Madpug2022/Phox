import { useState } from "react";
import emailjs from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ExpandableMenu = ({ title, text }: { title: string; text: string }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="flex flex-col md:w-[448px] bg-light cursor-pointer rounded-xl">
      <div
        className="flex items-center justify-between gap-5  py-2 px-3 "
        onClick={() => setExpanded(!expanded)}
      >
        <h3 className="text-[16px]">{title}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-4 w-4 transform ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {expanded && <p className="text-white p-2 text-sm">{text}</p>}
    </div>
  );
};

function App() {
  const [email, setEmail] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();

    const templateParams = {
      message: email,
    };

    emailjs
      .send(
        "service_m9v2jbc",
        "template_fd8ekz2",
        templateParams,
        "hpC-YHf5lJWUujzhb"
      )
      .then(
        (result) => {
          toast.success("Correo enviado exitosamente");
        },
        (error) => {
          toast.error("Error al enviar el correo:");
        }
      );

    setEmail("");
  };
  return (
    <main className="flex flex-col pt-[25px] px-[16px] pb-[8px] gap-[30px] h-screen w-full bg-third">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <section className="flex flex-col items-center justify-center">
        <div className="flex flex-col gap-[24px] items-center">
          <div className="h-[54px] w-[54px] flex items-center justify-center rounded-md">
            <img src="/Logo-PHOX.png" alt="Phox Logo" />
          </div>
          <div className="flex h-[24px] w-[198px] border gap-4 border-gray-800 rounded-full items-center px-2">
            <div className="relative flex items-center justify-center">
              <div className="h-2 w-2 bg-white rounded-full" />
              <div className="absolute h-3 w-3 bg-white rounded-full animate-ping " />
            </div>
            <p className="text-xs text-center">AVAILABLE IN EARLY 2025</p>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-[40px] text-center">Get early access</h1>
            <p className="text-center text-secondary md:w-[448px] text-[15px]">
              Be amongst the first to replicate the intelligence from e-commerce
              into your physical store. Sign up to be notified when we launch!
            </p>
          </div>
        </div>
      </section>

      <section className="flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0 rounded-lg z-10 border-2 border-transparent bg-gradient-to-r from-blue-500 via-green-500 to-purple-500 animate-border-move"></div>
          <form
            onSubmit={sendEmail}
            className="flex h-[46px] items-center z-20 bg-light p-2 rounded-lg md:w-[446px] w-[300px] shadow-md text-xs"
          >
            <input
              type="email"
              placeholder="Email"
              className=" bg-transparent text-gray-300 placeholder-gray-500 outline-none px-1 z-30 w-[calc(100%-96px)]"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button className="bg-primary text-white text-xs px-2 py-2 rounded-lg hover:bg-blue-700 transition ml-auto z-30 w-24 whitespace-nowrap">
              Join waitlist
            </button>
          </form>
        </div>
      </section>
      <section className="flex flex-col items-center mt-[60px] gap-10">
        <div className="flex flex-col items-center">
          <h2 className="text-[28px] text-center">
            Frequently asked questions
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <ExpandableMenu
            title="What is PHOX?"
            text="We are the first partner that integrates store digitalization, artificial intelligence and consulting to bring e-commerce intelligence to physical stores."
          />
          <ExpandableMenu
            title="How does it work?"
            text="We create a digital twin of your store and upload all the available data to it to enable better decisions in a fraction of the time."
          />
          <ExpandableMenu
            title="How can i get it?"
            text="Join the waiting list and follow us on social networks!"
          />
          <ExpandableMenu
            title="Is PHOX the right partner for my brand?"
            text="Phox is optimal for brands with a certain level of digital maturity."
          />
        </div>
      </section>
      <footer className="text-sm text-secondary flex flex-col items-center justify-center mt-14 gap-4">
        <p>. RETAIL INNOVATION TECHNOLOGIES .</p>
        <p>© 2024 info@phoxretail.com</p>
      </footer>
    </main>
  );
}

export default App;
