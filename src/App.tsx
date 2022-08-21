import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

type test = {
  id: number;
  name: string;
  check: boolean;
};

const data: test[] = [
  { id: 1, name: "りんご", check: false },
  { id: 2, name: "みかん", check: false },
  { id: 3, name: "ばなな", check: false },
  { id: 4, name: "ぶどう", check: false },
  { id: 5, name: "なし", check: false },
  { id: 6, name: "もも", check: false },
];

function App() {
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(new Map<string, string>([]));

  const changehandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      setChecked((prev) => {
        //元のに変更を加えたくないので、クローンを作る
        const clone = new Map(prev);
        //お試しなので、キーと内容を同じにする
        clone.set(event.target.value, event.target.value);
        //setter関数へ返す
        return clone;
      });
    } else {
      setChecked((prev) => {
        //元のに変更を加えたくないので、クローンを作る
        const clone = new Map(prev);
        //クローンに対して、チェックを外した内容を削除する
        clone.delete(event.target.value);
        //setter関数へ返す
        return clone;
      });
    }
  };

  return (
    <div className='App'>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src='/vite.svg' className='logo' alt='Vite logo' />
        </a>
        <a href='https://reactjs.org' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
      <ul>
        現在選択されている値：
        <b>
          {[...checked.keys()].map((key, index) => (
            <div key={index}>{key}</div>
          ))}
        </b>
        {data.map((item, index) => (
          <li key={index}>
            <input
              type='checkbox'
              value={item.name}
              onChange={changehandler}></input>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
