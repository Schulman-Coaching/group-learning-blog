# Group Psychoanalysis Archive

A comprehensive digital archive dedicated to preserving and sharing the writings of Louis Ormont and other pioneering group psychoanalysts. Built with Next.js, TypeScript, and SQLite.

## 🎯 Mission

This platform serves as a central hub for accessing rare and important writings in the field of group psychoanalysis, with a special focus on Louis Ormont's groundbreaking work. It combines a digital library with community features to foster discussion and learning among practitioners and scholars.

## ✨ Features

### 📚 Digital Library
- **Complete Writings Collection**: Access Louis Ormont's major works including "The Group Therapy Experience" and his seminal papers on the bridge technique
- **Multi-Author Archive**: Writings from other influential group psychoanalysts like Irvin Yalom, Wilfred Bion, and more
- **Advanced Search & Filtering**: Find specific concepts, techniques, and writings with powerful search tools
- **Multiple Content Types**: Books, essays, research papers, case studies, lectures, and interviews

### 💬 Community Forum
- **Discussion Categories**: Organized forums for different aspects of group psychoanalysis
- **User Engagement**: Comments, likes, and threaded discussions
- **Professional Networking**: Connect with practitioners worldwide
- **Knowledge Sharing**: Share insights, case studies, and clinical experiences

### 👥 Author Profiles
- **Detailed Biographies**: Learn about the lives and contributions of key figures
- **Complete Bibliographies**: Access all works by each author
- **Historical Context**: Understand the development of group psychoanalysis

### 🎨 Modern Interface
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Accessibility**: Built with accessibility standards in mind
- **Fast Performance**: Optimized for quick loading and smooth interactions

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone [repository-url]
cd group-psychoanalysis-archive

# Install dependencies
npm install

# Set up the database
npm run db:push

# Seed the database with sample data
npm run db:seed

# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

## 📖 Usage

### Exploring Writings
1. Browse the writings library to discover texts by Louis Ormont and other authors
2. Use filters to narrow down by author, type, year, or tags
3. Search for specific concepts or techniques
4. Click on any writing to read the full text

### Community Forum
1. Join discussions by browsing existing forum posts
2. Create new posts to ask questions or share insights
3. Comment on posts to engage with other community members
4. Use categories to organize discussions

### Author Profiles
1. Visit the authors page to learn about key figures in group psychoanalysis
2. Click on individual authors to see their complete works
3. Read biographical information about their contributions

## 🏗️ Technical Architecture

### Frontend
- **Next.js 14**: React framework with App Router
- **TypeScript**: Type-safe development
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Modern icon library

### Backend & Database
- **SQLite**: Lightweight database for development
- **Prisma**: Modern database toolkit
- **NextAuth.js**: Authentication solution

### Key Dependencies
- `next`: React framework
- `@prisma/client`: Database client
- `lucide-react`: Icons
- `date-fns`: Date formatting
- `zod`: Schema validation

## 📊 Database Schema

### Authors
- Complete biographical information
- Nationality, birth/death years
- Profile images and descriptions

### Writings
- Title, content, excerpt
- Type categorization (book, essay, research paper, etc.)
- Publication year
- Tag system for easy categorization
- Author relationships

### Forum System
- Posts with categories and tags
- Comments and threaded discussions
- User likes and engagement
- View tracking

### User Management
- NextAuth.js integration
- User profiles and preferences
- Session management

## 🎨 Styling

The platform uses a sophisticated color scheme with:
- **Primary**: Blue gradient (#3b82f6 to #8b5cf6)
- **Accents**: Purple and indigo tones
- **Background**: Subtle gradients and clean whites
- **Typography**: Modern, readable fonts with proper hierarchy

## 🔍 Search & Discovery

### Search Features
- Full-text search across writing content
- Filter by author, type, year, and tags
- Real-time search suggestions
- Advanced filtering options

### Discovery Tools
- Related content suggestions
- Tag-based exploration
- Author-based browsing
- Chronological organization

## 🤝 Contributing

We welcome contributions to expand the archive:

### Adding New Writings
1. Prepare the text content
2. Add author information if not already present
3. Use the Prisma schema to add new writings
4. Include proper categorization and tags

### Improving the Platform
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is dedicated to preserving and sharing knowledge in the field of group psychoanalysis. The writings and content are made available for educational and research purposes.

## 🙏 Acknowledgments

- **Louis Ormont**: For his pioneering contributions to group psychoanalysis
- **The American Group Psychotherapy Association**: For preserving and promoting group therapy knowledge
- **The Community**: For contributions, discussions, and support

## 📞 Contact

For questions, contributions, or technical support:
- Email: contact@grouppsychoanalysis.org
- Forum: Join our community discussions
- Issues: Report technical issues on GitHub

---

*This archive is dedicated to preserving the legacy of Louis Ormont and making group psychoanalysis knowledge accessible to practitioners, scholars, and students worldwide.*