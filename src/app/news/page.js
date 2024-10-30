"use client";

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useRef,
  useCallback,
  forwardRef,
} from "react";
import { ThemeProvider, useTheme } from "next-themes";

import { X } from "lucide-react";
import { Bookmark } from "lucide-react";

import { Loader } from "lucide-react";
import { Menu, Moon, Sun, Search } from "lucide-react";

const App = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <ThemeProvider>
      <BookmarksProvider>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <Header onMenuClick={() => setSidebarOpen(true)} />
          <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
          <main className="container mx-auto px-4 py-8">
            <NewsContainer />
          </main>
        </div>
      </BookmarksProvider>
    </ThemeProvider>
  );
};

export default App;

// src/components/Header.jsx

const Header = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <Menu className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold dark:text-white">NewsHub</h1>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              {theme === "dark" ? (
                <Sun className="w-6 h-6 dark:text-white" />
              ) : (
                <Moon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

const API_KEY = "c97128b3ac7e43148a957c4aac7d2459";
const NEWS_PER_PAGE = 10;

const NewsContainer = () => {
  const [news, setNews] = useState([]);
  const [displayedNews, setDisplayedNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [hasMore, setHasMore] = useState(true);
  const [filters, setFilters] = useState({
    category: "general",
    country: "us",
    searchTerm: "",
  });

  const observer = useRef();
  const { bookmarks } = useBookmarks();

  const fetchNews = async () => {
    setLoading(true);
    setError(null);

    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${filters.country}&category=${filters.category}&pageSize=30&apiKey=${API_KEY}`;

      if (filters.searchTerm) {
        url = `https://newsapi.org/v2/everything?q=${filters.searchTerm}&pageSize=30&apiKey=${API_KEY}`;
      }

      const response = await fetch(url);
      const data = await response.json();

      if (data.status === "error") {
        throw new Error(data.message || "Failed to fetch news");
      }

      setNews(data.articles || []);
      setDisplayedNews(data.articles.slice(0, NEWS_PER_PAGE) || []);
      setHasMore(data.articles.length > NEWS_PER_PAGE);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, [filters]);

  const lastNewsElementRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          loadMore();
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );

  const loadMore = () => {
    const nextNews = news.slice(
      displayedNews.length,
      displayedNews.length + NEWS_PER_PAGE
    );

    if (nextNews.length > 0) {
      setDisplayedNews((prev) => [...prev, ...nextNews]);
      setHasMore(displayedNews.length + nextNews.length < news.length);
    } else {
      setHasMore(false);
    }
  };

  const handleFilterChange = (newFilters) => {
    setFilters((prev) => ({ ...prev, ...newFilters }));
  };

  return (
    <div className="space-y-6">
      <NewsFilters filters={filters} onFilterChange={handleFilterChange} />

      {error && (
        <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 rounded-lg text-red-700 dark:text-red-400">
          {error}
        </div>
      )}

      {loading && displayedNews.length === 0 && (
        <div className="flex justify-center items-center py-12">
          <Loader className="w-8 h-8 animate-spin dark:text-white" />
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {displayedNews.map((article, index) => (
          <NewsCard
            key={`${article.url}-${index}`}
            article={article}
            ref={index === displayedNews.length - 1 ? lastNewsElementRef : null}
            isBookmarked={bookmarks.some(
              (bookmark) => bookmark.url === article.url
            )}
          />
        ))}
      </div>

      {loading && displayedNews.length > 0 && (
        <div className="flex justify-center items-center py-4">
          <Loader className="w-6 h-6 animate-spin dark:text-white" />
        </div>
      )}

      {!hasMore && displayedNews.length > 0 && (
        <div className="text-center text-gray-500 dark:text-gray-400 py-4">
          No more news articles to load
        </div>
      )}
    </div>
  );
};

const NewsCard = forwardRef(function NewsCard({ article, isBookmarked }, ref) {
  const { toggleBookmark } = useBookmarks();

  return (
    <div
      ref={ref}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="w-full h-48 object-cover"
          onError={(e) => (e.target.style.display = "none")}
        />
      )}
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h2 className="text-lg font-semibold dark:text-white">
            <a
              href={article.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-600 dark:hover:text-blue-400"
            >
              {article.title}
            </a>
          </h2>
          <button
            onClick={() => toggleBookmark(article)}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full"
          >
            <Bookmark
              className={`w-5 h-5 ${
                isBookmarked ? "fill-current" : ""
              } dark:text-white`}
            />
          </button>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {article.description}
        </p>

        <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
          <span>{article.source.name}</span>
          <span>{new Date(article.publishedAt).toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
});

const NewsFilters = ({ filters, onFilterChange }) => {
  const categories = [
    "general",
    "business",
    "technology",
    "sports",
    "entertainment",
    "health",
    "science",
  ];

  const countries = [
    { code: "us", name: "United States" },
    { code: "gb", name: "United Kingdom" },
    { code: "in", name: "India" },
    { code: "au", name: "Australia" },
    { code: "ca", name: "Canada" },
    { code: "sg", name: "Singapore" },
    { code: "nz", name: "New Zealand" },
  ];

  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-4">
        <div className="flex-1 min-w-[200px]">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search news..."
              value={filters.searchTerm}
              onChange={(e) => onFilterChange({ searchTerm: e.target.value })}
              className="w-full pl-10 pr-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"
            />
          </div>
        </div>

        <select
          value={filters.country}
          onChange={(e) => onFilterChange({ country: e.target.value })}
          className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          {countries.map(({ code, name }) => (
            <option key={code} value={code}>
              {name}
            </option>
          ))}
        </select>

        <select
          value={filters.category}
          onChange={(e) => onFilterChange({ category: e.target.value })}
          className="border rounded-lg px-4 py-2 dark:bg-gray-800 dark:border-gray-700 dark:text-white"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

const Sidebar = ({ isOpen, onClose }) => {
  const { bookmarks, removeBookmark } = useBookmarks();

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed top-0 left-0 h-full w-80 bg-white dark:bg-gray-800 shadow-lg 
        transform transition-transform duration-300 ease-in-out z-50
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="p-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold dark:text-white">Bookmarks</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg"
            >
              <X className="w-6 h-6 dark:text-white" />
            </button>
          </div>

          <div className="space-y-4">
            {bookmarks.length === 0 ? (
              <p className="text-gray-500 dark:text-gray-400">
                No bookmarks yet
              </p>
            ) : (
              bookmarks.map((article) => (
                <div
                  key={article.url}
                  className="border-b dark:border-gray-700 pb-4"
                >
                  <a
                    href={article.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
                  >
                    {article.title}
                  </a>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {article.source.name}
                    </span>
                    <button
                      onClick={() => removeBookmark(article)}
                      className="text-xs text-red-600 hover:text-red-700 dark:text-red-400"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const BookmarksContext = createContext();

export const BookmarksProvider = ({ children }) => {
  const [bookmarks, setBookmarks] = useState(() => {
    const saved =
      typeof window !== "undefined"
        ? localStorage.getItem("newsBookmarks")
        : null;
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("newsBookmarks", JSON.stringify(bookmarks));
  }, [bookmarks]);

  const toggleBookmark = (article) => {
    setBookmarks((prevBookmarks) => {
      const exists = prevBookmarks.some(
        (bookmark) => bookmark.url === article.url
      );

      if (exists) {
        return prevBookmarks.filter((bookmark) => bookmark.url !== article.url);
      } else {
        return [...prevBookmarks, article];
      }
    });
  };

  const removeBookmark = (article) => {
    setBookmarks((prevBookmarks) =>
      prevBookmarks.filter((bookmark) => bookmark.url !== article.url)
    );
  };

  const value = {
    bookmarks,
    toggleBookmark,
    removeBookmark,
  };

  return (
    <BookmarksContext.Provider value={value}>
      {children}
    </BookmarksContext.Provider>
  );
};

export const useBookmarks = () => {
  const context = useContext(BookmarksContext);
  if (context === undefined) {
    throw new Error("useBookmarks must be used within a BookmarksProvider");
  }
  return context;
};
