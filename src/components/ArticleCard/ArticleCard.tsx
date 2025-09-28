import React from "react";
import {
  MessageCircle,
  MinusCircle,
  Bookmark,
  MoreHorizontal,
} from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandsClapping } from "@fortawesome/free-solid-svg-icons";
import './ArticleCard.css';

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
    <article className="article-card">
      <div className="article-content">
        <div className="article-main">
          {/* Featured indicator */}
          {featured && (
            <div className="featured-indicator">
              <div className="clap-icon-container">
                <FontAwesomeIcon
                  icon={faHandsClapping}
                  className="clap-icon"
                />
              </div>
              <span className="featured-text">Trey Huffine clapped</span>
            </div>
          )}

          {/* Author info */}
          <div className="author-info">
            <div className="author-avatar">
              <img 
                src={favicon} 
                alt={publication} 
                className="avatar-img"
              />
            </div>
            <span className="author-text">
              in <span className="publication-name">{publication}</span>{" "}
              by {author}
            </span>
          </div>

          {/* Article content */}
          <h2 className="article-title">
            {title}
          </h2>
          <p className="article-subtitle">
            {subtitle}
          </p>

          {/* Article stats */}
          <div className="article-stats">
            <span className="time-ago">{timeAgo}</span>
            <div className="stat-item">
              <FontAwesomeIcon 
                icon={faHandsClapping} 
                className="stat-icon"
              />
              <span>{claps}</span>
            </div>
            <div className="stat-item">
              <MessageCircle className="stat-icon" />
              <span>{responses}</span>
            </div>
            <div className="stats-spacer"></div>
            <div className="action-buttons">
              <MinusCircle className="action-icon" />
              <Bookmark className="action-icon bookmark-icon" />
              <MoreHorizontal className="action-icon" />
            </div>
          </div>
        </div>

        {/* Article image */}
        {image && (
          <div className="article-image-container">
            <div className="article-image-wrapper">
              <img 
                src={image} 
                alt={title}
                className="article-image"
                onError={handleImageError}
              />
            </div>
          </div>
        )}
      </div>
    </article>
  );
}