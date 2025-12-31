import { getAuthorBySlug, getPostsByAuthor } from "@/app/lib/data";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AuthorPage({ params }: { params: { slug: string } }) {
  const author = getAuthorBySlug(params.slug);
  
  if (!author) {
    return <div>Author not found</div>;
  }

  const posts = getPostsByAuthor(author.id);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gray-50 border-b border-gray-100 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
           <div className="w-24 h-24 bg-gray-300 rounded-full mx-auto mb-6"></div>
           <h1 className="text-3xl font-bold mb-2">{author.name}</h1>
           <p className="text-blue-600 font-medium mb-4">{author.role}</p>
           <p className="text-gray-600 max-w-lg mx-auto leading-relaxed">
             {author.bio}
           </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold mb-8 pb-4 border-b border-gray-100">Articles by {author.name}</h2>
        
        <div className="grid gap-8">
            {posts.length > 0 ? (
                posts.map(post => (
                    <Link key={post.id} href={`/blog/${post.slug}`} className="group block">
                         <article className="flex flex-col md:flex-row gap-8 items-start p-6 rounded-2xl hover:bg-gray-50 transition-colors">
                            <div className="w-full md:w-1/3 aspect-video bg-gray-200 rounded-xl flex-shrink-0"></div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                                    <span className="font-semibold text-blue-600">{post.category}</span>
                                    <span>•</span>
                                    <span>{post.date}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors">
                                    {post.title}
                                </h3>
                                <p className="text-gray-600 line-clamp-2">
                                    {post.excerpt}
                                </p>
                            </div>
                         </article>
                    </Link>
                ))
            ) : (
                <p className="text-gray-500 text-center py-12">No articles found.</p>
            )}
        </div>
      </div>
    </div>
  );
}

