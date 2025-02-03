# 🗓 Timetable Generator

A modern web application built with React and TypeScript that automatically generates optimal course timetables for educational institutions.

![Timetable Generator](https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&q=80&w=2068)

## ✨ Features

- **Course Management**
  - Add courses with instructor names and duration
  - Remove courses from the list
  - View all added courses in a clean interface

- **Automatic Timetable Generation**
  - Intelligent scheduling algorithm
  - Avoids time slot conflicts
  - Optimizes course distribution
  - Supports multiple course durations

- **Interactive UI**
  - Responsive design for all devices
  - Beautiful gradient background with particle effects
  - Clean and intuitive interface
  - Real-time updates

## 🚀 Tech Stack

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Build Tool**: Vite
- **Development**: ESLint, TypeScript ESLint

## 🛠 Installation

1. Clone the repository:
```bash
git clone <repository-url>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## 💻 Usage

1. **Adding Courses**
   - Click on "Add New Course"
   - Fill in the course details:
     - Course Name
     - Instructor Name
     - Duration (in hours)
   - Click "Add Course"

2. **Generating Timetable**
   - Add all required courses
   - Click "Generate Timetable"
   - View the generated schedule in the grid

3. **Managing Courses**
   - Remove courses using the trash icon
   - Add more courses as needed
   - Regenerate timetable after modifications

## 🎯 Project Structure

```
src/
├── components/          # React components
│   ├── CourseForm.tsx  # Course input form
│   ├── CourseList.tsx  # List of added courses
│   └── TimetableGrid.tsx # Timetable display grid
├── utils/
│   └── timetableGenerator.ts # Scheduling algorithm
├── types.ts            # TypeScript interfaces
└── App.tsx            # Main application component
```

## ⚙️ Configuration

The application uses several configuration files:

- `vite.config.ts` - Vite configuration
- `tsconfig.json` - TypeScript configuration
- `tailwind.config.js` - Tailwind CSS configuration
- `eslint.config.js` - ESLint configuration

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Icons provided by [Lucide](https://lucide.dev/)
- Styling framework by [Tailwind CSS](https://tailwindcss.com/)
- Built with [React](https://reactjs.org/) and [TypeScript](https://www.typescriptlang.org/)
