type IProp={
  translate:Boolean

}
export default function Signup(prop:IProp) {
  return (
    <div className={`w-full flex flex-col justify-center items-center gap-6 ${prop.translate?"-translate-x-full":"-translate-x-0"}  transition-all duration-700 ease-in-out  `}>
      
      <div className="font-bold md:text-6xl text-2xl ">Tạo tài khoản </div>
      <div ><input className=" bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96 " placeholder="Nhập tên"  type="text" /></div>
      <div ><input className=" bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96 " placeholder="Nhập email"  type="text" /></div>
      <div ><input className=" bg-slate-100 focus:outline-none focus:ring-0 py-4 px-4 rounded-lg w-52 md:w-96 " placeholder="Nhập mật khẩu"  type="text" /></div>
      <button className="border px-8 py-2 rounded-lg  text-white   transition-all ease-in-out duration-200 bg-[#533BAD] "> Đăng kí  </button>
    </div>
  )
}
