import { mentors } from '../data/mentors';
import MentorCard from '../components/MentorCard';

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
            Meet Our Expert Mentors
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Book a 1:1 call with industry experts who can help guide your tech career journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mentors.map((mentor) => (
            <MentorCard key={mentor.id} mentor={mentor} />
          ))}
        </div>
      </div>
    </div>
  );
} 