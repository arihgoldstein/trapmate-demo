import Link from "next/link";
import { blogPosts, authors } from "../lib/data";

export default function BlogIndex() {
  return (
    <div className="bg-white min-h-screen pb-24">
      <div className="bg-gray-50 border-b border-gray-100 py-20 mb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Resources & Insights</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto">
            The latest news, case studies, and guides to help you grow your pest control business.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => {
            const author = authors.find(a => a.id === post.authorId);
            return (
              <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                <article className="flex flex-col h-full bg-white rounded-2xl overflow-hidden border border-gray-100 hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  <div className="h-48 bg-gray-200 relative overflow-hidden">
                    {/* Placeholder for image */}
                    <div className="absolute inset-0 bg-gray-300 animate-pulse" />
                    <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900 shadow-sm">
                            {post.category}
                        </span>
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col">
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>5 min read</span>
                    </div>
                    <h2 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-6 text-sm line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center mt-auto pt-4 border-t border-gray-50">
                        <div className="w-8 h-8 rounded-full bg-gray-200 mr-3"></div>
                        <span className="text-sm font-medium text-gray-900">{author?.name}</span>
                    </div>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

