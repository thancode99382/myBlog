import Link from "next/link";

interface Blog {
  id: string;
  title: string;
  description: string;
  content: string;
  urlImg: string;
}

interface CardBlogProps {
  id:string
  title: string;
  description: string;
  content: string;
  urlImg: string;
}

const CardBlog: React.FC<CardBlogProps> = ({
  id,
  title,
  description,
  content,
  urlImg,
}) => {
  return (
    <div>
      
    <Link href={`/news/${id}`}>
      <div className="relative hover:-translate-y-2 duration-500 transition-all flex max-w-[24rem] flex-col  h-[415px]  rounded-xl bg-white w-[350px]  bg-clip-border text-gray-700 ">
        <div className="relative m-0  text-gray-700 bg-transparent rounded-xl shadow-none bg-clip-border">
          {urlImg && <img
          className="w-[350px] h-[228px] object-cover  rounded-xl"   
            src={urlImg}
            alt="url wrong"
          />}
        </div>
        <div className="py-6 pr-6  h-[152px]  max-w-sm rounded overflow-hidden   bg-white">
          <div>
          <h4 className=" font-sans text-2xl  font-semibold  tracking-normal text-blue-gray-900 line-clamp-1">
            {title}
          </h4>
          <p className=" mt-3 font-sans text-xl  font-normal  text-gray-700 line-clamp-2">
            {description}
          </p>
          </div>
        </div>

      </div>

{/* <div className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
  
  <div className="px-6 py-4">
    <h2 className="text-xl font-bold mb-2 line-clamp-2">Tiêu đề dài quá 2 dòng nên sẽ bị cắt Tiêu đề dài quá 2 dòng nên sẽ bị cắt Tiêu đề dài quá 2 dòng nên sẽ bị cắt Tiêu đề dài quá 2 dòng nên sẽ bị cắt </h2>
    <p className="text-gray-700 text-base line-clamp-2">Miêu tả dài hơn 2 dòng sẽ bị cắt và thêm dấu ba chấm Miêu tả dài hơn 2 dòng sẽ bị cắt và thêm dấu ba chấm Miêu tả dài hơn 2 dòng sẽ bị cắt và thêm dấu ba chấmMiêu tả dài hơn 2 dòng sẽ bị cắt và thêm dấu ba chấm</p>
  </div>
</div> */}
      </Link>
      </div>
  );
};

export default CardBlog;
