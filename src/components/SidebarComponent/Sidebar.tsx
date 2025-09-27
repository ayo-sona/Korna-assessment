import React, { useState } from 'react';
import { BookOpen } from 'lucide-react';

export default function Sidebar () {

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
      <aside className="w-80 pl-8 hidden lg:block">
        {/* Staff Picks */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Staff Picks</h3>
          <div className="space-y-6">
            {staffPicks.map((pick, index) => (
              <div key={index} className="flex space-x-3">
                <div className="w-8 h-8 flex items-center justify-center font-bold">
                  <img src={pick.image} alt={pick.author} className="rounded-full"/>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium text-gray-900 leading-snug mb-1">
                    {pick.title}
                  </p>
                  <p className="text-xs text-gray-500">
                    {pick.publication && `${pick.author} in ${pick.publication}`}
                    {!pick.publication && pick.author}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">{pick.timeAgo}</p>
                </div>
              </div>
            ))}
          </div>
          <button className="text-sm text-green-600 hover:text-green-700 mt-4">
            See the full list
          </button>
        </div>
  
        {/* Recommended Topics */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-4">Recommended topics</h3>
          <div className="flex flex-wrap gap-2">
            {topics.map((topic, index) => (
              <button 
                key={index}
                className="px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-700"
              >
                {topic}
              </button>
            ))}
          </div>
          <button className="text-sm text-green-600 hover:text-green-700 mt-4">
            See more topics
          </button>
        </div>
  
        {/* Who to Follow */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-6">Who to follow</h3>
          <div className="space-y-6">
            {whoToFollow.map((person, index) => (
              <div key={index} className="flex items-start justify-between">
                <div className="flex space-x-3">
                  <div className="w-8 h-8 flex items-center justify-center font-bold">
                    <img src={person.image} alt={person.name} className="rounded-full"/>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-1">
                      <p className="text-sm font-medium text-gray-900">
                        {person.name}
                      </p>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {person.bio}
                    </p>
                    {person.type && (
                      <p className="text-xs text-gray-500 mt-1">{person.type}</p>
                    )}
                  </div>
                </div>
                <button className="px-4 py-1 border border-gray-300 rounded-full text-sm text-gray-700 hover:bg-gray-50 ml-4">
                  Follow
                </button>
              </div>
            ))}
          </div>
          <button className="text-sm text-green-600 hover:text-green-700 mt-4">
            See more suggestions
          </button>
        </div>
  
        {/* Reading List */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Reading list</h3>
          <p className="text-sm text-gray-600 mb-3">
            Click the <BookOpen className="inline w-4 h-4" /> on any story to easily add it to your reading list or a custom list that you can share.
          </p>
        </div>
      </aside>
    );
  };