import * as React from "react";
import type { Post } from "../../lib/graphql";
import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { Badge } from "./badge";

/**
 * Props para el componente BlogPostsEs
 * @interface BlogPostsEsProps
 */
interface BlogPostsEsProps {
  posts: Post[];
  isLoading: boolean;
  error: string | null;
}

/**
 * Formatea la fecha en un formato legible
 * @param dateString - Fecha en formato ISO
 * @returns Texto formateado de la fecha
 */
const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

/**
 * Limpia el nombre de la categoría eliminando el prefijo "Categoría: "
 * @param categoryName - Nombre de la categoría original
 * @returns Nombre de la categoría sin el prefijo
 */
const cleanCategoryName = (categoryName: string | undefined): string => {
  if (!categoryName) return "";
  return categoryName.replace(/^Categoría:\s*/i, "");
};

/**
 * Componente que muestra los posts del blog desde WordPress (versión española)
 * @component
 * @param {BlogPostsEsProps} props - Props del componente
 * @returns {React.ReactElement} - Componente de posts del blog
 */
export function BlogPostsEs({
  posts,
  isLoading,
  error,
}: BlogPostsEsProps): React.ReactElement {
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
          <h2 className="text-3xl font-bold mb-4">
            Error al cargar los artículos
          </h2>
          <p className="text-red-500">{error}</p>
        </div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-fl-3xl bg-black text-white">
        <div className="container mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-gutter)]">
          <h2 className="text-3xl font-bold mb-4">
            No se encontraron artículos
          </h2>
          <p>No hay artículos disponibles en este momento.</p>
        </div>
      </div>
    );
  }

  const mainPost = posts[0];
  const secondaryPosts = posts.slice(1, 3);

  return (
    <div className="w-full pb-fl-l pt-4xl bg-black text-white">
      <div className="container mx-auto max-w-[var(--grid-max-width)] px-[var(--grid-gutter)]">
        {/* Post Principal */}
        <article className="flex flex-col mb-16">
          <div className="relative w-full h-[400px] mb-6">
            <img
              src={mainPost.featuredImage?.node.mediaItemUrl}
              alt={mainPost.featuredImage?.node.altText || mainPost.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="flex flex-col space-y-3">
            <Badge className="w-fit" variant="outline">
              {cleanCategoryName(mainPost.categories?.nodes?.[0]?.name)}
            </Badge>
            <h2 className="text-3xl font-bold">
              <a
                href={`/es/blog/${mainPost.slug}`}
                className="hover:text-dorado transition-colors"
              >
                {mainPost.title}
              </a>
            </h2>
            <div className="flex items-center gap-4">
              <Avatar className="size-10">
                <AvatarImage
                  src={
                    mainPost.author?.node.avatar.url ||
                    "https://github.com/shadcn.png"
                  }
                  alt={mainPost.author?.node.name || "Autor"}
                />
                <AvatarFallback>
                  {mainPost.author?.node.name?.substring(0, 2) || "AU"}
                </AvatarFallback>
              </Avatar>
              <div>
                <p className="font-medium">
                  {mainPost.author?.node.name || "Autor desconocido"}
                </p>
                <p className="text-sm text-gray-400">
                  Publicado{" "}
                  {mainPost.modified
                    ? formatDate(mainPost.modified)
                    : "recientemente"}
                </p>
              </div>
            </div>
            <div
              className="text-gray-300 mt-2 line-clamp-3"
              dangerouslySetInnerHTML={{
                __html: mainPost.content.substring(0, 200) + "...",
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
                  src={post.featuredImage?.node.mediaItemUrl}
                  alt={post.featuredImage?.node.altText || post.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-2 mb-12">
                <Badge className="w-fit" variant="outline">
                  {cleanCategoryName(post.categories?.nodes?.[0]?.name || "")}
                </Badge>
                <h3 className="text-xl font-bold">
                  <a
                    href={`/es/blog/${post.slug}`}
                    className="hover:text-dorado transition-colors"
                  >
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center gap-3">
                  <Avatar className="size-8">
                    <AvatarImage
                      src={
                        post.author?.node.avatar.url ||
                        "https://github.com/shadcn.png"
                      }
                      alt={post.author?.node.name || "Autor"}
                    />
                    <AvatarFallback>
                      {post.author?.node.name?.substring(0, 2) || "AU"}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-sm text-gray-400">
                    {post.author?.node.name || "Autor desconocido"} • {post.modified
                      ? formatDate(post.modified)
                      : "Recientemente"}
                  </p>
                </div>
                <div
                  className="text-gray-300 mt-1 line-clamp-2"
                  dangerouslySetInnerHTML={{
                    __html: post.content.substring(0, 150) + "...",
                  }}
                />
              </div>
            </article>
          ))}
        </div>

        {/* Posts Adicionales */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
          {posts.slice(3, 6).map((post) => (
            <article key={post.id} className="flex flex-col">
              <div className="relative w-full h-[180px] mb-3">
                <img
                  src={post.featuredImage?.node.mediaItemUrl}
                  alt={post.featuredImage?.node.altText || post.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-col space-y-2">
                <Badge className="w-fit" variant="outline">
                  {cleanCategoryName(post.categories?.nodes?.[0]?.name || "")}
                </Badge>
                <h3 className="text-lg font-bold">
                  <a
                    href={`/es/blog/${post.slug}`}
                    className="hover:text-dorado transition-colors"
                  >
                    {post.title}
                  </a>
                </h3>
                <div className="flex items-center gap-2">
                  <Avatar className="size-6">
                    <AvatarImage
                      src={
                        post.author?.node.avatar.url ||
                        "https://github.com/shadcn.png"
                      }
                      alt={post.author?.node.name || "Autor"}
                    />
                    <AvatarFallback>
                      {post.author?.node.name?.substring(0, 2) || "AU"}
                    </AvatarFallback>
                  </Avatar>
                  <p className="text-xs text-gray-400">
                    {post.author?.node.name || "Autor desconocido"} • {post.modified
                      ? formatDate(post.modified)
                      : "Recientemente"}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
