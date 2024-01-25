import { useState } from 'react';
import './styles.css';
import faqs from './questArray.js';


export default function App() {
  return (
    <div>
      <Questions data={faqs}/>
    </div>
  );
}

function Questions({data}) {
  const [curreOpen, setCurreOpen] = useState(null);

  return (
    <div className='questions'>
      {data.map((el, i) => (
        <IndivQuestion 
          curreOpen={curreOpen} 
          onOpen={setCurreOpen} 
          title={el.title} 
          num={i} 
          key={el.title}
        >{el.text}
        </IndivQuestion>
      ))}

      <IndivQuestion 
          curreOpen={curreOpen} 
          onOpen={setCurreOpen} 
          title='Test 1' 
          num={22} 
        >
          <p> Allows React developers to:</p>
            <ul>
              <li>Break up UI into components</li>
              <li>Make components reusable</li>
              <li>Place state efficiently</li>
            </ul>   
      </IndivQuestion>  

    </div>
  );
}

function IndivQuestion({num, title, curreOpen, onOpen, children}) {
  const isOpen = num === curreOpen;

  // const[isOpen, setIsOpen] = useState(false);

function handleToggle () {
  onOpen(isOpen ? null : num);
  // setIsOpen((isOpen) => ! isOpen);
}

  return (
    <div className='item' onClick={handleToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="text">{title}</p>
      <p className="icon" >{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}