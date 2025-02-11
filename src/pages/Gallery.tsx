export default function Gallery() {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800",
      caption: "Hackathon 2023 - Team Collaboration"
    },
    {
      url: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800",
      caption: "Winners Presentation"
    },
    {
      url: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=800",
      caption: "Workshop Session"
    },
    {
      url: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800",
      caption: "Mentoring Session"
    },
    {
      url: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800",
      caption: "Team Discussion"
    },
    {
      url: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800",
      caption: "Project Presentation"
    }
  ];

  return (
    <div className="pt-20 min-h-screen bg-gray-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">
          Previous Hackathon Memories
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-lg">
              <div className="relative pb-[66.666667%]">
                <img
                  src={image.url}
                  alt={image.caption}
                  className="absolute inset-0 w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4 bg-white dark:bg-gray-800">
                <p className="text-gray-700 dark:text-gray-300">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <footer className="bg-gray-900 py-12">  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-500">  
          <p>  
            &copy; 2025 Global Coding Club Hackathon. All rights reserved.  
          </p>  
        </div>  
      </footer>
    </div>
    
  );
  
}