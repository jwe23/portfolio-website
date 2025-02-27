// src/data/projectsData.ts

interface Project {
    id: number;
    title: string;
    description: string;
    link: string;
    featured: boolean;
  }
  
  const projectsData: Project[] = [
    {
      id: 1,
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with React & TypeScript.',
      link: '/projects/portfolio',
      featured: true
    },
    {
      id: 2,
      title: 'Task Tracker App',
      description: 'A full-stack task management app with user authentication and real-time updates.',
      link: '/projects/task-tracker',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A real-time weather dashboard fetching live data from an external API.',
      link: '/projects/weather-dashboard',
      featured: false
    },
    {
      id: 4,
      title: 'Expense Tracker',
      description: 'A personal finance tracking tool with dynamic charts and budget analysis.',
      link: '/projects/expense-tracker',
      featured: false
    },
    {
      id: 5,
      title: 'Recipe Finder',
      description: 'A recipe search engine integrating an API for finding and saving recipes.',
      link: '/projects/recipe-finder',
      featured: false
    }
  ];
  
  export default projectsData;
  