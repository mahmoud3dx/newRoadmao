import { useState } from 'react'
import { CheckCircle, Circle, Calendar, Target, BookOpen, Code, Smartphone, Server } from 'lucide-react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Progress } from '@/components/ui/progress.jsx'
import './App.css'

function App() {
  const [completedItems, setCompletedItems] = useState({
    'html-css': true,
    'java-oop': true,
    'dart-flutter': true
  })

  const toggleCompletion = (id) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }

  const progressData = [
    { name: 'HTML & CSS', completed: true, icon: Code },
    { name: 'Java OOP', completed: true, icon: Server },
    { name: 'Dart/Flutter', completed: true, icon: Smartphone },
    { name: 'JavaScript', completed: false, icon: Code },
    { name: 'React', completed: false, icon: Code },
    { name: 'Spring Boot', completed: false, icon: Server }
  ]

  const learningPaths = [
    {
      id: 'javascript',
      title: 'JavaScript Development Path',
      priority: 'High',
      duration: '3-4 months',
      description: 'Master JavaScript for modern web development',
      color: 'bg-yellow-500',
      steps: [
        'JavaScript Syntax & DOM Manipulation',
        'Async Programming & APIs',
        'Modern JavaScript (ES6+)',
        'React Fundamentals',
        'State Management'
      ]
    },
    {
      id: 'css-advanced',
      title: 'Advanced CSS & Frontend',
      priority: 'Medium',
      duration: '1-2 months',
      description: 'Advanced styling and frontend integration',
      color: 'bg-blue-500',
      steps: [
        'CSS Animations & Transitions',
        'CSS Architecture (BEM)',
        'CSS-in-JS',
        'Component Libraries',
        'Responsive Design Patterns'
      ]
    },
    {
      id: 'java-backend',
      title: 'Java Backend Development',
      priority: 'Medium',
      duration: '4-5 months',
      description: 'Enterprise Java development with Spring',
      color: 'bg-red-500',
      steps: [
        'Spring Boot Fundamentals',
        'RESTful API Development',
        'Database Integration',
        'Spring Security',
        'Microservices Architecture'
      ]
    },
    {
      id: 'flutter-mobile',
      title: 'Flutter Mobile Development',
      priority: 'Low-Medium',
      duration: '4-5 months',
      description: 'Cross-platform mobile app development',
      color: 'bg-cyan-500',
      steps: [
        'State Management',
        'Navigation & Routing',
        'API Integration',
        'Custom Widgets',
        'App Deployment'
      ]
    }
  ]

  const phases = [
    {
      title: 'Phase 1: Frontend Focus',
      duration: 'Next 3 months',
      items: [
        'JavaScript fundamentals & DOM manipulation',
        'Advanced CSS techniques',
        'React basics & integration'
      ]
    },
    {
      title: 'Phase 2: Full-Stack Development',
      duration: 'Months 4-6',
      items: [
        'Advanced React & state management',
        'Spring Boot & RESTful APIs'
      ]
    },
    {
      title: 'Phase 3: Specialization',
      duration: 'Months 7-9',
      items: [
        'Choose focus: Web, Enterprise Java, or Mobile',
        'Advanced concepts in chosen area',
        'Production-ready projects'
      ]
    }
  ]

  const projects = [
    {
      category: 'Short-term',
      timeframe: 'Next 3 months',
      items: [
        'Interactive Portfolio Website (HTML/CSS/JavaScript)',
        'React Todo Application with local storage',
        'Spring Boot REST API with database integration'
      ]
    },
    {
      category: 'Medium-term',
      timeframe: 'Months 4-6',
      items: [
        'Full-Stack Web Application (React + Spring Boot)',
        'Flutter Mobile App with API integration',
        'Responsive Component Library'
      ]
    },
    {
      category: 'Long-term',
      timeframe: 'Months 7-9',
      items: [
        'Production-Ready Application with authentication',
        'Open Source Contribution to existing projects',
        'Personal Project showcasing all technologies'
      ]
    }
  ]

  const completedProgress = progressData.filter(item => item.completed).length
  const totalProgress = progressData.length
  const progressPercentage = (completedProgress / totalProgress) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Updated Programming Roadmap
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-6">
            Your personalized learning journey based on completed progress
          </p>
          
          {/* Progress Overview */}
          <Card className="max-w-md mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="h-5 w-5" />
                Overall Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Progress value={progressPercentage} className="mb-4" />
              <p className="text-sm text-slate-600 dark:text-slate-400">
                {completedProgress} of {totalProgress} milestones completed
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Completed Progress */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-500" />
              Completed Progress
            </CardTitle>
            <CardDescription>
              Great job on completing these foundational topics!
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {progressData.filter(item => item.completed).map((item, index) => {
                const Icon = item.icon
                return (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <Icon className="h-5 w-5 text-slate-600 dark:text-slate-400" />
                    <span className="font-medium">{item.name}</span>
                  </div>
                )
              })}
            </div>
          </CardContent>
        </Card>

        {/* Learning Paths */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-slate-900 dark:text-slate-100 mb-6">
            Learning Paths
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {learningPaths.map((path) => (
              <Card key={path.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <div className={`w-3 h-3 rounded-full ${path.color}`}></div>
                        {path.title}
                      </CardTitle>
                      <CardDescription className="mt-2">
                        {path.description}
                      </CardDescription>
                    </div>
                    <Badge variant={path.priority === 'High' ? 'destructive' : path.priority === 'Medium' ? 'default' : 'secondary'}>
                      {path.priority}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Calendar className="h-4 w-4" />
                    {path.duration}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {path.steps.map((step, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <Circle className="h-3 w-3 text-slate-400" />
                        {step}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Learning Phases */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Recommended Learning Sequence
            </CardTitle>
            <CardDescription>
              Follow this phased approach for optimal learning progression
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {phases.map((phase, index) => (
                <div key={index} className="border-l-4 border-blue-500 pl-4">
                  <h3 className="font-semibold text-lg">{phase.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{phase.duration}</p>
                  <ul className="space-y-1">
                    {phase.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center gap-2 text-sm">
                        <Circle className="h-3 w-3 text-slate-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Key Projects */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle>Key Projects to Build</CardTitle>
            <CardDescription>
              Hands-on projects to reinforce your learning and build your portfolio
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((category, index) => (
                <div key={index}>
                  <h3 className="font-semibold text-lg mb-2">{category.category}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">{category.timeframe}</p>
                  <div className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start gap-2 text-sm">
                        <Circle className="h-3 w-3 text-slate-400 mt-1 flex-shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Success Metrics */}
        <Card>
          <CardHeader>
            <CardTitle>Success Metrics</CardTitle>
            <CardDescription>
              Track your progress with these milestones
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Build a responsive website with advanced CSS',
                'Create a React application with state management',
                'Develop a RESTful API with Spring Boot',
                'Deploy a full-stack application to the cloud',
                'Publish a Flutter app (even if just for testing)',
                'Contribute to an open-source project'
              ].map((metric, index) => (
                <div key={index} className="flex items-center gap-3 p-3 border rounded-lg">
                  <Circle className="h-4 w-4 text-slate-400" />
                  <span className="text-sm">{metric}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-12 p-6 bg-slate-100 dark:bg-slate-800 rounded-lg">
          <p className="text-slate-600 dark:text-slate-400">
            <strong>Remember:</strong> Focus on building real projects and understanding core concepts rather than rushing through tutorials. Quality over quantity!
          </p>
        </div>
      </div>
    </div>
  )
}

export default App

