import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './components/Layout/Main';
import { children } from 'react';
import Topics from './components/Topics/Topics';
import Statistics from './components/Statistics/Statistics';
import Blog from './components/Blog/Blog';
import Quiz from './components/Quiz/Quiz';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      
      children: [
        {
          path: '/',
          loader: async ()=> {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Topics></Topics>
        },
        {
          path: '/quiz/:topicid',
          loader: async ({params})=> {
            return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicid}`);
          },
          element: <Quiz></Quiz>
        },
        {
          path: 'statistics',
          loader: async ()=> {
            return fetch('https://openapi.programming-hero.com/api/quiz');
          },
          element: <Statistics></Statistics>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        },

      ]
    },
    { path: '*', element: <div>This is not found</div> },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}


// 002A24
// 97F9E3
export default App;
