import React from 'react'
import BlogCard from '../components/BlogCard'
import ToolCard from '../components/ToolCard'

const Home: React.FC = () => {
  const blogPosts = [
    {
      id: 1,
      title: "Getting Started with React",
      excerpt: "Learn React basics...",
      author: "John Doe",
      date: "2024-01-15",
      imageUrl: "https://via.placeholder.com/800x400",
      readTime: "5 min"
    }
  ]

  const tools = [
    {
      id: 1,
      name: "VS Code",
      description: "Code editor",
      icon: "💻",
      category: "Editor",
      isFree: true,
      url: "https://code.visualstudio.com/"
    }
  ]

  return (
    <div>
      <h1>Welcome to My Project</h1>
      
      <section>
        <h2>Blog Posts</h2>
        {blogPosts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </section>

      <section>
        <h2>Tools</h2>
        {tools.map(tool => (
          <ToolCard key={tool.id} tool={tool} />
        ))}
      </section>
    </div>
  )
}

export default Home
