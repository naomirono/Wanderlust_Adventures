const BlogSection = () => {
    const blogPosts = [
        {
          title: 'Exploring the Wonders of Kenya: From Nairobi to Maasai Mara',
          content: 'Embark on a captivating journey through Kenya, from the vibrant city of Nairobi to the breathtaking landscapes of Maasai Mara. Our travel experts share insider tips on experiencing the rich culture, diverse wildlife, and iconic landmarks that make Kenya an extraordinary destination',
          author: 'Travel Explorer',
          date: 'January 20, 2024',
          time: '8 min',
          profileImage: 'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          title: 'Safari Spectacle: Witnessing Kenya’s Majestic Wildlife in Amboseli',
          content: 'Join us on an awe-inspiring safari adventure in Amboseli National Park, where the majestic Mount Kilimanjaro serves as a backdrop to incredible wildlife sightings. Our experienced guides reveal the wonders of Kenya’s natural beauty and biodiversity',
          author: 'Safari Enthusiast',
          date: 'January 15, 2024',
          time: '7 min',
          profileImage: 'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        {
          title: 'Coastal Bliss: Luxury Retreats on Kenya’s Dazzling Indian Ocean Shores',
          content: 'Experience the epitome of relaxation with our coastal retreat packages along Kenya’s Indian Ocean shores. From pristine beaches to vibrant coral reefs, discover the hidden gems of Kenya’s coastal paradise, complete with luxurious accommodations and cultural delights',
          author: 'Sea Voyager',
          date: 'January 10, 2024',
          time: '9 min',
          profileImage: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
        },
      ];
      
  
    return (
      <section className=" py-8 relative">
        <div className="container mx-auto max-w-[1100px] relative z-10">
        <div className='text-center mb-8'>
  <h2 className="text-4xl font-bold text-black font-fira font-semibold mb-4">Discover Kenya in <span className="text-orange-500">Our Blog</span> </h2>
  <p className="text-lg text-gray-500 mb-12 font-inter font-regular">Explore the beauty of Kenya through our blog posts. From Nairobi to Maasai Mara, our stories and insider tips provide a virtual journey into the diverse landscapes and rich culture of this incredible destination.</p>
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
  