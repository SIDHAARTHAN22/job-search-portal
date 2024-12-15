// src/components/JobList.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles.css';

const jobs = [
  {
    companyName: 'Tech Corp',
    jobTitle: 'Software Developer',
    jobRole: 'Full Stack Developer',
    vacancies: 5,
    postedDate: '2024-07-15',
    salary: '80,000',
    logo: 'https://cdn.logojoy.com/wp-content/uploads/2018/05/30162618/1533.png' // Placeholder image URL
  },
  {
    companyName: 'Innovate Solutions',
    jobTitle: 'Data Analyst',
    jobRole: 'Data Science',
    vacancies: 3,
    postedDate: '2024-07-20',
    salary: '70,000',
    logo: 'data:image/png;base64,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'

  },
  {
    companyName: 'Creative Mind',
    jobTitle: 'UI/UX Designer',
    jobRole: 'Design',
    vacancies: 2,
    postedDate: '2024-07-22',
    salary: '65,000',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8Inbm8J861JZw4DYvNGFfWzifFEBVmP-IpQ&s'
  },
  {
    companyName: 'NextGen Technologies',
    jobTitle: 'Backend Developer',
    jobRole: 'Server-side Development',
    vacancies: 4,
    postedDate: '2024-07-25',
    salary: '85,000',
    logo: 'data:image/png;base64,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'
  },
  {
    companyName: 'TeamCode',
    jobTitle: 'Data Scientist',
    jobRole: 'Machine Learning',
    vacancies: 6,
    postedDate: '2024-07-28',
    salary: '95,000',
    logo: 'data:image/jpeg;base64,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'
  },
  {
    companyName: 'Devs Hand',
    jobTitle: 'Frontend Developer',
    jobRole: 'UI Development',
    vacancies: 5,
    postedDate: '2024-07-30',
    salary: '75,000',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOXJzBWNAjtqepV1n84uBSDH6gHKwPvOIfrw&s'
  },
  {
    companyName: 'Cloud Team',
    jobTitle: 'Cloud Engineer',
    jobRole: 'Cloud Architecture',
    vacancies: 3,
    postedDate: '2024-08-01',
    salary: '90,000',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-Qek_Zq0sKw3XxeUyoNj00LyraLutbpUDgQ&s'
  },
  {
    companyName: 'Cryptex',
    jobTitle: 'Cybersecurity Analyst',
    jobRole: 'Security',
    vacancies: 4,
    postedDate: '2024-08-03',
    salary: '85,000',
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQcw9asHLMnETviUMziHYF6Gdhl_OCa0IYPw&s'
  }
];

function JobList() {
  const navigate = useNavigate();

  const handleApplyClick = (job) => {
    navigate('/apply', { state: { job } });
  };

  return (
    <div className="job-list-page">
      <h2>Available Jobs</h2>
      <div className="job-list-container">
        {jobs.map((job, index) => (
          <div className="job-card" key={index}>
            <div className="job-details">
              <img src={job.logo} alt={`${job.companyName} logo`} className="company-logo" />
              <h3>{job.jobTitle}</h3>
              <p><strong>Company:</strong> {job.companyName}</p>
              <p><strong>Role:</strong> {job.jobRole}</p>
              <p><strong>Vacancies:</strong> {job.vacancies}</p>
              <p><strong>Posted Date:</strong> {job.postedDate}</p>
              <p><strong>Salary:</strong> {job.salary}</p>
            </div>
            <div className="apply-button-container">
              <button 
                className="apply-button" 
                onClick={() => handleApplyClick(job)}
              >
                Apply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default JobList;
