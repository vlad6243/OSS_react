import './App.css';
import Chess from './components/Chessboard'
import ListItems from './components/ListItems'
import PageItem from './components/PageItem'
import ProfilePage from './components/ProfilePage'

function App() {
  const str = "block";
  const chess = [
      {id:8, name:'a'},
      {id:7, name:'b'},
      {id:6, name:'c'},
      {id:5, name:'d'},
      {id:4, name:'e'},
      {id:3, name:'f'},
      {id:2, name:'g'},
      {id:1, name:'h'},
      ];
  const items = [
      {id:1, name:'Iphone 12 mini', img:'https://i8.rozetka.ua/goods/20300010/apple_iphone_12_mini_64gb_black_images_20300010546.jpg', cost:699, description:'new super smaller Iphone 12', amount:5},
      {id:2, name:'Iphone 12', img:'https://i2.rozetka.ua/goods/20299422/245162131_images_20299422206.jpg', cost:799, description:'new Iphone 12', amount:10},
      {id:3, name:'Iphone 12 pro', img:'https://i2.rozetka.ua/goods/20300847/apple_iphone_12_pro_max_256gb_pacific_blue_images_20300847726.jpg', cost:999, description:'new super Iphone 12 pro', amount:15},
      {id:4, name:'Iphone 12 pro max', img:'https://i2.rozetka.ua/goods/20300847/apple_iphone_12_pro_max_256gb_pacific_blue_images_20300847726.jpg', cost:1099, description:'new super Iphone 12 pro max', amount:3}
  ];
  const profile = [
      {
          id:1,
          fName:'Vlad',
          lName:'Abakumov',
          age:21,
          phone:'+38032134223',
          email:'vlad@gmail',
          img:'https://userstyles.org/style_screenshots/158467_after.jpeg'
      }
  ];

  return (
    <div className="App">
        {/*<div id="block" className={str}>*/}
        {/*    <h1>Текст для класса 'Блок'</h1>*/}
        {/*</div>*/}
        {/* <Chess chessArray={chess}/> */}
        {/*<ListItems itemsArray={items}/>*/}
        {/*<PageItem item = {items[0]} />*/}
        {/* <ProfilePage profile={profile[0]}/> */}
    </div>
  );
}

export default App;
