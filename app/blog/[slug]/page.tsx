import { getPostBySlug, getAuthorBySlug, authors, blogPosts } from "@/app/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Post not found</h1>
          <Link href="/blog" className="text-blue-600 hover:underline">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const author = authors.find(a => a.id === post.authorId);

  return (
    <article className="min-h-screen bg-white pb-24">
      {/* Header */}
      <div className="bg-gray-50 py-20 border-b border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center text-sm text-gray-500 hover:text-black mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" />
            Back to Articles
          </Link>
          <div className="flex items-center gap-4 mb-6">
             <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-semibold uppercase tracking-wider">
               {post.category}
             </span>
             <span className="text-gray-500 text-sm">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-gray-900 leading-tight mb-8">
            {post.title}
          </h1>
          
          {author && (
            <div className="flex items-center">
              <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
              <div>
                <div className="font-medium text-gray-900">
                    <Link href={`/author/${author.slug}`} className="hover:underline">
                        {author.name}
                    </Link>
                </div>
                <div className="text-sm text-gray-500">{author.role}</div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="prose prose-lg prose-gray mx-auto" dangerouslySetInnerHTML={{ __html: post.content }}>
        </div>
      </div>

      {/* Related/More Section could go here */}
    </article>
  );
}


