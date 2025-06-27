"use client";

const blogPosts = [
  {
    id: 1,
    title: "How AI Can Help You Create Better Content",
    summary: "Discover how AI tools are transforming the content creation process for businesses and individuals.",
    image: "https://source.unsplash.com/featured/?ai,technology",
    link: "#",
  },
  {
    id: 2,
    title: "Tips to Grow Your Brand on Social Media",
    summary: "Explore strategies and tools you can use to boost your brand presence online.",
    image: "https://source.unsplash.com/featured/?socialmedia,branding",
    link: "#",
  },
  {
    id: 3,
    title: "5 Time-Saving Tools for Creators",
    summary: "Check out this curated list of apps and platforms that simplify your daily content tasks.",
    image: "https://source.unsplash.com/featured/?productivity,tools",
    link: "#",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="bg-white py-20 px-4">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-4">From Our Blog</h2>
        <p className="text-lg text-gray-600 mb-12">Insights, tips, and stories from our team and users.</p>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className="bg-gray-50 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-52 object-cover transition-transform duration-300 hover:scale-105"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-semibold text-gray-800 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.summary}</p>
                <a href={post.link} className="text-indigo-600 font-semibold hover:underline">
                  Read more →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
