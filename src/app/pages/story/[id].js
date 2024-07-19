export default function Story({ story }) {
    return (
      <div className="min-h-screen bg-gray-100 p-4">
        {/* <h1 className="text-4xl font-bold text-center mb-8">{story.title}</h1>
        <p className="text-gray-700 mb-4">by {story.by}</p>
        <p className="text-gray-700">{story.text}</p> */}
        <a href={story.url} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          Read more
        </a>
      </div>
    );
  }