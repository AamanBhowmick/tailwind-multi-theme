import React from "react";

export default function Step4Problem() {
  return (
    <div>
      <div className="m-8">
        <h2 className="text-lg font-semibold text-slate-900">
          Default Tailwind colors
        </h2>
        <div className="mt-2 grid gap-6">
          <div className="flex gap-4">
            <div className="grid h-16 w-16 place-items-end rounded-md bg-teal-600 p-1 font-semibold leading-none text-teal-50 ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-teal-600 bg-opacity-70 p-1 font-semibold leading-none text-teal-50 ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-teal-600/50 p-1 font-semibold leading-none text-teal-900 ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-teal-600 bg-opacity-30 p-1 font-semibold leading-none text-teal-900 ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-teal-600/[0.1] p-1 font-semibold leading-none text-teal-900 ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid h-16 w-16 place-items-end rounded-md bg-rose-600 p-1 font-semibold leading-none text-rose-50 ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-rose-600 bg-opacity-70 p-1 font-semibold leading-none text-rose-50 ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-rose-600/50 p-1 font-semibold leading-none text-rose-900 ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-rose-600 bg-opacity-30 p-1 font-semibold leading-none text-rose-900 ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-rose-600/[0.1] p-1 font-semibold leading-none text-rose-900 ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
          <div className="flex gap-4">
            <div className="grid h-16 w-16 place-items-end rounded-md bg-fuchsia-600 p-1 font-semibold leading-none text-fuchsia-50 ring-2 ring-inset ring-black/10">
              100%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-fuchsia-600 bg-opacity-70 p-1 font-semibold leading-none text-fuchsia-50 ring-2 ring-inset ring-black/10">
              70%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-fuchsia-600/50 p-1 font-semibold leading-none text-fuchsia-900 ring-2 ring-inset ring-black/10">
              50%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-fuchsia-600 bg-opacity-30 p-1 font-semibold leading-none text-fuchsia-900 ring-2 ring-inset ring-black/10">
              30%
            </div>
            <div className="grid h-16 w-16 place-items-end rounded-md bg-fuchsia-600/[0.1] p-1 font-semibold leading-none text-fuchsia-900 ring-2 ring-inset ring-black/10">
              10%
            </div>
          </div>
        </div>

        {/* <!--
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  Let's bring back the support for opacity modifiers!
  Once again, do not touch any of the markup below.
  ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  --> */}

        <div className="mt-16">
          <h2 className="text-lg font-semibold text-slate-900">
            Multi-theme colors
          </h2>
          <div className="mt-2 grid gap-6">
            <div className="flex gap-4" data-theme="rose">
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
                100%
              </div>
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-70 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
                70%
              </div>
              <div className="bg-primary-600/50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                50%
              </div>
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-30 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                30%
              </div>
              <div className="bg-primary-600/[0.1] grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                10%
              </div>
            </div>
            <div className="flex gap-4" data-theme="rainforest">
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
                100%
              </div>
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-70 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
                70%
              </div>
              <div className="bg-primary-600/50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                50%
              </div>
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-30 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                30%
              </div>
              <div className="bg-primary-600/[0.1] grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                10%
              </div>
            </div>
            <div className="flex gap-4" data-theme="candy">
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
                100%
              </div>
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-70 p-1 font-semibold leading-none text-primary-50 ring-2 ring-inset ring-black/10">
                70%
              </div>
              <div className="bg-primary-600/50 grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                50%
              </div>
              <div className="grid h-16 w-16 place-items-end rounded-md bg-primary-600 bg-opacity-30 p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                30%
              </div>
              <div className="bg-primary-600/[0.1] grid h-16 w-16 place-items-end rounded-md p-1 font-semibold leading-none text-primary-900 ring-2 ring-inset ring-black/10">
                10%
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
