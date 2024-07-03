import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';

const url = 'https://zillow-com1.p.rapidapi.com/zestimate?address=9%20grandview%20road%20bow%20nh';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '7aec46f57dmshe6448bbc1b6e213p17cf3fjsncd23c858fdc6',
        'x-rapidapi-host': 'zillow-com1.p.rapidapi.com'
    }
};

async function fetchZestimate() {
    try {
        const response = await fetch(url, options);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        console.log(result);
        return result;
    } catch (error) {
        console.error('Error:', error.message);
    }
}

// fetchZestimate();


function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h2>Welcome to My Mobile-Friendly React Website</h2>
        <p>This website is designed with mobile-first principles.</p>
      </main>
      <Footer />
    </div>
  );
}

export default App;