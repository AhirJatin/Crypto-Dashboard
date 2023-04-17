import React from "react";
import scanQrImg from "../../../assets/images/scan-QR.svg";
import autoSwapImg from "../../../assets/images/auto-swap.svg";
import multiChainImg from "../../../assets/images/multichain.svg";
import multiCoinImg from "../../../assets/images/multicoin.svg";
import powerfulDashboardImg from "../../../assets/images/powerful-dashboard.svg";
import globalImg from "../../../assets/images/global.svg";
import fastSetupImg from "../../../assets/images/fast-setup.svg";

const Features = () => {
  return (
    <div className=" bg-black py-10">
      <div className="container mx-auto">
        <div className=" mb-10 text-center">
          <h2 className=" inline-block bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-[26px] font-bold text-transparent sm:text-[32px] md:text-[48px]">
            Advance integrated suits of features for payment and finance
          </h2>
        </div>
        <div class=" grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div class="features-card flex flex-col rounded-3xl border-[1px] border-white bg-fuchsia-500 bg-opacity-10">
            <div class="mb-2 flex  items-center justify-center">
              <img
                class="features-image w-full max-w-[280px]"
                src={scanQrImg}
                alt="QR"
              />
            </div>
            <div class="text-area px-5 pb-5 text-left">
              <h5 class="pb-2">Scan QR & Pay</h5>
              <p class="">Use any android or iOS mobile wallet to pay</p>
            </div>
          </div>

          <div class="features-card flex flex-col rounded-3xl border-[1px] border-white bg-fuchsia-500 bg-opacity-10">
            <div class="mb-2 flex  items-center justify-center">
              <img
                class="features-image w-full max-w-[280px]"
                src={autoSwapImg}
                alt="QR"
              />
            </div>
            <div class="text-area px-5 pb-5 text-left">
              <h5 class="pb-2">Auto-Swap</h5>
              <p class="">Automatic currency swap integrated inbuilt</p>
            </div>
          </div>

          <div class="features-card flex flex-col rounded-3xl border-[1px] border-white bg-fuchsia-500 bg-opacity-10">
            <div class="mb-2 flex  items-center justify-center">
              <img
                class="features-image w-full max-w-[280px]"
                src={multiChainImg}
                alt="QR"
              />
            </div>
            <div class="text-area px-5 pb-5 text-left">
              <h5 class="pb-2">Multi-Chain</h5>
              <p class="">
                Supports all major chains to reduce traction of bridges
              </p>
            </div>
          </div>

          <div class="features-card flex flex-col rounded-3xl border-[1px] border-white bg-fuchsia-500 bg-opacity-10">
            <div class="mb-2 flex  items-center justify-center">
              <img
                class="features-image w-full max-w-[280px]"
                src={multiCoinImg}
                alt="QR"
              />
            </div>
            <div class="text-area px-5 pb-5 text-left">
              <h5 class="pb-2">Multi-Coins</h5>
              <p class="">Support for stable coins, BTC, ETH and Matic</p>
            </div>
          </div>

          <div class="features-card flex flex-col rounded-3xl border-[1px] border-white bg-fuchsia-500 bg-opacity-10 md:col-span-2">
            <div class="mb-2 flex  items-center justify-center">
              <img
                class="features-image w-full max-w-[586px]"
                src={powerfulDashboardImg}
                alt="QR"
              />
            </div>
            <div class="text-area px-5 pb-5 text-left">
              <h5 class="pb-2">Powerful Dashboard and Reporting</h5>
              <p class="">
                Analyze and manage each payments without getting lost in
                blockchain scans
              </p>
            </div>
          </div>

          <div class="features-card flex flex-col rounded-3xl border-[1px] border-white bg-fuchsia-500 bg-opacity-10">
            <div class="mb-2 flex  items-center justify-center">
              <img
                class="features-image w-full max-w-[280px]"
                src={globalImg}
                alt="QR"
              />
            </div>
            <div class="text-area px-5 pb-5 text-left">
              <h5 class="pb-2">Global</h5>
              <p class="">
                Receive payments from customers anywhere in the world
              </p>
            </div>
          </div>

          <div class="features-card flex flex-col rounded-3xl border-[1px] border-white bg-fuchsia-500 bg-opacity-10">
            <div class="mb-2 flex  items-center justify-center">
              <img
                class="features-image w-full max-w-[280px]"
                src={fastSetupImg}
                alt="QR"
              />
            </div>
            <div class="text-area px-5 pb-5 text-left">
              <h5 class="pb-2">Fast Setup</h5>
              <p class="">Get started with CryptoView within minutes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
