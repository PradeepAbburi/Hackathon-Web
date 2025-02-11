import { useState } from 'react';
import type { RegistrationFormData, Branch } from '../types';
import { addRegistrationToSheet } from '../utils/googleSheets';

export default function Register() {
  const [formData, setFormData] = useState<RegistrationFormData>({
    name: '',
    rollNo: '',
    email: '',
    phone: '',
    college: "kiet",
    branch: 'CSM',
    residenceType: 'dayscholar',
    team: '',
    experience: '',
    projectIdea: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const branches: Branch[] = ['CSM', 'CAI', 'AID', 'CSD', 'CSC'];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      await addRegistrationToSheet(formData);
      alert('Registration successful! Your details have been recorded.');
      setFormData({
        name: '',
        rollNo: '',
        email: '',
        phone: '',
        college: "",
        branch: 'CSM',
        residenceType: 'dayscholar',
        team: '',
        experience: '',
        projectIdea: ''
      });
    } catch (error) {
      setSubmitError('Failed to submit registration. Please try again later.');
      console.error('Registration error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="pt-20 min-h-screen bg-gray-900 py-12 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-gray-900 py-12 dark:bg-gray-800 rounded-lg shadow-xl p-6 md:p-8 border border-yellow-500">
          <h1 className="text-3xl font-bold mb-8 text-yellow-500">
            Register for the Hackathon
          </h1>
          {submitError && (
            <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded">
              {submitError}
            </div>
          )}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-yellow-500/30">
              <h2 className="text-xl font-semibold mb-4 text-yellow-500">Personal Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="rollNo" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Roll Number
                  </label>
                  <input
                    type="text"
                    id="rollNo"
                    name="rollNo"
                    required
                    value={formData.rollNo}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-yellow-500/30">
              <h2 className="text-xl font-semibold mb-4 text-yellow-500">Academic Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="branch" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Branch
                  </label>
                  <select
                    id="branch"
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  >
                    {branches.map(branch => (
                      <option key={branch} value={branch}>{branch}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="college" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    College
                  </label>
                  <select
                    id="college"
                    name="college"
                    required
                    value={formData.college}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  >
                    <option value="kiet">KIET</option>
                    <option value="kiet+">KIET+</option>
                    <option value="kietw">KIETW</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="residenceType" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Residence Type
                  </label>
                  <select
                    id="residenceType"
                    name="residenceType"
                    required
                    value={formData.residenceType}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  >
                    <option value="dayscholar">Day Scholar</option>
                    <option value="hosteler">Hosteler</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-yellow-500/30">
              <h2 className="text-xl font-semibold mb-4 text-yellow-500">Team & Project Details</h2>
              <div className="space-y-6">
                <div>
                  <label htmlFor="team" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Team Name
                  </label>
                  <input
                    type="text"
                    id="team"
                    name="team"
                    required
                    value={formData.team}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="experience" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Programming Experience
                  </label>
                  <select
                    id="experience"
                    name="experience"
                    required
                    value={formData.experience}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  >
                    <option value="">Select your experience level</option>
                    <option value="beginner">Beginner (0-1 years)</option>
                    <option value="intermediate">Intermediate (1-3 years)</option>
                    <option value="advanced">Advanced (3+ years)</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="projectIdea" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                    Project Idea (Brief Description)
                  </label>
                  <textarea
                    id="projectIdea"
                    name="projectIdea"
                    rows={4}
                    required
                    value={formData.projectIdea}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-yellow-500 focus:ring-yellow-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-black bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Register Now'}
            </button>
          </form>
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