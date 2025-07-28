
'use client';
import Image from 'next/image';

export default function RecentProjects() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Recent Projects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Project 1 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 relative overflow-hidden bg-red-500">
              <img 
                src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80"
                alt="Home roof assessment"
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
            <div className="bg-black bg-opacity-20 py-2 text-center">
              <span className="text-white text-lg font-medium px-4">Aerial photo of a private home roof</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Project 1) Home owner roof and drainage assessment</h3>
              <p className="text-gray-300 mb-6">Following a storm we were able to work with the home owner to quickly assess damage to roof tiles and structural integrity</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Find out more</button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-gray-800 rounded-xl overflow-hidden shadow-lg">
            <div className="h-64 relative overflow-hidden bg-gray-700">
              <img 
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
                alt="Garden center assessment"
                className="w-full h-full object-cover"
                style={{ display: 'block' }}
              />
            </div>
            <div className="bg-black bg-opacity-20 py-2 text-center">
              <span className="text-white text-lg font-medium px-4">Aerial photo of a garden center</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-white mb-3">Project 2) Commercial assessment for planning and layout</h3>
              <p className="text-gray-300 mb-6">Following final construction of xyz garden center we were able to work with the developer to implement a much better solution for the layout of the area which helped with customer interaction and flow.</p>
              <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700">Find out more</button>
            </div>
          </div>
        </div>

        <div className="text-center">
          <button className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100">See more</button>
        </div>
      </div>
    </section>
  );
}
