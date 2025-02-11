import { Code2, Users, Trophy, Calendar, Award, Rocket, Brain, Target, MessageSquare, Laptop, Globe, Gift } from 'lucide-react';  

export default function Home() {  
  return (  
    <div className="pt-16 min-h-screen bg-gray-900 text-white">  
      {/* Hero Section */}  
      <div className="relative bg-gradient-to-r from-yellow-60 text-white py-24">  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
          <div className="text-center">  
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-yellow-400">  
              Global Coding Club Hackathon 2025  
            </h1>  
            <p className="text-xl md:text-2xl mb-8 text-gray-300">  
              48 Hours of Innovation, Collaboration, and Code  
            </p>  
            <a  
              href="/register"  
              className="inline-block bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300"  
            >  
              Register Now  
            </a>  
          </div>  
        </div>  
      </div>  

      {/* Why Participate Section */}  
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-800 text-white">  
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">  
          Why Participate?  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">  
          {[  
            {  
              title: "Learn & Grow",  
              description: "Gain hands-on experience with cutting-edge technologies",  
              icon: <Brain className="h-8 w-8 text-yellow-500" />  
            },  
            {  
              title: "Network",  
              description: "Connect with industry experts and like-minded developers",  
              icon: <Users className="h-8 w-8 text-yellow-500" />  
            },  
            {  
              title: "Win Prizes",  
              description: "Compete for exciting prizes and recognition",  
              icon: <Trophy className="h-8 w-8 text-yellow-500" />  
            },  
            {  
              title: "Launch Career",  
              description: "Kickstart your career in tech with real-world projects",  
              icon: <Rocket className="h-8 w-8 text-yellow-500" />  
            }  
          ].map((benefit, index) => (  
            <div key={index} className="bg-gray-700 rounded-lg p-6 border border-yellow-600">  
              <div className="text-yellow-500 mb-4">  
                {benefit.icon}  
              </div>  
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">  
                {benefit.title}  
              </h3>  
              <p className="text-gray-300">  
                {benefit.description}  
              </p>  
            </div>  
          ))}  
        </div>  
      </div>  

      {/* Topics Section */}  
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900">  
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">  
          Topics Covered  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {[  
            {  
              title: "AI & Machine Learning",  
              description: "Build intelligent systems and models using cutting-edge AI technologies",  
              icon: <Code2 className="h-8 w-8 text-yellow-500" />  
            },  
            {  
              title: "Web3 & Blockchain",  
              description: "Develop decentralized applications and smart contracts",  
              icon: <Target className="h-8 w-8 text-yellow-500" />  
            },  
            {  
              title: "Cloud Computing",  
              description: "Create scalable solutions using cloud technologies",  
              icon: <Trophy className="h-8 w-8 text-yellow-500" />  
            }  
          ].map((topic, index) => (  
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg border border-yellow-600">  
              <div className="text-yellow-500 mb-4">  
                {topic.icon}  
              </div>  
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">  
                {topic.title}  
              </h3>  
              <p className="text-gray-300">  
                {topic.description}  
              </p>  
            </div>  
          ))}  
        </div>  
      </div>  

      {/* Timeline Section */}  
      <div className="bg-gray-800 py-16">  
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">  
          <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">  
            Event Timeline  
          </h2>  
          <div className="space-y-8">  
            {[  
              {  
                date: "Day 1 - Opening Ceremony",  
                time: "9:00 AM",  
                description: "Kickoff and team formation"  
              },  
              {  
                date: "Day 1 - Hacking Begins",  
                time: "10:00 AM",  
                description: "Start working on your projects"  
              },  
              {  
                date: "Day 1 - Workshop Sessions",  
                time: "2:00 PM",  
                description: "Expert-led technical workshops"  
              },  
              {  
                date: "Day 2 - Mentoring Sessions",  
                time: "10:00 AM",  
                description: "One-on-one mentoring with industry experts"  
              },  
              {  
                date: "Day 2 - Final Submissions",  
                time: "6:00 PM",  
                description: "Project submission deadline"  
              },  
              {  
                date: "Day 2 - Presentations",  
                time: "7:00 PM",  
                description: "Project presentations and judging"  
              }  
            ].map((event, index) => (  
              <div key={index} className="flex items-center space-x-4 bg-gray-700 p-4 rounded-lg border border-yellow-600">  
                <Calendar className="h-6 w-6 text-yellow-500" />  
                <div>  
                  <h3 className="text-lg font-semibold text-yellow-400">  
                    {event.date}  
                  </h3>  
                  <p className="text-gray-300">  
                    {event.time} - {event.description}  
                  </p>  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </div>  

      {/* Prizes Section */}  
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900">  
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">  
          Amazing Prizes  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          {[  
            {  
              place: "1st Place",  
              prize: "$5,000",  
              perks: ["Cash Prize", "Mentorship Program", "Cloud Credits"],  
              icon: <Award className="h-12 w-12 text-yellow-500" />  
            },  
            {  
              place: "2nd Place",  
              prize: "$3,000",  
              perks: ["Cash Prize", "Cloud Credits", "Tech Gadgets"],  
              icon: <Award className="h-10 w-10 text-yellow-500" />  
            },  
            {  
              place: "3rd Place",  
              prize: "$1,000",  
              perks: ["Cash Prize", "Cloud Credits"],  
              icon: <Award className="h-8 w-8 text-yellow-500" />  
            }  
          ].map((prize, index) => (  
            <div key={index} className="bg-gray-700 rounded-lg p-6 text-center border border-yellow-600">  
              <div className="text-yellow-500 flex justify-center mb-4">  
                {prize.icon}  
              </div>  
              <h3 className="text-2xl font-bold mb-2 text-yellow-400">{prize.place}</h3>  
              <p className="text-3xl font-bold text-white mb-4">{prize.prize}</p>  
              <ul className="text-gray-300">  
                {prize.perks.map((perk, i) => (  
                  <li key={i} className="mb-2">{perk}</li>  
                ))}  
              </ul>  
            </div>  
          ))}  
        </div>  
      </div>  

      {/* Global Community Section */}  
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-800">  
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">  
          Join Our Global Community  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">  
          <div className="bg-gray-700 rounded-lg p-6 border border-yellow-600">  
            <Globe className="h-8 w-8 text-yellow-500 mb-4" />  
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Worldwide Network</h3>  
            <p className="text-gray-300">Connect with developers from over 50 countries and build your global network.</p>  
          </div>  
          <div className="bg-gray-700 rounded-lg p-6 border border-yellow-600">  
            <Laptop className="h-8 w-8 text-yellow-500 mb-4" />  
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Virtual Collaboration</h3>  
            <p className="text-gray-300">Experience seamless remote collaboration with cutting-edge tools and platforms.</p>  
          </div>  
          <div className="bg-gray-700 rounded-lg p-6 border border-yellow-600">  
            <Gift className="h-8 w-8 text-yellow-500 mb-4" />  
            <h3 className="text-xl font-semibold mb-2 text-yellow-400">Exclusive Perks</h3>  
            <p className="text-gray-300">Get access to exclusive workshops, resources, and post-event networking opportunities.</p>  
          </div>  
        </div>  
      </div>  

      {/* Success Stories Section */}  
      <div className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-gray-900">  
        <h2 className="text-3xl font-bold text-center mb-12 text-yellow-500">  
          Success Stories  
        </h2>  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">  
          {[  
            {  
              name: "Sarah Lee",  
              testimonial: "This hackathon helped me connect with incredible mentors and land my dream job in AI.",  
              image: "https://randomuser.me/api/portraits/women/31.jpg"  
            },  
            {  
              name: "John Doe",  
              testimonial: "The workshops were amazing! I learned so much about blockchain and cloud computing.",  
              image: "https://randomuser.me/api/portraits/men/19.jpg"  
            },  
            {  
              name: "Emily Chen",  
              testimonial: "Winning 1st place was a game changer! The exposure and networking were invaluable.",  
              image: "https://randomuser.me/api/portraits/women/45.jpg"  
            }  
          ].map((story, index) => (  
            <div key={index} className="bg-gray-700 rounded-lg p-6 shadow-lg border border-yellow-600">  
              <img className="w-16 h-16 rounded-full mx-auto mb-4" src={story.image} alt={story.name} />  
              <h3 className="text-xl font-semibold text-center mb-2 text-yellow-400">  
                {story.name}  
              </h3>  
              <p className="text-gray-300 italic">  
                "{story.testimonial}"  
              </p>  
            </div>  
          ))}  
        </div>  
      </div>  

      {/* Footer Section */}  
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
