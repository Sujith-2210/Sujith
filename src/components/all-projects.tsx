
import { ExternalLink, Code2 } from "lucide-react"
import { Link } from "react-router-dom";

const projects = [
  {
    title: "AI Speech Trainer Agent",
    category: "AI/ML",
    description:
      "Multimodal public speaking coach analyzing facial expressions, voice, and content from user-recorded videos using multiple AI agents.",
    skills: ["Generative AI", "Python", "FastAPI", "OpenCV", "DeepFace"],
    featured: true,
  },
  {
    title: "Enhanced Smart Ring for Women's Safety",
    category: "Patent Holder",
    description:
      "Deep learning model classifying user state as Normal, HRR, or Fear of Attack based on 10,000 biometric records. Patent filed for innovation.",
    skills: ["Deep Learning", "Python", "Streamlit", "MLP", "Biometric Data"],
    featured: true,
  },
  {
    title: "Human Pose Estimation System",
    category: "Computer Vision",
    description:
      "Real-time human pose detection using MediaPipe to track full-body landmarks and classify postures for fitness form correction.",
    skills: ["Python", "MediaPipe", "OpenCV", "Machine Learning"],
    featured: true,
  },
  {
    title: "AI Agent: Blog URL to Podcast Generator",
    category: "AI/ML",
    description: "Converts blog articles into engaging podcasts using generative AI and text-to-speech synthesis.",
    skills: ["Generative AI", "Python", "LLMs"],
  },
  {
    title: "Cardiovascular Disease Prediction",
    category: "Healthcare AI",
    description:
      "ML models using Logistic Regression, Decision Tree, and Random Forest to predict heart disease risk with high accuracy metrics.",
    skills: ["Python", "Scikit-learn", "Data Analysis", "ML Models"],
  },
  {
    title: "AI-Based Speech Therapy Tool",
    category: "Healthcare AI",
    description:
      "Real-time audio feedback and analysis tool for users with speech disorders featuring speech-to-text and pitch detection.",
    skills: ["Python", "Streamlit", "SpeechRecognition", "Librosa"],
  },
  {
    title: "Customer Churn Prediction",
    category: "ML Pipeline",
    description:
      "Complete ML pipeline with web application for predicting customer churn, featuring analytics, interpretability, and batch predictions.",
    skills: ["Python", "Flask", "SHAP", "ML Models"],
  },
  {
    title: "AI YouTube Video Summarizer",
    category: "AI/ML",
    description:
      "Intelligent tool that summarizes YouTube videos using generative AI to extract key insights and main points.",
    skills: ["Generative AI", "Python", "LLMs"],
  },
  {
    title: "Email Spam Detection System",
    category: "ML",
    description: "Machine learning system for detecting and filtering spam emails with high precision and recall.",
    skills: ["Python", "ML Models", "NLP"],
  },
  {
    title: "Fun Facts Generator",
    category: "Web App",
    description:
      "Interactive web application providing fascinating facts across multiple categories with modern UI and smooth transitions.",
    skills: ["Generative AI", "Python", "Prompt Engineering"],
  },
  {
    title: "House Price Prediction System",
    category: "ML",
    description: "Regression models predicting real estate prices based on property features and market data.",
    skills: ["Python", "ML Models", "Data Analysis"],
  },
  {
    title: "Image Classification using CNN",
    category: "Deep Learning",
    description:
      "Convolutional Neural Network trained on MNIST dataset achieving strong classification accuracy with real-time prediction UI.",
    skills: ["Python", "TensorFlow", "CNNs", "Keras"],
  },
  {
    title: "IntelliTrip Travel Planner Pro",
    category: "AI/ML",
    description: "Intelligent travel planning application using generative AI for personalized itinerary suggestions.",
    skills: ["Generative AI", "Python", "Prompt Engineering"],
  },
  {
    title: "Kits-EDU College ERP",
    category: "Web Development",
    description:
      "College management system allowing faculty to upload materials, track attendance, and manage student-teacher interactions.",
    skills: ["JavaScript", "MySQL", "Python", "Flask", "HTML", "CSS"],
  },
  {
    title: "Mistral AI Model Chatbot",
    category: "AI/ML",
    description: "Conversational AI chatbot application powered by Mistral LLM with advanced reasoning capabilities.",
    skills: ["Generative AI", "Python", "LLMs"],
  },
  {
    title: "Movies Recommendation System",
    category: "ML",
    description: "Collaborative filtering system recommending movies based on user preferences and viewing history.",
    skills: ["Python", "ML Models", "Recommendation Systems"],
  },
  {
    title: "Smart Research & Learning Assistant",
    category: "AI",
    description: "AI-powered assistant for research and learning using multiple agents and cloud foundations.",
    skills: ["AI Agents", "Deep Learning", "Streamlit", "Cloud"],
  },
  {
    title: "Spotify Songs' Genre Segmentation",
    category: "ML",
    description: "Clustering songs based on audio features using K-Means and PCA for dimensionality reduction.",
    skills: ["Python", "K-Means", "Data Analysis"],
  },
  {
    title: "Stock Price Prediction",
    category: "ML",
    description: "Time-series forecasting model predicting stock prices using historical market data.",
    skills: ["Python", "ML Models", "Time Series"],
  },
  {
    title: "Transactional Fraud Detection",
    category: "ML",
    description: "Machine learning system detecting fraudulent transactions in real-time with high accuracy.",
    skills: ["Python", "ML Models", "Anomaly Detection"],
  },
  {
    title: "Human vs AI Agent XOX Game",
    category: "Game AI",
    description: "Interactive Tic-Tac-Toe game featuring an intelligent AI opponent using game theory.",
    skills: ["Python", "Game AI", "Algorithms"],
  },
]

export default function AllProjects() {
  const featuredProjects = projects.filter((p) => p.featured)
  const otherProjects = projects.filter((p) => !p.featured)

  return (
    <section className="relative z-10 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">
            <span className="text-foreground">All Projects</span>
            <span className="block text-primary">20+ AI/ML & Full-Stack Solutions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Exploring the frontiers of AI, from deep learning to robotics and intelligent systems.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-foreground mb-8">Featured Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {featuredProjects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-primary/30 liquid-glass hover:border-primary transition-all duration-200 hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold">
                    {project.category}
                  </span>
                  <Code2 className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <span key={skill} className="text-xs px-2 py-1 rounded bg-secondary/20 text-secondary">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8">Other Notable Projects</h3>
          <div className="grid md:grid-cols-2 gap-4">
            {otherProjects.map((project, index) => (
              <div
                key={index}
                className="p-4 rounded-lg border border-border liquid-glass hover:border-primary/50 transition-colors duration-200"
              >
                <div className="flex items-start justify-between mb-3">
                  <span className="px-2 py-1 rounded text-xs font-bold bg-secondary/20 text-secondary">
                    {project.category}
                  </span>
                </div>
                <h4 className="text-lg font-bold text-foreground mb-2">{project.title}</h4>
                <p className="text-muted-foreground text-sm mb-3">{project.description}</p>
                <div className="flex flex-wrap gap-1">
                  {project.skills.slice(0, 3).map((skill) => (
                    <span key={skill} className="text-xs px-1.5 py-0.5 rounded bg-primary/10 text-primary/80">
                      {skill}
                    </span>
                  ))}
                  {project.skills.length > 3 && (
                    <span className="text-xs px-1.5 py-0.5 text-muted-foreground">+{project.skills.length - 3}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 p-8 rounded-xl border border-border bg-gradient-to-r from-primary/10 to-secondary/10 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">Interested in Collaboration?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, exciting technologies, and unique opportunities.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity duration-200 font-medium"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
