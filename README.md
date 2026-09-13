🚀 Dev Stack Builder
Dev Stack Builder is a React + TypeScript web application that helps developers explore different technologies and build their own personalized technology stack.
Users can browse technologies, view information such as category, difficulty, rating, and badges, and add technologies to their personal stack.
________________________________________
🌐 Live Demo
Add your deployed website URL here:
https://dulcet-hotteok-0c3f09.netlify.app/
__
✨ Features
•	🧑‍💻 Browse different technologies
•	📚 View technology categories
•	⭐ View technology ratings
•	📊 See difficulty levels
•	🏷️ Display technology badges
•	➕ Add technologies to your stack
•	❌ Remove technologies from your stack
•	🗑️ Remove all technologies from the stack
•	🚫 Prevent duplicate technologies
•	📱 Responsive design
•	🎨 Styled with Tailwind CSS and DaisyUI
•	⚡ Built with React and TypeScript
•	📦 Technology data loaded from JSON
________________________________________
🛠️ Technologies Used
Technology	Purpose
React	Building the user interface
TypeScript	Type safety
Tailwind CSS	Styling
DaisyUI	UI components
Vite	Development and build tool
JSON	Technology data
________________________________________
📂 Project Structure
project-root/
│
├── public/
│   └── technologies.json
│
├── src/
│   │
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Footer.tsx
│   │   │
│   │   ├── Technologies/
│   │   │   └── Technologies.tsx
│   │   │
│   │   └── YourStack/
│   │       └── YourStack.tsx
│   │
│   └── types/
│       └── technologies.ts
│

________________________________________
📋 Technology Data
The technology information is stored in:
public/technologies.json
Each technology contains:
{
  "id": 1,
  "name": "React",
  "category": "Frontend",
  "description": "A JavaScript library for building user interfaces.",
  "icon": "image-url",
  "rating": 4.8,
  "difficulty": "Intermediate",
  "badge": "Popular"
}
________________________________________
⚙️ Installation
1. Clone the repository
git clone https://github.com/shampa-a/a5-dream-devstack
2. Go to the project directory
cd dev-stack-builder
3. Install dependencies
npm install
4. Start the development server
npm run dev
The application will usually be available at:
http://localhost:5173
________________________________________
🏗️ Build for Production
Create a production build:
npm run build
Preview the production build:
npm run preview
________________________________________
🧠 React Concepts Used
This project practices several important React concepts:
•	Components
•	Props
•	State management with useState
•	use() for Promise data
•	Suspense
•	Event handling
•	Conditional rendering
•	Array methods
•	TypeScript interfaces
•	Component communication
•	Data rendering with .map()
Example:
const [stack, setStack] = useState<Technology[]>([]);
Adding a technology:
setStack((previousStack) => [
  ...previousStack,
  technology,
]);
Removing a technology:
setStack((previousStack) =>
  previousStack.filter(
    (technology) => technology.id !== id
  )
);
_
📱 Responsive Design
The project uses Tailwind CSS responsive utilities.
For example:
<div className="grid md:grid-cols-3 gap-6">
This creates:
•	📱 1 column on small screens
•	💻 3 columns on medium and larger screens
________________________________________
🔮 Future Improvements
Possible future features:
•	🔍 Search technologies
•	🗂️ Filter by category
•	⭐ Sort by rating
•	🌙 Dark mode
•	💾 Save stack to local storage
•	📊 Stack statistics
•	🔐 User authentication
•	📤 Share your stack
•	🔗 Technology documentation links
•	🚀 Deploy the application
________________________________________
👨‍💻 Author
Your Name Aniz Fatema
•	GitHub: https://github.com/shampa-a/
_____________________________________
📄 License
This project is created for learning and educational purposes.


Questions and Answers:

i)What is JSX in React?
Answer: JSX (JavaScript XML) is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript.
JSX makes it easier to describe the UI (user interface) that a React component should display.

ii) What is the difference between props and state?
Answer: Props are data passed from a parent component to a child component. They are read-only.
State is data managed inside a component and can change over time.
Props → Parent gives data to Child
State → Component manages its own changing data

iii)What does the useState hook do, and where did you use it in this project?
Answer: useState allows a React component to store and update data.
For example:
const [stack, setStack] = useState([]);
In the project, I used useState to manage data that changes during user interaction, such as the selected/added items in the stack.
When I call:
setStack(newStack);
React updates the state and re-renders the component with the new data.

iv) What does the useEffect hook do, and why did you need it to load the JSON data?
Answer: useEffect is used to perform side effects in a React component, such as fetching data, loading JSON, or interacting with external systems.
_______________________________________
v) Why does every item in a .map() list need a unique key prop?
Answer:React uses the key to identify each item in a list.
The key helps React understand which items were added, removed, or changed, so it can update the UI efficiently.

vi) What is conditional rendering? Show one place you used it.
Answer:Conditional rendering means displaying different UI depending on a condition.

vii)How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
Answer:A parent sends data to a child using props.
