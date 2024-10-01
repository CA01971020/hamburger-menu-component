# hamburger-menu-componentについて
このコンポーネントは、名前の通りハンバーガーメニューとして利用できます。
クリックすることで、全画面を覆うモーダルメニューが表示されます。

## 仕様について
1. function HambBtnのbuttonをクリックすると、setShowがtrueとなり、function hamburgerのreturnに含まれるモーダルメニューが表示されます。
2. IoCloseの親タグであるbuttonをクリックすると、setShowがfalseとなり、モーダルメニューが消えます。

## 使用にあたっての前提条件（環境構築）
- Reactをインストールする必要があります。
- TailwindCSSをインストールし、設定する必要があります。
- 各ライブラリ（コード参照）をimportする必要があります。

## 応用アイデア
- aタグをReact-RouterのLinkタグに変更することができます。（React）
- bg-skyを変更することで背景色が変わります。（TailwindCSS）
- setShow()をfalseにすることでモーダルメニューが閉じます。（React-Hooks）
  - これをaタグやLinkタグに指定することでモーダルメニューを閉じることができます。
