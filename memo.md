## マークダウンエディタ概要
- テキスト入力機能
- マークダウンのリアルタイムプレビュー機能
- テキストの保存と復元機能

### 画面
- エディタ画面
  - テキストの入力
  - リアルタイムプレビュー
  - テキストの保存

- 履歴画面
  - 保存したテキストの一覧表示
  - テキストの復元

### 使用技術
- styled-components
  - CSSライブラリ
  - styled.(HTMLタグ名)で生成したいHTMLタグを指定して、その後続く``内にCSSを記述すると、そのコンポーネントにスタイルが適用される。
```
const Header = styled.h1`
  color: red;
`
```

- useState
  - [React公式リンク](https://ja.reactjs.org/docs/hooks-state.html
  - React内で状態を管理するための機能。今回のマークダウンエディタでは、「テキストエリアで入力されたテキスト情報」を管理する。
  - ```const [値, 値をセットする関数] = useState<扱う状態の型>(初期値)```
  - useState に初期値を渡すと、初回レンダリング時には初期値が、以降は「値をセットする関数」によって更新された値が取得できる。
  - useStateが変更されるごとに、コンポーネントが再レンダリングされる。
  
- Web Storage
  - ブラウザに実装されているキーバリューストア
  - [Web Storage API](https://developer.mozilla.org/ja/docs/Web/API/Web_Storage_API)
  - localStorage は永続的にデータを保存する。 ※localStorageは容量の上限がある（Chromeは5MB）等あるので、大量のデータは保存しないようにする。

- IndexedDB
  - ブラウザに実装されているデータを保存するデータベースの機能
  - key-valueストアのDB
  - [IndexedDB API](https://developer.mozilla.org/ja/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB)

- カスタムフック
  - [独自フックの作成](https://ja.reactjs.org/docs/hooks-custom.html)

- useEffect
  - [副作用フック](https://ja.reactjs.org/docs/hooks-overview.html#effect-hook)
```javascript
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```
  
- Dexie
  - ```npm i dexie```
  - IndexedDBをラップしたライブラリ [Dexie](https://dexie.org/)

### 非同期処理
- コールバック
  - xhr という変数の onload と onerror に関数（function）を渡している
  - 正常に処理されていれば onload にセットした関数が実行され、何らかの異常が発生した場合は onerror にセットした関数が実行される。
```javascript
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://example.com/", true);
xhr.onload = function (e) {
  if (xhr.readyState === 4) {
    console.log(xhr.statusText);
  }
};
xhr.onerror = function (e) {
  console.error(xhr.statusText);
};
xhr.send(null);
```

- Promise
  - Promise: 非同期処理を扱いやすくするためのクラス。
  - 非同期処理が完了すると then に渡した関数を実行, エラーになった場合は catch に渡した関数を実行。
  - [Promiseを使う](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises)
```javascript
fetch('https://example.com/')
  .then((response) => {
    console.log(response.status);
  })
  .catch((err) => {
    console.error(err);
 });
```

- async/await
  - async/await: Promise のシンタックスシュガー（糖衣構文）で、実際にやっている処理は Promise と同じ。
  - 非同期処理が完了すると then に渡した関数を実行, エラーになった場合は catch に渡した関数を実行。
  - [非同期関数: sync function 宣言](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Using_promises)
```javascript
async () => {
  try {
    const response = await fetch('https://example.com/')
    console.log(response.status);
  } catch (err) {
    console.error(err);
  }
}
```
