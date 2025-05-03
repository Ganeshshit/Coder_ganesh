import AnimatedText from "@/components/AnimatedText"
import Layout from "@/components/Layout"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import React, { useEffect, useState } from "react"
// import articale1 from "../../public/images/articles/pagination component in reactjs.jpg"
// import articale2 from "../../public/images/articles/create loading screen in react js.jpg"
import { motion } from "framer-motion"

const FramerImage = motion(Image);

// Placeholder image for articles without images
import placeholderImg from "../../public/images/profile/devloper.png"

// Shimmer effect for image loading
const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="20%" />
      <stop stop-color="#edeef1" offset="50%" />
      <stop stop-color="#f6f7f8" offset="70%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <motion.li
      className="col-span-1 w-full relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <div className="w-full flex flex-col overflow-hidden rounded-lg shadow-md
        bg-light dark:bg-dark border border-primary/20 dark:border-primaryDark/20">

        {/* Header ribbon */}
        <div className="w-full py-1.5 px-3 flex justify-between items-center
          bg-primary dark:bg-primaryDark">
          <div className="flex items-center gap-1.5">
            <span className="text-light dark:text-dark font-medium text-xs">Featured Article</span>
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-light dark:bg-dark animate-pulse"></span>
          </div>
        </div>

        {/* Image section */}
        <div className="w-full relative">
          <div className="relative overflow-hidden">
            <Link href={link} target="_blank" className="block">
              <FramerImage
                src={img}
                alt={title}
                className="w-full h-[200px] sm:h-[250px] object-cover object-center"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                width={600}
                height={400}
                placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`}
                priority
              />
            </Link>

            {/* Medium logo overlay */}
            <div className="absolute top-2 left-2 bg-dark/80 dark:bg-light/80 rounded-md p-1.5 backdrop-blur-sm">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-sm flex items-center justify-center
                  bg-primary dark:bg-primaryDark">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor"
                    className="text-light dark:text-dark">
                    <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.425V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833l1.99 2.417v.319H3v-.319l1.99-2.417a.972.972 0 0 0 .258-.833V7.269z" />
                  </svg>
                </div>
                <span className="font-bold text-light dark:text-dark text-xs">
                  Medium
                </span>
              </div>
            </div>

            {/* Read time badge */}
            <div className="absolute bottom-2 right-2 z-10">
              <span className="inline-block px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm
                bg-primary/90 text-light dark:bg-primaryDark/90 dark:text-dark">
                {time}
              </span>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="w-full p-4 flex flex-col">
          <Link href={link} target="_blank" className="group">
            <h2 className="mb-2 text-left text-xl font-bold transition-colors duration-300
              text-primary dark:text-primaryDark group-hover:underline line-clamp-2">
              {title}
            </h2>
          </Link>

          <p className="mb-4 text-dark/80 dark:text-light/80 text-sm leading-relaxed line-clamp-3">
            {summary}
          </p>

          {/* Action button */}
          <div className="mt-auto">
            <Link
              href={link}
              target="_blank"
              className="flex items-center justify-center gap-1.5 py-2 rounded-md
                transition-colors duration-300 text-sm font-medium
                bg-primary text-light dark:bg-primaryDark dark:text-dark
                hover:bg-primary/90 dark:hover:bg-primaryDark/90"
              aria-label="Read Article"
            >
              <span>Read Full Article</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </motion.li>
  )
}

const MediumArticle = ({ article }) => {
  // Format the date
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  // Calculate read time (rough estimate)
  const calculateReadTime = (summary) => {
    const wordsPerMinute = 200;
    const wordCount = summary.split(/\s+/).length;
    const readTime = Math.ceil(wordCount / wordsPerMinute);
    return `${readTime} min read`;
  };

  return (
    <motion.article
      className="col-span-1 w-full flex flex-col overflow-hidden rounded-lg shadow-sm bg-light dark:bg-dark
        hover:shadow-md transition-all duration-300 border border-dark/5 dark:border-light/5"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      viewport={{ once: true }}
    >
      {/* Article image */}
      <div className="relative overflow-hidden h-48 sm:h-40">
        <Link
          href={article.link}
          target="_blank"
          className="block h-full"
        >
          <FramerImage
            src={article.imgSrc || placeholderImg}
            alt={article.title}
            className="w-full h-full object-cover object-center"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
            width={600}
            height={400}
            placeholder={`data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`}
            blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(600, 400))}`}
          />
        </Link>

        {/* Read time badge */}
        <div className="absolute bottom-2 right-2 z-10">
          <span className="inline-block px-2 py-1 rounded-md text-xs font-medium backdrop-blur-sm
            bg-primary/90 text-light dark:bg-primaryDark/90 dark:text-dark">
            {calculateReadTime(article.summary)}
          </span>
        </div>

        {/* Medium logo */}
        <div className="absolute top-2 left-2 bg-dark/80 dark:bg-light/80 rounded-md p-1 backdrop-blur-sm">
          <div className="flex items-center gap-1">
            <div className="w-4 h-4 rounded-sm flex items-center justify-center
              bg-primary dark:bg-primaryDark">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor"
                className="text-light dark:text-dark">
                <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.425V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833l1.99 2.417v.319H3v-.319l1.99-2.417a.972.972 0 0 0 .258-.833V7.269z" />
              </svg>
            </div>
            <span className="font-bold text-light dark:text-dark text-xs">
              Medium
            </span>
          </div>
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark/50 to-transparent opacity-0
          group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Article details */}
      <div className="p-3 flex flex-col flex-grow">
        <Link
          href={article.link}
          target="_blank"
          className="group/title"
        >
          <h2 className="text-base font-bold text-dark dark:text-light line-clamp-2
            group-hover/title:text-primary dark:group-hover/title:text-primaryDark transition-colors duration-300">
            {article.title}
          </h2>
        </Link>

        <p className="text-xs text-dark/70 dark:text-light/70 mt-2 mb-3 line-clamp-2">
          {article.summary}
        </p>

        {/* Action buttons */}
        <div className="mt-auto pt-2 border-t border-dark/10 dark:border-light/10 flex items-center justify-between">
          <Link
            href={article.link}
            target="_blank"
            className="flex items-center gap-1 text-dark/70 dark:text-light/70 hover:text-primary dark:hover:text-primaryDark
              transition-colors duration-300 text-xs font-medium"
            aria-label="Read Article"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
              <polyline points="15 3 21 3 21 9"></polyline>
              <line x1="10" y1="14" x2="21" y2="3"></line>
            </svg>
            <span>Read Article</span>
          </Link>

          <span className="text-xs text-dark/60 dark:text-light/60">
            {formatDate(article.pubDate)}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

