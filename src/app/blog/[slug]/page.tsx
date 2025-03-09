import { fetchBlogPost } from '@/app/lib/hashnode';
import Image from 'next/image';
import Link from 'next/link';

export const revalidate = 3600; // Revalidate every hour

// Updated to handle params as a Promise in Next.js 15
export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchBlogPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <Link
            href="/blog"
            className="text-indigo-600 hover:text-indigo-800"
          >
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/blog"
            className="text-indigo-600 hover:text-indigo-800 mb-4 inline-block"
          >
            ← Back to blog
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <time dateTime={post.dateAdded}>
              {new Date(post.dateAdded).toLocaleDateString()}
            </time>
            <span>·</span>
            <span>{post.readTime} min read</span>
          </div>
        </div>

        {/* Cover Image */}
        {post.coverImage && (
          <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden">
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 1024px"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div
            className="prose prose-indigo max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>

        {/* Tags */}
        <div className="mt-8">
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: { name: string }, index: number) => (
              <span
                key={index}
                className="px-3 py-1 bg-indigo-50 text-indigo-600 text-sm font-medium rounded-full"
              >
                {tag.name}
              </span>
            ))}
          </div>
        </div>
      </article>
    </div>
  );
} 