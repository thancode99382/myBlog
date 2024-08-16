import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { signIn } from "next-auth/react";
import { redirect, useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
type IProp = {
  translate: Boolean;
  loader: Boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
  setTranslate: Dispatch<SetStateAction<boolean>>;
};
export default function Login(prop: IProp) {
  const [error, setError] = useState(false);
  const { data: session } = useSession();

  if (session) {
    prop.setTranslate(false);
  }

  // const session = await getServerSession();
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    prop.setLoader(true);
    const response = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });

    console.log({ response });
    if (!response?.error) {
      router.push("/");
      router.refresh();
      prop.setLoader(false);
    }else{
      prop.setLoader(false);
      setError(true)
    }

  
  };

  const handleFocus = () => {
    setError(false);
  };
  return (
    <>
      {" "}
      {prop.loader ? (
        <div className="flex justify-center  h-screen items-center">
          <div className="three-body">
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
            <div className="three-body__dot"></div>
          </div>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={`  md:w-full flex flex-col justify-center items-center gap-6 ${
            prop.translate ? "translate-x-0" : "translate-x-full"
          }  transition-all duration-700 ease-in-out  `}
        >
          <div className="font-bold md:text-6xl text-2xl">Đăng nhập </div>
          <div>
            <input
            onFocus={handleFocus}
              name="email"
              className=" bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96 "
              placeholder="Nhập email"
              type="text"
            />
          </div>
          <div>
            <input
            onFocus={handleFocus}
              name="password"
              className=" bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96 "
              placeholder="Nhập mật khẩu"
              type="password"
            />
          </div>
          {error && (
            <div className="text-red-600">Mật khẩu hoặc email không đúng</div>
          )}
          <button
            type="submit"
            className="border px-8 py-2 rounded-lg  text-white   transition-all ease-in-out duration-200 bg-[#533BAD] "
          >
            Đăng nhập
          </button>
        </form>
      )}
    </>
  );
}
