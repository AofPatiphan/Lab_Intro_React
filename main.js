// // Lab 2.1
// - ให้สร้างตัวแปรชื่อ fullName เก็บชื่อจริง นามสกุลของตัวเอง
// - ให้สร้างตัวแปรชื่อ birthYear เก็บปีที่เกิดของตัวเอง
// - ให้ render หน้า web โดยใช้ JSX ดังนี้
//     - แสดงชื่อ fullName ใน tag <h1>
//     - แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)

// const fullName = "Patiphan Manawanich";
// const birthYear = 1995;

// const div = (
//   <div>
//     <h1>{fullName}</h1>
//     <p>{2021 - birthYear}</p>
//   </div>
// );
// ReactDOM.render(div, document.getElementById("root"));

// // Lab 2.2
// - ให้สร้างตัวแปรชื่อ height และ weight เก็บข้อมูลส่วนสูงและน้ำหนักตามลำดับ
// - ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI
// - ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h1>

// const height = 170;
// const weight = 58;

// const calcBMI = () => {
//   return weight / (height / 100) ** 2;
// };

// // วิธีเรียกใช้ฟังก์ชั่น
// const div = <h1>{calcBMI(weight, height).toFixed(2)}</h1>;

// ReactDOM.render(div, document.getElementById("root"));

// // Lab 2.3
// - ให้สร้าง tag <label> และ <input>
// - tag <input> มี class ชื่อ username มี id คือ username และมี attribute ชื่อ name ให้มีค่าเท่ากับ username
// - tag <label> ให้ใส่ข้อความ Username และมี attribute ชื่อ for ให้มีค่าเท่ากับ id ของ tag <input>
// - ให้ render หน้า web เพื่อแสดง tag ทั้งสองในแบบ JSX

// const div = (
//   <div>
//     <label htmlFor="username">username</label>
//     <input className="username" id="username" name="username"></input>
//   </div>
// );
// ReactDOM.render(div, document.getElementById("root"));

// // Lab 2.4
// โค้ดด้านล่างทำงานได้หรือไม่ เพราะอะไร

// function App() {
//   return (
//     <h1>Welcome to Thailand</h1>
//     <h2>Land of smile</h2>
//   );
// }
// // ไม่มี root element

// // Lab 2.5
// โค้ดด้านล่างทำงานได้หรือไม่ เพราะอะไร

// function App() {
//   return (
//     <div>
//       <span>My name is John.</span>
//       <br>
//       <span>I'm 27 years old.</span>
//     </div>
//   );
// }
// const div = <div>{App()}</div>;
// ReactDOM.render(div, document.getElementById("root")); // ไม่ได้เพราะ tag br ไม่ได้ปิด

// // Lab 2.6
// - ให้สร้างตัวแปร 6 ตัวเก็บค่าอะไรก็ได้ แต่จะต้องมี data type เป็น String Number Boolean null undefined และ object
// - ให้ render ตัวแปรทั้ง 6 ออกมาในหน้า web

// const str = "Hello";
// const num = 26;
// const boolean = true;
// const isNull = null;
// const isUndefined = undefined;
// const obj = { name: "John" };

// const div = (
//   <div>
//     <p>{str}</p>
//     <p>{num}</p>
//     <p>{boolean}</p>
//     <p>{isNull}</p>
//     <p>{isUndefined}</p>
//     <p>{obj.name}</p>
//   </div>
// );

// ReactDOM.render(div, document.getElementById("root"));

// Lab 3.1
// - ให้สร้าง Component ชื่อ Profile
// - ใน Component ประกอบด้วย
//     - tag <h1> แสดงชื่อ John Doe
//     - tag <h2> แสดงอายุมีค่าเท่ากับ 27
// - ให้ render Profile ในหน้า web

// const Profile = () => {
//   return (
//     <div>
//       <h1>John Doe</h1>
//       <h2>27</h2>
//     </div>
//   );
// };

// ReactDOM.render(<Profile />, document.getElementById("root"));

// // Lab 3.3
// - ให้สร้าง Component ชื่อ ProductItem
// - ใน Component แสดงข้อมูลดังนี้
//     - tag <h1> แสดงชื่อ product
//     - tag <h2> แสดง price ของ product
//     - tag <p> แสดง description ของ product
// - ชื่อ price และ description ของ product ถูกส่งมาทาง props
// - ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ทั้งสามเป็นค่าอะไรก็ได้

// const Price = (props) => {
//   return <h2>{props.price}</h2>;
// };

// const Descript = (props) => {
//   return <p>{props.descript}</p>;
// };

// const ProductItem = () => {
//   return (
//     <div>
//       <h1>Shirt</h1>
//       <Price price="$50" />
//       <Descript descript="This is a T-shirt" />
//     </div>
//   );
// };

// ReactDOM.render(<ProductItem />, document.getElementById("root"));

// // Lab 3.4
// - จาก Lab ที่แล้วให้ส่ง props เข้าไปได้ค่าเดียว ชื่อ product โดยที่ props ตัวนี้จะมี data type เป็น Object
// - ให้แก้ไข Component ProductItem ตาม props ที่เปลี่ยนไป
// - ให้ render ProductItem ในหน้า web โดยให้ส่งค่า props ตามเงื่อนไขที่กำหนด

// const Product = (props) => {
//   return (
//     <div>
//       <h1>{props.item}</h1>
//       <h2>{props.price}</h2>
//       <p>{props.descript}</p>
//     </div>
//   );
// };

// const ProductItem = () => {
//   return (
//     <div>
//       <Product item="T-Shirt" price="$50" descript="This is a T-Shirt" />
//       <Product item="Shoe" price="$150" descript="This is a Shoe" />
//     </div>
//   );
// };

// ReactDOM.render(<ProductItem />, document.getElementById("root"));
