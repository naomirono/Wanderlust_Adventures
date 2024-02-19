import { blogPosts } from "./blogData";

const BlogSection = () => {
  
    return (
      <section className=" py-8 relative">
        <div className="container mx-auto max-w-[1100px] relative z-10">
        <div className='text-center mb-8'>
          <h2 className="text-4xl font-bold text-black font-fira font-semibold mb-4">Discover Kenya in <span className="text-orange-500">Our Blog</span> </h2>
          <p className="text-lg text-gray-500 mb-12 font-inter font-regular px-2">Explore the beauty of Kenya through our blog posts. From Nairobi to Maasai Mara, our stories and insider tips provide a virtual journey into the diverse landscapes and rich culture of this incredible destination.</p>
        </div>

  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-4 lg:mx-0">
            {blogPosts.map((post, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md flex flex-col h-full">
                <h3 className="text-xl font-semibold mb-4 font-fira">{post.title}</h3>
                <div className="flex-grow overflow-hidden">
                  <p className="text-gray-600 font-inter font-regular">
                    {post.content}
                    <a
                      
                      className="text-orange-500 font-inter font-regular"
                    >
                      ...Read More
                    </a>
                  </p>
                </div>
                <div className="flex items-center mt-4">
                  <img
                    src={post.profileImage}
                    alt={`Profile of ${post.author}`}
                    className="w-8 h-8 rounded-full mr-2"
                  />
                  <div>
                    <p className="text-sm text-gray-500 font-inter font-regular">{post.author}</p>
                    <p className="text-sm text-gray-500 font-inter font-regular">{`${post.date} . ${post.time} read`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default BlogSection;
  