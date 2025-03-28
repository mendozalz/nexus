import { useState, useEffect } from "react";
import { LanguageCodeEnum, fetchPosts } from "../../lib/graphql";

// Definimos la interfaz Post localmente
interface Avatar {
  url: string;
}

interface Author {
  node: {
    name: string;
    avatar: Avatar;
  };
}

interface FeaturedImage {
  node: {
    altText: string;
    mediaItemUrl: string;
  };
}

interface Category {
  name: string;
}

// Interfaz para los posts de WordPress
interface Post {
  id: string;
  guid: string;
  uri: string;
  slug: string;
  title: string;
  link: string;
  modified: string;
  author: Author | null;
  categories: {
    nodes: Category[];
  } | null;
  featuredImage: FeaturedImage | null;
  content?: string;
}

interface BlogFeedProps {
  language: LanguageCodeEnum;
  postCount?: number;
}

/**
 * Componente React que obtiene y muestra posts de WordPress en tiempo real
 */
const BlogFeed = ({ language, postCount = 6 }: BlogFeedProps) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Obtener posts usando la función fetchPosts existente
        const fetchedPosts = await fetchPosts(language);

        // Limitar la cantidad de posts según el parámetro postCount
        setPosts(fetchedPosts.slice(0, postCount));
      } catch (err) {
        console.error("Error al cargar posts:", err);
        setError(
          err instanceof Error
            ? err.message
            : "Error desconocido al cargar posts",
        );
      } finally {
        setIsLoading(false);
      }
    };

    loadPosts();
  }, [language, postCount]);

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 dark:text-gray-300">
          Cargando artículos...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg p-6 my-6">
        <h3 className="text-red-800 dark:text-red-400 text-lg font-semibold mb-2">
          Error al cargar los artículos
        </h3>
        <p className="text-red-700 dark:text-red-300">{error}</p>
        <button
          onClick={() => {
            setIsLoading(true);
            fetchPosts(language)
              .then((posts) => {
                setPosts(posts.slice(0, postCount));
                setError(null);
              })
              .catch((err) => {
                setError(
                  err instanceof Error
                    ? err.message
                    : "Error desconocido al cargar posts",
                );
              })
              .finally(() => {
                setIsLoading(false);
              });
          }}
          className="mt-4 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors"
        >
          Reintentar
        </button>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-600 dark:text-gray-300">
          No se encontraron artículos para mostrar.
        </p>
      </div>
    );
  }

  // Dividir los posts: el primero destacado, el resto en grid
  const [featuredPost, ...restPosts] = posts;

  return (
    <div className="blog-feed">
      {/* Post destacado */}
      {featuredPost && (
        <div className="featured-post mb-12">
          <article className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform hover:translate-y-[-4px]">
            <div className="md:flex">
              <div className="md:flex-shrink-0 md:w-2/5">
                {featuredPost.featuredImage ? (
                  <img
                    src={featuredPost.featuredImage.node.mediaItemUrl}
                    alt={
                      featuredPost.featuredImage.node.altText ||
                      featuredPost.title
                    }
                    className="h-64 w-full object-cover md:h-full"
                  />
                ) : (
                  <div className="h-64 md:h-full w-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                      Sin imagen
                    </span>
                  </div>
                )}
              </div>
              <div className="p-6 md:p-8 md:w-3/5">
                <div className="uppercase tracking-wide text-sm text-blue-600 dark:text-blue-400 font-semibold mb-1">
                  Artículo destacado
                </div>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                  {featuredPost.title}
                </h2>
                <div
                  className="mt-3 text-gray-600 dark:text-gray-300 line-clamp-3"
                  dangerouslySetInnerHTML={{
                    __html: featuredPost.content
                      ? featuredPost.content.substring(0, 200) + "..."
                      : "No hay contenido disponible",
                  }}
                />
                <div className="mt-4 flex items-center">
                  {featuredPost.author?.node.avatar && (
                    <img
                      src={featuredPost.author.node.avatar.url}
                      alt={featuredPost.author.node.name}
                      className="h-10 w-10 rounded-full mr-3"
                    />
                  )}
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-gray-200">
                      {featuredPost.author?.node.name || "Autor desconocido"}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {new Date(featuredPost.modified).toLocaleDateString(
                        "es-ES",
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        },
                      )}
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={`/blog/${featuredPost.slug}`}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                  >
                    Leer artículo completo
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 ml-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </article>
        </div>
      )}

      {/* Grid de posts restantes */}
      {restPosts.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden h-full flex flex-col transition-transform hover:translate-y-[-4px]"
            >
              <div className="h-48 overflow-hidden">
                {post.featuredImage ? (
                  <img
                    src={post.featuredImage.node.mediaItemUrl}
                    alt={post.featuredImage.node.altText || post.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
                    <span className="text-gray-500 dark:text-gray-400">
                      Sin imagen
                    </span>
                  </div>
                )}
              </div>
              <div className="p-5 flex-grow">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                <div
                  className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4"
                  dangerouslySetInnerHTML={{
                    __html: post.content
                      ? post.content.substring(0, 150) + "..."
                      : "No hay contenido disponible",
                  }}
                />
              </div>
              <div className="px-5 pb-5 mt-auto">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    {post.author?.node.avatar && (
                      <img
                        src={post.author.node.avatar.url}
                        alt={post.author.node.name}
                        className="h-8 w-8 rounded-full mr-2"
                      />
                    )}
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {post.author?.node.name || "Autor desconocido"}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(post.modified).toLocaleDateString("es-ES", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                </div>
                <a
                  href={`/blog/${post.slug}`}
                  className="mt-4 inline-block text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 text-sm font-medium"
                >
                  Leer más →
                </a>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default BlogFeed;
