import './styles.css';
// import faqs from './questArray.js';

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Questions data={faqs}/>
    </div>
  );
}

function Questions({data}) {
  return (
    <div className='questions'>
      {data.map((el, i) => (
        <IndivQuestion title={el.title} text={el.text} num={i} />
      ))}
    </div>
  );
}

function IndivQuestion({num, title, text}) {
  return (
    <div className='item'>
      <p className="number">{num}</p>
      <p className="text">{title}</p>
      <p className="icon">-</p>
      <div className="content-box">{text}</div>
    </div>
  );
}