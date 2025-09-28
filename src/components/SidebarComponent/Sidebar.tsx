import React from 'react';
import { BookOpen } from 'lucide-react';
import './Sidebar.css';

export default function Sidebar() {

  const baseImageUrl = "https://i.pravatar.cc/48";

  const generateImageUrl = (seed) => {
    return `${baseImageUrl}?seed=${seed}`;
  };

  const staffPicks = [
    {
      author: "Zulle",
      publication: "Medium",
      title: "How this brand strategist uses Medium to explore ideas, repurpose content, and land clients",
      timeAgo: "2d ago",
      image: generateImageUrl("zulle")
    },
    {
      author: "Jud Brewer MD PhD",
      title: 'From "I Have To" to "I Get To": How One Word Change Rewires Your Brain',
      timeAgo: "5d ago",
      image: generateImageUrl("jud-brewer")
    },
    {
      author: "Linh Nguyen",
      title: "Golden Design Lessons from Tokyo Metro",
      timeAgo: "Sep 3",
      image: generateImageUrl("linh-nguyen")
    }
  ];

  const topics = [
    "Data Science", "React", "Coding", "Mental Health", "UX", "Python", "Productivity"
  ];

  const whoToFollow = [
    {
      name: "Dr. Derek Austin 🥳",
      bio: "AI Context Engineer. I teach LLMs to think. Full...",
      image: generateImageUrl("derek-austin")
    },
    {
      name: "ITNEXT",
      bio: "ITNEXT is a platform for IT developers & software...",
      type: "Publication",
      image: generateImageUrl("itnext")
    },
    {
      name: "Oliver Foster",
      bio: "Primarily proficient in the Java programming...",
      image: generateImageUrl("oliver-foster")
    }
  ];

  return (
    <aside className="sidebar">
      {/* Staff Picks */}
      <div className="sidebar-section">
        <h3 className="section-title">Staff Picks</h3>
        <div className="staff-picks">
          {staffPicks.map((pick, index) => (
            <div key={index} className="staff-pick-item">
              <div className="pick-avatar">
                <img src={pick.image} alt={pick.author} className="pick-avatar-img"/>
              </div>
              <div className="pick-content">
                <p className="pick-title">
                  {pick.title}
                </p>
                <p className="pick-author">
                  {pick.publication && `${pick.author} in ${pick.publication}`}
                  {!pick.publication && pick.author}
                </p>
                <p className="pick-time">{pick.timeAgo}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="see-more-link">
          See the full list
        </button>
      </div>

      {/* Recommended Topics */}
      <div className="sidebar-section">
        <h3 className="section-title">Recommended topics</h3>
        <div className="topics-container">
          {topics.map((topic, index) => (
            <button 
              key={index}
              className="topic-button"
            >
              {topic}
            </button>
          ))}
        </div>
        <button className="see-more-link">
          See more topics
        </button>
      </div>

      {/* Who to Follow */}
      <div className="sidebar-section">
        <h3 className="section-title">Who to follow</h3>
        <div className="follow-list">
          {whoToFollow.map((person, index) => (
            <div key={index} className="follow-item">
              <div className="follow-content">
                <div className="follow-avatar">
                  <img src={person.image} alt={person.name} className="follow-avatar-img"/>
                </div>
                <div className="follow-info">
                  <div className="follow-name-container">
                    <p className="follow-name">
                      {person.name}
                    </p>
                  </div>
                  <p className="follow-bio">
                    {person.bio}
                  </p>
                  {person.type && (
                    <p className="follow-type">{person.type}</p>
                  )}
                </div>
              </div>
              <button className="follow-button">
                Follow
              </button>
            </div>
          ))}
        </div>
        <button className="see-more-link">
          See more suggestions
        </button>
      </div>
    </aside>
  );
}