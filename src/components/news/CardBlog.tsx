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
    <Link href={`/news/${id}`}>
      <div className="relative flex max-w-[24rem] flex-col  rounded-xl bg-white w-[350px]  bg-clip-border text-gray-700 ">
        <div className="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-xl shadow-none bg-clip-border">
          <img
          className="w-[350px] h-[253px]"
            src={urlImg}
            alt="ui/ux review check"
          />
        </div>
        <div className="p-6">
          <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
            {title}
          </h4>
          <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
            {description}
          </p>
        </div>
      </div>
      </Link>
   
  );
};

export default CardBlog;
