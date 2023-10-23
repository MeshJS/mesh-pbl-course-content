import MeshLogo from "../site/MeshLogo";
import { CardanoWallet } from "@meshsdk/react";

export default function Login() {
  return (
    <section className="bg-[url('/images/site/books-g771e712af_1280.jpg')] bg-cover">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen pt:mt-0">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-semibold text-white"
        >
          <MeshLogo className="mr-3 h-8" fill="#ffffff" />
          Mesh Project Based Learning
        </a>
        <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800">
          <div className="p-6 space-y-4 md:space-y-6 lg:space-y-8 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-center text-gray-900 md:text-xl dark:text-white">
              Connect your wallet and start learning
            </h1>

            <center>
              <CardanoWallet />
            </center>
          </div>
        </div>
      </div>
    </section>
  );
}
