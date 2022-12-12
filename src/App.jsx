import { useState, useEffect } from 'react';
import { Box, FormControl, IconButton, Input, InputLabel } from '@material-ui/core';
import Message from './components/Message';
import { collection, getDocs, addDoc, Timestamp, orderBy, query, } from 'firebase/firestore/lite';
import FlipMove from 'react-flip-move';
import './app.css';
import db from './data/Firebase';
import SendIcon from '@mui/icons-material/Send';

const App = () => {

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [username, setUsername] = useState("");

  // Get a list of messages from your database
  async function getMessages(db) {
    const messagesCol = query(collection(db, 'messages'), orderBy('timestamp', 'desc'));
    const messagesSnapshot = await getDocs(messagesCol);
    setMessages(messagesSnapshot.docs.map(doc => ({ id: doc.id, message: doc.data() })));
  }

  useEffect(() => {
    getMessages(db);
  }, [messages]);

  async function sendMessage(e) {
    e.preventDefault();

    try {
      await addDoc(collection(db, "messages"), {
        message: input,
        username: username,
        timestamp: Timestamp.now()
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setInput('');
  };


  useEffect(() => {
    // run code here
    setUsername(prompt('Please enter your name'));
  }, []); //condition

  return (
    <div className='App'>
      <div className="header">
        <img src="https://www.pngall.com/wp-content/uploads/5/Facebook-Messenger-Logo-PNG-High-Quality-Image.png?"
          alt="fb-messenger-log0"
          style={{
            width: "100px",
            height: "100px"
          }}
        />
        <h1>Hello World 🚀!</h1>
        <h2>Welcome {username}</h2>
      </div>
      <form className='app__form'>
        <FormControl className='app__formControl'>
          <Input
          className='app__input'
            placeholder='Enter a message...'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <IconButton
          className='app__iconButton'
            disabled={!input}
            variant="contained"
            color='primary'
            type='submit'
            onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
        </FormControl>
      </form>
      <FlipMove>
        {
          messages.map(({ id, message }) => (
            <Box key={id}>
              <Message
                username={username}
                message={message}
              />
            </Box>
          ))
        }
      </FlipMove>
    </div>
  );
};

export default App;
