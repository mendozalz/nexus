import * as React from "react";
import type { Post } from "../../lib/graphql";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";

/**
 * Props para el componente BlogPosts
 * @interface BlogPostsProps
 */
interface BlogPostsProps {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Componente que muestra los posts del blog desde WordPress
 * @component
 * @param {BlogPostsProps} props - Props del componente
 * @returns {React.ReactElement} - Componente de posts del blog
 */
export function BlogPosts({ posts, isLoading, error }: BlogPostsProps): React.ReactElement {
  if (isLoading) {
    return (
      <div className="w-full py-fl-3xl bg-black text-white">
        <div className="container mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-gutter)]">
          <h2 className="text-3xl font-bold mb-8">Cargando artículos...</h2>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full py-fl-3xl bg-black text-white">
        <div className="container mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-gutter)]">
          <h2 className="text-3xl font-bold mb-4">Error al cargar los artículos</h2>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-fl-3xl bg-black text-white">
        <div className="container mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-gutter)]">
          <h2 className="text-3xl font-bold mb-4">No se encontraron artículos</h2>
          <p>No hay artículos disponibles en este momento.</p>
        </div>
      </div>
    );
  }

  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);

  return (
    <div className="w-full py-fl-3xl bg-black text-white">
      <div className="container mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-gutter)]">
        {/* Post Principal */}
        <article className="flex flex-col mb-16">
          <div className="relative w-full h-[400px] mb-6">
            <img
              src={mainPost.featuredImage?.node.mediaItemUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c"}
              alt={mainPost.featuredImage?.node.altText || mainPost.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Badge className="w-fit" variant="outline">
              Featured
            </Badge>
            <h2 className="text-3xl font-bold">
              <a href={`/blog/${mainPost.slug}`} className="hover:text-dorado transition-colors">
                {mainPost.title}
              </a>
            </h2>
            <div className="flex items-center gap-4">
              <Avatar className="size-10">
                <AvatarImage src="https://github.com/shadcn.png" alt="Author" />
                <AvatarFallback>TW</AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">Team Writer</p>
                <p className="text-sm text-gray-400">Published 2 days ago</p>
              </div>
            </div>
            <div 
              className="text-gray-300 mt-2 line-clamp-3"
              dangerouslySetInnerHTML={{ 
                __html: mainPost.content.substring(0, 200) + "..." 
              }}
            />
          </div>
        </article>

        {/* Posts Secundarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {secondaryPosts.map((post) => (
            <article key={post.id} className="flex flex-col">
              <div className="relative w-full h-[220px] mb-4">
                <img
                  src={post.featuredImage?.node.mediaItemUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c"}
                  alt={post.featuredImage?.node.altText || post.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Badge className="w-fit" variant="outline">
                  Article
                </Badge>
                <h3 className="text-xl font-bold">
                  <a href={`/blog/${post.slug}`} className="hover:text-dorado transition-colors">
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarImage src="https://github.com/shadcn.png" alt="Author" />
                    <AvatarFallback>TW</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">Team Writer</p>
                    <p className="text-xs text-gray-400">Published 5 days ago</p>
                  </div>
                </div>
                <div 
                  className="text-gray-300 text-sm mt-1 line-clamp-2"
                  dangerouslySetInnerHTML={{ 
                    __html: post.content.substring(0, 120) + "..." 
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Posts adicionales si hay más de 3 */}
        {posts.length > 3 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Más artículos</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {posts.slice(3).map((post) => (
                <article key={post.id} className="flex flex-col">
                  <div className="relative w-full h-[180px] mb-4">
                    <img
                      src={post.featuredImage?.node.mediaItemUrl || "https://images.unsplash.com/photo-1504711434969-e33886168f5c"}
                      alt={post.featuredImage?.node.altText || post.title}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-bold">
                    <a href={`/blog/${post.slug}`} className="hover:text-dorado transition-colors">
                      {post.title}
                    </a>
                  </h3>
                  <div 
                    className="text-gray-300 text-sm mt-1 line-clamp-2"
                    dangerouslySetInnerHTML={{ 
                      __html: post.content.substring(0, 100) + "..." 
                    }}
                  />
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
