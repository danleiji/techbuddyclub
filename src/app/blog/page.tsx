import { fetchBlogPosts } from '../lib/hashnode';
import BlogCard from '../components/BlogCard';
import { BlogPost } from '../types/blog';

export const revalidate = 3600; // Revalidate every hour

export default async function BlogPage() {
  const posts = await fetchBlogPosts();

  const categories = [
    {
      name: 'Interview Tips',
      description: 'Expert advice to help you ace your next tech interview',
      slug: 'interview-tips',
    },
    {
      name: 'CV Optimization',
      description: 'Make your resume stand out to top tech companies',
      slug: 'cv-optimization',
    },
    {
      name: 'Productivity',
      description: 'Tools and techniques to boost your productivity',
      slug: 'productivity',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Tech Career Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert insights, interview tips, and career advice to help you succeed in tech.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {categories.map((category) => (
            <div
              key={category.slug}
              className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow"
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {category.name}
              </h2>
              <p className="text-gray-600 text-sm">{category.description}</p>
            </div>
          ))}
        </div>

        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post: BlogPost) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {posts.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">
              Coming Soon!
            </h2>
            <p className="text-gray-600">
              We&apos;re working on creating valuable content for you. Check back soon!
            </p>
          </div>
        )}
      </div>
    </div>
  );
} 