import { Button } from "@/components/ui/button";
import logo from "@/app/logo.png";
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
import { useSession } from "next-auth/react";

import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signOut } from "next-auth/react";

import { useRouter } from "next/navigation";

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const { data: session } = useSession();
  console.log(session);
  const router = useRouter();
  const notify = () => toast("Chức năng này chưa mở");
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
              <div className="font-bold gap-4 md:flex hidden items-center text-2xl">
                <Image
                  src={logo}
                  alt="Picture of the author"
                  width={40}
                  height={40}
                />
                <div>Loveseven </div>
              </div>
            </div>
            <div className="relative md:block hidden">
              <input
                placeholder="Search..."
                className="input border  focus:border-2 border-gray-300 px-5 py-3 rounded-xl w-56 transition-all focus:w-64 outline-none"
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
            {/* <Buttonlogin/> */}
            {!session && (
              <Button
                className="md:flex "
                onClick={() => {
                  router.push("/login");
                }}
                variant="outline"
              >
                Đăng nhập
              </Button>
            )}

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt="sds"
                    src="https://png.pngtree.com/png-clipart/20191122/original/pngtree-user-icon-isolated-on-abstract-background-png-image_5192004.jpg"
                    className="h-10 w-10 rounded-lg object-cover"
                  />
                </MenuButton>
              </div>
              <MenuItems
                transition
                className="absolute flex flex-col  right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
              >
                <MenuItem>
                  <button className=" px-4 py-2 text-left text-sm text-gray-700 data-[focus]:bg-gray-100">
                    Thông tin cá nhân
                  </button>
                </MenuItem>

                <MenuItem>
                  <button
                    onClick={() => signOut()}
                    className=" text-left  px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100"
                  >
                    Đăng xuất
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>

            <div> {session?.user?.name}</div>
          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <DisclosureButton
            className={classNames(
              "block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            )}
          >
            Thông tin người dùng
          </DisclosureButton>

          <DisclosureButton
           onClick={() => signOut()}
            className={classNames(
              "block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            )}
          >
            Đăng xuất
          </DisclosureButton>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
