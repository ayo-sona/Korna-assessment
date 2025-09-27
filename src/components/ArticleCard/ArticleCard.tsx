import React from "react";
import {
  MessageCircle,
  MinusCircle,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";

export default function ArticleCard({
  publication,
  author,
  title,
  subtitle,
  timeAgo,
  readTime,
  claps,
  responses,
  image,
  featured = false,
  favicon,
}: {
  publication: string;
  author: string;
  title: string;
  subtitle: string;
  timeAgo: string;
  readTime: string;
  claps: string;
  responses: string;
  image?: string;
  featured?: boolean;
  favicon: string;
}) {
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const img = e.currentTarget;
    img.style.display = "none";
    if (img.parentNode) {
      (img.parentNode as HTMLElement).style.backgroundColor = "#f3f4f6";
    }
  };

  return (
    <article className="py-4 xs:py-6 sm:py-8 border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-center space-x-2 xs:space-x-3 sm:space-x-6">
        <div className="flex-1 min-w-0">
          {/* Clapped indicator */}
          {featured && (
            <div className="flex items-center space-x-1 mb-2 xs:mb-3 py-2 xs:py-3">
              <div className="w-3 h-3 xs:w-4 xs:h-4 flex items-center justify-center">
                <FontAwesomeIcon
                  icon={faHandsClapping}
                  className="text-gray-600 w-3 h-3 xs:w-4 xs:h-4"
                />
              </div>
              <span className="text-xs xs:text-sm text-gray-600">Trey Huffine clapped</span>
            </div>
          )}

          {/* Author info */}
          <div className="flex items-center space-x-1 xs:space-x-2 mb-2 xs:mb-3">
            <div className="w-5 h-5 xs:w-6 xs:h-6 flex items-center justify-center flex-shrink-0">
              <img 
                src={favicon} 
                alt={publication} 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <span className="text-xs xs:text-sm text-gray-600 truncate">
              in <span className="font-medium text-black">{publication}</span>{" "}
              by {author}
            </span>
          </div>

          {/* Article content */}
          <h2 className="text-base xs:text-lg sm:text-xl font-bold text-gray-900 mb-1 xs:mb-2 leading-tight hover:text-gray-700 cursor-pointer line-clamp-3">
            {title}
          </h2>
          <p className="text-sm xs:text-base text-gray-600 mb-3 xs:mb-4 leading-relaxed line-clamp-2 xs:line-clamp-3">
            {subtitle}
          </p>

          {/* Article stats */}
          <div className="flex items-center space-x-2 xs:space-x-3 sm:space-x-6 text-xs xs:text-sm text-gray-500 overflow-x-auto">
            <span className="flex-shrink-0">{timeAgo}</span>
            <div className="flex items-center space-x-1 cursor-pointer flex-shrink-0">
              <FontAwesomeIcon 
                icon={faHandsClapping} 
                className="w-3 h-3 xs:w-4 xs:h-4"
              />
              <span>{claps}</span>
            </div>
            <div className="flex items-center space-x-1 cursor-pointer flex-shrink-0">
              <MessageCircle className="w-3 h-3 xs:w-4 xs:h-4" />
              <span>{responses}</span>
            </div>
            <div className="flex-1 min-w-0"></div>
            <div className="flex items-center space-x-1 xs:space-x-2 sm:space-x-4 flex-shrink-0">
              <MinusCircle className="w-4 h-4 xs:w-5 xs:h-5 hover:text-gray-700 cursor-pointer" />
              <Bookmark className="w-4 h-4 xs:w-5 xs:h-5 hover:text-gray-700 hidden lg:block cursor-pointer" />
              <MoreHorizontal className="w-4 h-4 xs:w-5 xs:h-5 hover:text-gray-700 cursor-pointer" />
            </div>
          </div>
        </div>

        {/* Article image */}
        {image && (
          <div className="flex-shrink-0">
            <div className="w-16 h-12 xs:w-20 xs:h-16 sm:w-32 sm:h-20 bg-gray-200 rounded overflow-hidden">
              <img 
                src={image} 
                alt={title}
                className="w-full h-full object-cover"
                onError={handleImageError}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}