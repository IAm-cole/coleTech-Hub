import { BlogData } from "../src/data/NavbarData";
import { Heading } from "./Shared/Heading";


export const Blogs = () => {
  return (
    <div className="my-12">
      <div className="mx-8 mb-8">
        <Heading title="Recent News" subtitle="Explore Our Blogs" />
        {/* Blog Section */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 gap-y-8 sm:gap-4 md:gap-7 ">
          {/* BlogCard */}
          {BlogData.map((data) => (
            <div key={data.title} className="bg-white dark:bg-gray-900 ">
                {/* image section */}
              <div className="overflow-hidden rounded-2xl mb-2 ">
                <img src={data.image} alt="" className="w-45 h-45 object-cover rounded-2xl hover:scale-105 duration-500 " />

              </div>
              {/* content section  */}
              <div className="space-y-2">
                <p className="text-xs text-gray-500">{data.published}</p>
                <p className="font-bold line-clamp-1">{data.title}</p>
                <p className="line-clamp-2 text-sm text-gray-600 dark:text-gray-400">{data.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
