import React from 'react'
import Sidebar from './sidebar'
function create() {
  return (
    <div>
      <section class="bg-gray-600">
        <div class=" max-w-screen-xl px-2 py-10 sm:px-6 lg:px-8">
          <div class="grid grid-cols-4">
            <Sidebar />
            <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
              <form action="" class="space-y-4">
                <div>
                  <label class="sr-only" for="name">Name</label>
                  <input
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Name"
                    type="text"
                    id="name"
                  />
                </div>

                <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label class="sr-only" for="email">Email</label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Email address"
                      type="email"
                      id="email"
                    />
                  </div>

                  <div>
                    <label class="sr-only" for="phone">Phone</label>
                    <input
                      class="w-full rounded-lg border-gray-200 p-3 text-sm"
                      placeholder="Phone Number"
                      type="tel"
                      id="phone"
                    />
                  </div>
                </div>

                <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
                  <div>
                    <input class="sr-only" id="option1" type="radio" tabindex="-1" />
                    <label
                      for="option1"
                      class="block w-full rounded-lg border border-gray-200 p-3"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 1 </span>
                    </label>
                  </div>

                  <div>
                    <input class="sr-only" id="option2" type="radio" tabindex="-1" />
                    <label
                      for="option2"
                      class="block w-full rounded-lg border border-gray-200 p-3"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 2 </span>
                    </label>
                  </div>

                  <div>
                    <input class="sr-only" id="option3" type="radio" tabindex="-1" />
                    <label
                      for="option3"
                      class="block w-full rounded-lg border border-gray-200 p-3"
                      tabindex="0"
                    >
                      <span class="text-sm font-medium"> Option 3 </span>
                    </label>
                  </div>
                </div>

                <div>
                  <label class="sr-only" for="message">Message</label>
                  <textarea
                    class="w-full rounded-lg border-gray-200 p-3 text-sm"
                    placeholder="Message"
                    rows="8"
                    id="message"
                  ></textarea>
                </div>

                <div class="mt-4">
                  <button
                    type="submit"
                    class="inline-flex w-full items-center justify-center rounded-lg bg-black px-5 py-3 text-white sm:w-auto"
                  >
                    <span class="font-medium"> Send Enquiry </span>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="ml-3 h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default create