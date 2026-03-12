import React from 'react'

interface Tool {
  id: number
  name: string
  description: string
  icon: string
  category: string
  isFree: boolean
  url: string
}

interface ToolCardProps {
  tool: Tool
}

const ToolCard: React.FC<ToolCardProps> = ({ tool }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="text-4xl mb-4">{tool.icon}</div>
      <h3 className="text-xl font-semibold mb-2">{tool.name}</h3>
      <p className="text-gray-600 mb-4">{tool.description}</p>
      <div className="flex items-center justify-between mb-4">
        <span className="bg-gray-100 rounded-full px-3 py-1 text-sm">
          {tool.category}
        </span>
        <span className={tool.isFree ? "text-green-600" : "text-blue-600"}>
          {tool.isFree ? "Free" : "Paid"}
        </span>
      </div>
      <a 
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block text-center bg-blue-600 text-white rounded-lg py-2"
      >
        Learn More
      </a>
    </div>
  )
}

export default ToolCard
