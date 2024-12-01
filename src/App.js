import './App.css';
import Sidebar from './components/SideBar';
import Navbar from './components/Navbar';
import Profile from './components/Profile';
import CustomerProfile from './components/CustomerProfile';
import ConversationText from './components/ConversationText';
import EscalateButton from './components/EscalateButton';
import Chatbox from './components/ChatBox';
import AskCatura from './components/AskCatura';
import ActionLauncher from './components/ActionLauncher';
import CaseFavorite from './components/CaseFavorite';

function App() {
  return (
    <div>
      <Sidebar />
      <Navbar />
      <Profile />
      <CustomerProfile />
      <ConversationText />
      <EscalateButton />
      <Chatbox />
      <AskCatura />
      <ActionLauncher />
      <CaseFavorite />
    </div>
  );
}

export default App;
