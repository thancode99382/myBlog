import { Button } from "@/components/ui/button";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Upload } from "lucide-react";

const navigation = [
  { name: "Trang chủ", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-white border ">
      <div className="  px-2 sm:px-6 lg:px-8  ">
        <div className="relative flex h-16 items-center ">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block h-6 w-6 group-data-[open]:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden h-6 w-6 group-data-[open]:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center  gap-40 sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <div className="font-bold gap-4 flex text-2xl">
                <svg
                  width="36"
                  height="36"
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2651_16319)">
                    <g clip-path="url(#clip1_2651_16319)">
                      <g filter="url(#filter0_d_2651_16319)">
                        <rect
                          width="36"
                          height="36"
                          rx="2"
                          fill="url(#paint0_linear_2651_16319)"
                          shape-rendering="crispEdges"
                        ></rect>
                      </g>
                      <g clip-path="url(#clip2_2651_16319)">
                        <rect
                          x="-14.2002"
                          y="-3.19995"
                          width="55.2"
                          height="39.2533"
                          rx="4.6"
                          fill="#1E4F98"
                        ></rect>
                        <g filter="url(#filter1_f_2651_16319)">
                          <circle
                            cx="25.3608"
                            cy="20.2525"
                            r="21.4975"
                            fill="#FF16F0"
                          ></circle>
                        </g>
                        <g filter="url(#filter2_f_2651_16319)">
                          <ellipse
                            cx="19.3415"
                            cy="2.7417"
                            rx="14.03"
                            ry="14.4517"
                            fill="#1AADFF"
                          ></ellipse>
                        </g>
                        <g filter="url(#filter3_f_2651_16319)">
                          <circle
                            cx="37.6652"
                            cy="27.0367"
                            r="10.465"
                            fill="#FF3333"
                          ></circle>
                        </g>
                        <g filter="url(#filter4_f_2651_16319)">
                          <path
                            d="M0.347265 23.5759C0.347265 32.563 -25.3184 37.5867 -17.7077 37.5867C-13.6891 37.5867 -2.73812 39.6645 4.0081 37.5867C10.0382 35.7295 12.1348 29.9737 12.1348 25.732C12.1348 16.745 2.51464 8.55872 -5.09607 8.55872C-12.7068 8.55872 0.347265 14.5888 0.347265 23.5759Z"
                            fill="#0032EF"
                          ></path>
                        </g>
                      </g>
                      <g filter="url(#filter5_d_2651_16319)">
                        <path
                          d="M25.895 25.6821H15.6287C15.193 25.69 14.815 25.6165 14.4973 25.4669C14.1351 25.3015 13.8201 25.06 13.5865 24.766C13.3397 24.4563 13.1691 24.0914 13.0903 23.7213C13.0326 23.4351 13.0378 23.1175 13.0405 22.7789C13.0431 22.6266 13.0431 22.477 13.0405 22.3431V8.47014C13.0405 8.03701 13.3922 7.68789 13.8253 7.68789C14.2558 7.68789 14.6076 8.03964 14.6076 8.47014L14.6181 22.8524C14.6181 22.9023 14.6233 22.9521 14.6338 23.002C14.7205 23.4378 15.0302 23.821 15.4161 23.989C15.6024 24.0756 15.8098 24.1176 16.0277 24.1176L25.2643 24.1176V22.603L16.7458 22.603C16.4071 22.603 16.1325 22.3286 16.1322 21.9899L16.1222 8.46751C16.1222 7.20227 15.0906 6.17065 13.8227 6.17065C12.5548 6.17065 11.5232 7.20227 11.5232 8.47014V22.3589C11.5259 22.4928 11.5259 22.6293 11.5232 22.7631C11.5206 23.1621 11.5154 23.5769 11.6046 24.0231C11.7332 24.6321 12.0062 25.2149 12.4 25.711C12.7832 26.1887 13.2898 26.5825 13.8595 26.8397C14.3766 27.0839 14.9803 27.202 15.6366 27.1941H25.8924C26.3229 27.1941 26.6746 27.5459 26.6746 27.9764C26.6746 28.4068 26.3229 28.7586 25.8924 28.7586H15.9069C15.6707 28.7612 15.4764 28.7586 15.2848 28.7455C14.4921 28.714 13.7203 28.5171 13.051 28.1811C12.3344 27.8241 11.7044 27.3254 11.2292 26.7426C10.7305 26.131 10.3577 25.4065 10.1556 24.6663C10.0454 24.2253 9.98499 23.8368 9.97187 23.4588C9.9535 23.1936 9.95612 22.8603 9.95875 22.6161C9.95875 22.4796 9.96137 22.3694 9.95875 22.3379V9.33113H8.44413V22.372C8.44676 22.4193 8.44413 22.5033 8.44413 22.6083C8.44151 22.876 8.43888 23.2409 8.45988 23.5375C8.47563 23.9995 8.54913 24.4904 8.68826 25.0521C8.94813 26.0129 9.42062 26.929 10.0532 27.706C10.6622 28.4541 11.4655 29.092 12.3711 29.5435C13.2295 29.974 14.2165 30.226 15.2113 30.2653C15.3846 30.2758 15.5631 30.2811 15.7652 30.2811C15.8151 30.2811 15.8649 30.2811 15.9174 30.2811H25.8976C27.1655 30.2811 28.1945 29.2495 28.1945 27.9842C28.1918 26.7111 27.1629 25.6821 25.895 25.6821Z"
                          fill="white"
                        ></path>
                        <path
                          d="M9.27647 6C8.29582 6 7.5 6.79582 7.5 7.77647C7.5 8.75712 8.29582 9.55294 9.27647 9.55294C10.2571 9.55294 11.0529 8.75712 11.0529 7.77647C11.0529 6.79582 10.2571 6 9.27647 6ZM9.27647 8.36355C8.95249 8.36355 8.68939 8.10045 8.68939 7.77647C8.68939 7.45249 8.95249 7.18939 9.27647 7.18939C9.60045 7.18939 9.86355 7.45249 9.86355 7.77647C9.86355 8.10045 9.60045 8.36355 9.27647 8.36355Z"
                          fill="white"
                        ></path>
                        <path
                          d="M26.5154 21.248C25.4158 21.248 24.5234 22.1404 24.5234 23.24C24.5234 24.3395 25.4158 25.2319 26.5154 25.2319C27.6149 25.2319 28.5073 24.3395 28.5073 23.24C28.5073 22.1404 27.6149 21.248 26.5154 21.248ZM26.5154 23.9007C26.1521 23.9007 25.8571 23.6057 25.8571 23.2424C25.8571 22.8791 26.1521 22.5841 26.5154 22.5841C26.8786 22.5841 27.1736 22.8791 27.1736 23.2424C27.1736 23.6057 26.8786 23.9007 26.5154 23.9007Z"
                          fill="white"
                        ></path>
                      </g>
                    </g>
                  </g>
                  <defs>
                    <filter
                      id="filter0_d_2651_16319"
                      x="-0.8"
                      y="0"
                      width="37.6"
                      height="37.6"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="0.8"></feOffset>
                      <feGaussianBlur stdDeviation="0.4"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2651_16319"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2651_16319"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <filter
                      id="filter1_f_2651_16319"
                      x="-12.2367"
                      y="-17.345"
                      width="75.1951"
                      height="75.195"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feGaussianBlur
                        stdDeviation="8.05"
                        result="effect1_foregroundBlur_2651_16319"
                      ></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter2_f_2651_16319"
                      x="-18.4551"
                      y="-35.4766"
                      width="75.5929"
                      height="76.4367"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feGaussianBlur
                        stdDeviation="11.8833"
                        result="effect1_foregroundBlur_2651_16319"
                      ></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter3_f_2651_16319"
                      x="11.1002"
                      y="0.471655"
                      width="53.1297"
                      height="53.1301"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feGaussianBlur
                        stdDeviation="8.05"
                        result="effect1_foregroundBlur_2651_16319"
                      ></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter4_f_2651_16319"
                      x="-35.2182"
                      y="-7.54128"
                      width="63.4529"
                      height="62.1514"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      ></feBlend>
                      <feGaussianBlur
                        stdDeviation="8.05"
                        result="effect1_foregroundBlur_2651_16319"
                      ></feGaussianBlur>
                    </filter>
                    <filter
                      id="filter5_d_2651_16319"
                      x="5.5"
                      y="5.6"
                      width="25.0068"
                      height="28.2811"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood
                        flood-opacity="0"
                        result="BackgroundImageFix"
                      ></feFlood>
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      ></feColorMatrix>
                      <feOffset dy="1.6"></feOffset>
                      <feGaussianBlur stdDeviation="1"></feGaussianBlur>
                      <feComposite in2="hardAlpha" operator="out"></feComposite>
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0.32549 0 0 0 0 0.2 0 0 0 0 0.843137 0 0 0 0.2 0"
                      ></feColorMatrix>
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2651_16319"
                      ></feBlend>
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2651_16319"
                        result="shape"
                      ></feBlend>
                    </filter>
                    <linearGradient
                      id="paint0_linear_2651_16319"
                      x1="18"
                      y1="0"
                      x2="18"
                      y2="36"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#FC354C"></stop>
                      <stop offset="1" stop-color="#0ABFBC"></stop>
                      <stop
                        offset="1"
                        stop-color="#C4C4C4"
                        stop-opacity="0"
                      ></stop>
                    </linearGradient>
                    <clipPath id="clip0_2651_16319">
                      <rect width="36" height="36" fill="white"></rect>
                    </clipPath>
                    <clipPath id="clip1_2651_16319">
                      <rect width="36" height="36" rx="9.2" fill="white"></rect>
                    </clipPath>
                    <clipPath id="clip2_2651_16319">
                      <rect
                        x="-14.2002"
                        y="-3.19995"
                        width="55.2"
                        height="39.2533"
                        rx="4.6"
                        fill="white"
                      ></rect>
                    </clipPath>
                  </defs>
                </svg>
                <div>Loveseven </div>
              </div>
            </div>
            <div className="relative">
              <input
                placeholder="Search..."
                className="input border focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
                name="search"
                type="search"
              />
              <svg
                className="size-6 absolute top-3 right-3 text-gray-500"
                stroke="currentColor"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  stroke-linejoin="round"
                  stroke-linecap="round"
                ></path>
              </svg>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button variant="outline">
              <Upload className="mr-2 h-4 w-4" />
              Tải lên
            </Button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://scontent.fdad3-1.fna.fbcdn.net/v/t39.30808-6/328461887_1269275310654863_4648398611609775212_n.jpg?stp=dst-jpg_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=fe5ecc&_nc_ohc=NnBLx-OPo0QQ7kNvgHb1v8Q&_nc_ht=scontent.fdad3-1.fna&oh=00_AYBh020G7LNLcv-Qo1gVz8uA4BeFmBgXiZ12NHcuqzo-dQ&oe=66BBF13F"
                    className="h-10 w-10 rounded-lg"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              as="a"
              href={item.href}
              aria-current={item.current ? "page" : undefined}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : "text-gray-300 hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
            >
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
