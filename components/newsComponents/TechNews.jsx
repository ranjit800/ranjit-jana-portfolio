"use client";

import React, { useState, useEffect } from "react";
import axios from "axios";
import { FiExternalLink, FiRefreshCw } from "react-icons/fi";
import { BiNews } from "react-icons/bi";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const TechNews = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState(null);
  const [category, setCategory] = useState("technology");

  // More reliable fallback image - using a local image path instead of external service
  const fallbackImage = "/images/news-placeholder.jpg";

  // Alternative fallback - Data URL for a simple gradient as fallback (works without external dependencies)
  const defaultFallbackImage =
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect width='600' height='400' fill='%23f0f0f0'/%3E%3Ctext x='300' y='200' font-family='Arial, sans-serif' font-size='24' fill='%23777' text-anchor='middle' dominant-baseline='middle'%3ENews Image%3C/text%3E%3C/svg%3E";

  // Available categories
  const categories = [
    { value: "technology", label: "Technology" },
    { value: "science", label: "Science" },
  ];

  const fetchNews = async (selectedCategory = category) => {
    try {
      setRefreshing(true);
      // Using NewsData.io API with the provided API key
      const response = await axios.get(`https://newsdata.io/api/1/news?apikey=pub_76977c1e1c193a164d5a6033296b04296b1a0&country=in,us&language=en&category=${selectedCategory}`);

      if (response.data.status === "success") {
        setNews(response.data.results);
      } else {
        setError("Failed to fetch news: " + response.data.results?.message || "Unknown error");
      }

      setLoading(false);
      setRefreshing(false);
    } catch (err) {
      setError("Failed to fetch news. " + err.message);
      setLoading(false);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();

    // Create a folder for the fallback image if using local storage
    try {
      const checkImageFolder = async () => {
        // This is just a placeholder for actual folder creation logic
        // In a real app, you'd ensure the public/images directory exists at build time
        console.log("Ensuring fallback image is available");
      };

      checkImageFolder();
    } catch (err) {
      console.error("Error checking image folder:", err);
    }
  }, []);

  const handleCategoryChange = (e) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    fetchNews(newCategory);
  };

  const handleRefresh = () => {
    fetchNews();
  };

  if (loading) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[80vh] flex justify-center items-center">
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded max-w-2xl">
          <p>{error}</p>
          <p className="mt-2 text-sm">Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 min-h-[80vh]">
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h2 className="text-3xl font-bold flex items-center">
          <BiNews className="text-blue-500 mr-2" size={32} />
          Latest {category.charAt(0).toUpperCase() + category.slice(1)} News
        </h2>

        <div className="flex items-center space-x-4 mt-4 md:mt-0">
          <div className="relative">
            <select
              value={category}
              onChange={handleCategoryChange}
              className="bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg py-2 pl-3 pr-10 text-sm appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={refreshing}
            >
              {categories.map((cat) => (
                <option key={cat.value} value={cat.value}>
                  {cat.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700 dark:text-gray-300">
              <svg className="h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
          <button onClick={handleRefresh} disabled={refreshing} className="flex items-center bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg disabled:bg-blue-300">
            <FiRefreshCw className={`${refreshing ? "animate-spin" : ""} mr-2`} />
            Refresh
          </button>
        </div>
      </div>

      {news.length > 0 ? (
        <div className="mb-10">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            // pagination={{
            //   clickable: true,
            // }}
            navigation={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
              loop: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
            }}
            modules={[ Navigation, Autoplay]}
            className="mySwiper"
          >
            {news.map((article, index) => (
              <SwiperSlide key={index} className="h-auto">
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-xl">
                  <div className="relative h-48 w-full bg-gray-100 dark:bg-gray-700 flex-shrink-0">
                    <Image
                      src={article.image_url || defaultFallbackImage}
                      alt={article.title || "News article"}
                      width={400}
                      height={300}
                      className="object-cover"
                      style={{ width: "100%", height: "100%" }}
                      onError={(e) => {
                        e.target.src = defaultFallbackImage;
                      }}
                      unoptimized={!article.image_url}
                    />
                    {article.source_name && <div className="absolute top-0 right-0 bg-blue-500 text-white px-2 py-1 m-2 rounded text-xs font-semibold">{article.source_name}</div>}
                  </div>
                  <div className="p-4 flex-1 flex flex-col justify-between min-h-[30vh] md:max-h-[30vh]">
                    <div>
                      <h3 className="text-lg font-bold mb-2 line-clamp-2 h-14">{article.title}</h3>
                      <div className="text-gray-600 dark:text-gray-300 mb-3">
                        {article.description && <p className="text-sm leading-relaxed line-clamp-3 h-16">{article.description}</p>}
                      </div>
                    </div>
                    <div className="flex justify-between items-center mt-2 pt-2 border-t border-gray-200 dark:border-gray-700">
                      <span className="text-xs text-gray-500">
                        {new Date(article.pubDate).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <a
                        href={article.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-sm bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded transition-colors duration-300"
                      >
                        Read More <FiExternalLink className="ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <div className="text-center py-10">
          <p className="text-gray-500">No articles found for this category. Try another category or refresh.</p>
        </div>
      )}

      <div className="mt-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Powered by{" "}
          <a href="https://newsdata.io" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            NewsData.io
          </a>
        </p>
      </div>
    </div>
  );
};

export default TechNews;
