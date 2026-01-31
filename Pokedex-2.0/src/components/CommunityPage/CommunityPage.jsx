import { motion } from "framer-motion";
import Navbar from "../Navbar/Navbar";
import PeopleIcon from "@mui/icons-material/People";
import ForumIcon from "@mui/icons-material/Forum";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import "./CommunityPage.css";

export default function CommunityPage() {
  const communityFeatures = [
    {
      icon: <PeopleIcon fontSize="large" />,
      title: "Join Trainers",
      description: "Connect with millions of Pokemon trainers worldwide",
      color: "#C61B0A",
    },
    {
      icon: <ForumIcon fontSize="large" />,
      title: "Discuss Strategies",
      description: "Share tips, tricks, and battle strategies",
      color: "#6390F0",
    },
    {
      icon: <EmojiEventsIcon fontSize="large" />,
      title: "Compete",
      description: "Participate in tournaments and events",
      color: "#F7D02C",
    },
    {
      icon: <CatchingPokemonIcon fontSize="large" />,
      title: "Trade Pokemon",
      description: "Exchange Pokemon with trainers around the globe",
      color: "#7AC74C",
    },
  ];

  const recentPosts = [
    {
      user: "Ash_Trainer99",
      title: "Best team composition for beginners?",
      replies: 24,
      time: "2 hours ago",
    },
    {
      user: "Misty_Water_Master",
      title: "Water-type Pokemon tournament this weekend!",
      replies: 47,
      time: "5 hours ago",
    },
    {
      user: "Brock_Rock_Solid",
      title: "Guide: Training your first Rock-type",
      replies: 89,
      time: "1 day ago",
    },
    {
      user: "Pokemon_Professor",
      title: "New Pokemon discoveries discussion",
      replies: 156,
      time: "2 days ago",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <>
      <Navbar />
      <section id="community-container">
        <div className="community-hero">
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="community-hero-content"
          >
            <h1 className="community-title">Pokemon Community</h1>
            <p className="community-subtitle">
              Join the largest Pokemon trainer community in the world
            </p>
          </motion.div>
        </div>

        <motion.div
          className="community-features"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {communityFeatures.map((feature, index) => (
            <motion.div
              key={index}
              className="feature-card"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -10 }}
              style={{ borderTop: `4px solid ${feature.color}` }}
            >
              <div className="feature-icon" style={{ color: feature.color }}>
                {feature.icon}
              </div>
              <h3 className="feature-title">{feature.title}</h3>
              <p className="feature-description">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="community-content">
          <motion.div
            className="recent-discussions"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="section-title">Recent Discussions</h2>
            <div className="discussion-list">
              {recentPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="discussion-item"
                  whileHover={{ backgroundColor: "#f8f9fa", scale: 1.02 }}
                >
                  <div className="discussion-info">
                    <h4 className="discussion-title">{post.title}</h4>
                    <p className="discussion-meta">
                      by <span className="username">{post.user}</span> •{" "}
                      {post.time}
                    </p>
                  </div>
                  <div className="discussion-replies">
                    <ForumIcon fontSize="small" />
                    <span>{post.replies}</span>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.button
              className="btn-view-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Discussions
            </motion.button>
          </motion.div>

          <motion.div
            className="community-stats"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="section-title">Community Stats</h2>
            <div className="stats-container">
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="stat-number">2.5M+</h3>
                <p className="stat-label">Active Trainers</p>
              </motion.div>
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="stat-number">50K+</h3>
                <p className="stat-label">Daily Posts</p>
              </motion.div>
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="stat-number">1M+</h3>
                <p className="stat-label">Pokemon Traded</p>
              </motion.div>
              <motion.div
                className="stat-item"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <h3 className="stat-number">10K+</h3>
                <p className="stat-label">Events Monthly</p>
              </motion.div>
            </div>

            <div className="join-community">
              <h3 className="join-title">Ready to Join?</h3>
              <p className="join-description">
                Become part of our amazing community today!
              </p>
              <motion.button
                className="btn-join"
                whileHover={{ scale: 1.05, backgroundColor: "#BF0606" }}
                whileTap={{ scale: 0.95 }}
              >
                Join Community
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