const Articles = () => {
  const [mediumPosts, setMediumPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMediumPosts = async () => {
      try {
        setIsLoading(true);
        const response = await fetch('/api/medium');

        if (!response.ok) {
          throw new Error('Failed to fetch Medium posts');
        }

        const data = await response.json();
        setMediumPosts(data);
        setIsLoading(false);
      } catch (err) {
        console.error('Error fetching Medium posts:', err);
        setError(err.message);
        setIsLoading(false);
      }
    };

    fetchMediumPosts();
  }, []);

  return (
    <>
      <Head>
        <title>CoderGanesh | Articles</title>
        <meta name="description" content="Read my latest articles on web development, programming, and technology." />
      </Head>
      <main className="w-full mb-8 flex flex-col items-center justify-center">
        <Layout className="pt-4 sm:pt-8">
          {/* Hero section */}
          <div className="w-full mb-6 sm:mb-8 relative">
            <div className="absolute top-0 left-0 w-full h-full bg-primary/5 dark:bg-primaryDark/5 rounded-lg -z-10"></div>
            <div className="mx-auto py-4 sm:py-6 px-3 sm:px-4 text-center">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark dark:text-light mb-2">
                  My <span className="text-primary dark:text-primaryDark">Articles</span>
                </h1>
                <p className="text-dark/70 dark:text-light/70 text-sm sm:text-base mb-2">
                  Thoughts, ideas, and insights on web development and technology
                </p>
              </motion.div>
            </div>
          </div>

          {/* Loading State */}
          {isLoading && (
            <div className="w-full flex flex-col justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary dark:border-primaryDark mb-4"></div>
              <p className="text-dark/70 dark:text-light/70">Loading articles from Medium...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="w-full text-center py-10 px-4 bg-red-50 dark:bg-red-900/20 rounded-lg border border-red-100 dark:border-red-800/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto mb-4 text-red-500 dark:text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="text-red-600 dark:text-red-400 font-medium text-lg">Error: {error}</p>
              <p className="mt-2 text-red-600/80 dark:text-red-400/80">Please try again later or check your Medium username configuration.</p>
            </div>
          )}

          {/* Featured Articles Section */}
          {!isLoading && mediumPosts.length > 0 && (
            <section className="mb-12">
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-4 bg-primary dark:bg-primaryDark mr-2"></div>
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-dark dark:text-light">
                  Featured Articles
                </h2>
              </div>

              <ul className="grid grid-cols-2 gap-6 md:grid-cols-1">
                {mediumPosts.slice(0, 2).map((post, index) => (
                  <FeaturedArticle
                    key={post.guid || index}
                    title={post.title}
                    summary={post.summary}
                    time={`${Math.ceil(post.summary.split(/\s+/).length / 200)} min read`}
                    link={post.link}
                    img={post.imgSrc || placeholderImg}
                  />
                ))}
              </ul>
            </section>
          )}

          {/* All Articles Section */}
          {!isLoading && mediumPosts.length > 0 && (
            <section>
              <div className="flex items-center mb-4">
                <div className="h-0.5 w-4 bg-primary dark:bg-primaryDark mr-2"></div>
                <h2 className="font-bold text-lg sm:text-xl md:text-2xl text-dark dark:text-light">
                  All Articles
                </h2>
              </div>

              <ul className="grid grid-cols-3 gap-4 sm:grid-cols-2 xs:grid-cols-1">
                {mediumPosts.map((post, index) => (
                  <MediumArticle key={post.guid || index} article={post} />
                ))}
              </ul>

              {/* Medium profile link */}
              <div className="mt-10 text-center">
                <p className="text-dark/70 dark:text-light/70 mb-3 text-sm">
                  Want to read more of my articles?
                </p>
                <a
                  href="https://medium.com/@shitganesh4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md bg-dark text-light dark:bg-light dark:text-dark
                    hover:bg-primary dark:hover:bg-primaryDark transition-colors duration-300 font-medium text-xs sm:text-sm"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.285 7.269a.733.733 0 0 0-.24-.619l-1.77-2.133v-.32h5.498l4.25 9.32 3.736-9.32H21v.319l-1.515 1.451a.45.45 0 0 0-.168.425v10.666a.448.448 0 0 0 .168.425l1.479 1.451v.319h-7.436v-.319l1.529-1.487c.152-.15.152-.195.152-.425V8.401L10.95 19.218h-.575L5.417 8.401v7.249c-.041.305.06.612.275.833l1.99 2.417v.319H3v-.319l1.99-2.417a.972.972 0 0 0 .258-.833V7.269z" />
                  </svg>
                  <span>Follow Me on Medium</span>
                </a>
              </div>
            </section>
          )}

          {/* No Articles State */}
          {!isLoading && mediumPosts.length === 0 && !error && (
            <div className="w-full text-center py-16 px-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto mb-4 text-dark/30 dark:text-light/30" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
              <p className="text-dark/60 dark:text-light/60 text-lg mb-2">No articles found</p>
              <p className="text-dark/50 dark:text-light/50">Start writing on Medium to see your posts here!</p>
            </div>
          )}
        </Layout>
      </main>
    </>
  )
}

export default Articles
