import React from 'react';
import Header from './Header';
import NavigationTabs from './components/NavigationTabs/NavigationTab';
import ArticleCard from './components/ArticleCard/ArticleCard';
import Sidebar from './components/SidebarComponent/Sidebar';
import './Homepage.css';

// Main App Component
const MediumHomepage = () => {

  const baseImageUrl = "https://i.pravatar.cc/48";

  const generateImageUrl = (seed) => {
    return `${baseImageUrl}?seed=${seed}`;
  };

  const articles = [
    {
      publication: "Language Lab",
      author: "Benbén",
      title: "How Knowledge of Languages Is More Valuable Than Ever on the Job Market",
      subtitle: "It's not a skill issue, but a marketing issue",
      timeAgo: "5d ago",
      readTime: "3 min read",
      claps: "1.2K",
      responses: "45",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      favicon: generateImageUrl("language-lab")
    },
    {
      publication: "Level Up Coding",
      author: "Attila Vágó",
      title: "Welcome To Dream-Driven Development Where Nothing Works",
      subtitle: "Half-baked diagrams, features that make no sense, Mikado architecture. You've seen it, you've lived it, and it has a name...",
      timeAgo: "4d ago",
      readTime: "5 min read",
      claps: "700",
      responses: "16",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400&h=300&fit=crop",
      featured: true,
      favicon: generateImageUrl("level-up-coding")
    },
    {
      publication: "Predict",
      author: "iswarya writes",
      title: "Future-Proof Careers in the Age of AI: What You Should Learn in 2026",
      subtitle: "What if I told you that by this time next year, you could land a job that pays over $100,000—and it won't be threatened by AI?",
      timeAgo: "Jul 30",
      readTime: "6 min read",
      claps: "3.7K",
      responses: "165",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop",
      favicon: generateImageUrl("predict")
    },
    {
      publication: "Clean Compiler",
      author: "Clean Compiler",
      title: "10 Java Collections Tricks Only Seniors Know",
      subtitle: "If you've been coding in Java for a while, you probably use List, Set, and Map every single day. But here's the thing: most...",
      timeAgo: "3d ago",
      readTime: "4 min read",
      claps: "52",
      responses: "5",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop",
      favicon: generateImageUrl("clean-compiler")
    },
    {
      publication: "The Generator",
      author: "Jim the AI Whisperer",
      title: "Want to see how insanely stupid AI really is? Ask ChatGPT to answer these riddles in just one word",
      subtitle: "Limiting output length reveals AI isn't intelligent—it's chatty!",
      timeAgo: "3d ago",
      readTime: "3 min read",
      claps: "2K",
      responses: "36",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      favicon: generateImageUrl("the-generator")
    }
  ];

  return (
    <div className="app-container">
      <Header />
      <NavigationTabs />
      <div className="main-container">
        <div className="content-wrapper">
          {/* Main Content */}
          <main className="main-content">
            <div className="articles-container">
              {articles.map((article, index) => (
                <ArticleCard key={index} {...article} />
              ))}
            </div>
          </main>
          
          {/* Sidebar - Hidden on mobile, visible on desktop */}
          <Sidebar />
        </div>
      </div>
    </div>
  );
};

export default MediumHomepage;