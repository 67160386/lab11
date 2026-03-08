import "./App.css";

// Component 1: Header
function Header() {
  return (
    <header
      style={{ backgroundColor: "#0066cc", color: "white", padding: "20px" }}
    >
      <h1>🎓 ระบบการศึกษา</h1>
    </header>
  );
}

// Component 2: MainContent
function MainContent() {
  return (
    <main style={{ padding: "20px" }}>
      <h2>ยินดีต้อนรับ</h2>
      <p>นี่คือแอปพลิเคชัน React แรกของเรา</p>
    </main>
  );
}

// Component 3: Footer
const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#333",
        color: "white",
        padding: "10px",
        textAlign: "center",
      }}
    >
      <p>© 2024 All Rights Reserved</p>
    </footer>
  );
};

// Greeting Component - รับ Props
function Greeting({ name, age }) {
  return (
    <div
      style={{ padding: "10px", margin: "10px 0", border: "1px solid #ddd" }}
    >
      <h3>สวัสดี {name}! 👋</h3>
      <p>อายุ: {age} ปี</p>
    </div>
  );
}

// ProductCard Component
function ProductCard({ productName, price, inStock }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#333",
        width: "200px",
      }}
    >
      <h3>📦 {productName}</h3>
      <p style={{ fontSize: "20px", color: "#e74c3c" }}>฿ {price}</p>
      <p>สถานะ: {inStock ? "มีสินค้า" : "หมด"}</p>
      <button
        style={{
          padding: "10px 20px",
          backgroundColor: "#0066cc",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        ซื้อเลย
      </button>
    </div>
  );
}

// StudentCard Component
function StudentCard({ id, name, grade, score }) {
  return (
    <tr>
      <td
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        {id}
      </td>
      <td style={{ padding: "10px", border: "1px solid #ddd" }}>{name}</td>
      <td
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        {score}
      </td>
      <td
        style={{
          padding: "10px",
          border: "1px solid #ddd",
          textAlign: "center",
        }}
      >
        {grade}
      </td>
    </tr>
  );
}

// FruitList Component
function FruitList() {
  const fruits = ["🍎 แอปเปิล", "🍌 กล้วย", "🍊 ส้ม", "🍉 แตงโม", "🥝 กีวี"];

  return (
    <section style={{ padding: "20px" }}>
      <h2>🍎 ผลไม้ยอดนิยม</h2>
      <ul>
        {fruits.map((fruit, index) => (
          <li
            key={index}
            style={{ padding: "8px", margin: "5px 0", fontSize: "18px" }}
          >
            {fruit}
          </li>
        ))}
      </ul>
    </section>
  );
}

// Challenge 1: สร้าง CourseCard Component
function CourseCard({ code, name, credits, teacher }) {
  return (
    <div
      style={{
        border: "2px solid #0066cc",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px",
        backgroundColor: "#333",
        width: "250px",
      }}
    >
      <h3>📚 {name}</h3>
      <p>
        <strong>รหัส:</strong> {code}
      </p>
      <p>
        <strong>หน่วยกิต:</strong> {credits}
      </p>
      <p>
        <strong>อาจารย์:</strong> {teacher}
      </p>
    </div>
  );
}

// Challenge 2: สร้าง Comment Section
function CommentCard({ author, message, date }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px 0",
        borderRadius: "4px",
        backgroundColor: "#333",
      }}
    >
      <strong>{author}</strong>{" "}
      <span style={{ color: "#999", fontSize: "12px" }}>({date})</span>
      <p>{message}</p>
    </div>
  );
}

// Component หลัก
export default function App() {
  // ข้อมูลนิสิต
  const students = [
    { id: 1, name: "สมชาย", score: 95, grade: "A" },
    { id: 2, name: "สมหญิง", score: 88, grade: "B+" },
    { id: 3, name: "วิชัย", score: 92, grade: "A" },
    { id: 4, name: "นิดา", score: 75, grade: "C+" },
    { id: 5, name: "อรุณ", score: 85, grade: "B" },
  ];

  // Challenge 1: สร้าง CourseCard Component
  // ข้อมูลอาจารย์
  const courses = [
    { code: "001", name: "React Basics", credits: 3, teacher: "อ.สมชาย" },
    { code: "002", name: "JavaScript", credits: 3, teacher: "อ.สมหญิง" },
    { code: "003", name: "CSS Mastery", credits: 2, teacher: "อ.วิชัย" },
  ];

  // Challenge 2: สร้าง Comment Section
  const comments = [
    {
      id: 1,
      author: "สมชาย",
      message: "React ยอดเยี่ยมมาก! 🚀",
      date: "2 ชั่วโมงที่แล้ว",
    },
    {
      id: 2,
      author: "สมหญิง",
      message: "เข้าใจง่าย ช่วยด้วย",
      date: "1 ชั่วโมงที่แล้ว",
    },
    {
      id: 3,
      author: "วิชัย",
      message: "Props ยังต้องอธิบายเพิ่มเติมหน่อย",
      date: "30 นาทีที่แล้ว",
    },
  ];

  return (
    <div>
      <Header />
      <MainContent />

      <section style={{ padding: "20px" }}>
        <h2>👥 ข้อมูลผู้ใช้</h2>
        <Greeting name="สมชาย" age={25} />
        <Greeting name="สมหญิง" age={23} />
        <Greeting name="วิชัย" age={24} />
      </section>

      <section style={{ padding: "20px" }}>
        <h2>🛍️ สินค้า</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <ProductCard productName="Laptop" price="35000" inStock={true} />
          <ProductCard productName="Mouse" price="500" inStock={true} />
          <ProductCard productName="Monitor" price="8000" inStock={false} />
        </div>
      </section>

      {/* รายชื่อนิสิต */}
      <section style={{ padding: "20px" }}>
        <h2>📋 รายชื่อนิสิต</h2>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr style={{ backgroundColor: "#0066cc", color: "white" }}>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                ลำดับ
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                ชื่อ
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                คะแนน
              </th>
              <th style={{ padding: "10px", border: "1px solid #ddd" }}>
                เกรด
              </th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <StudentCard
                key={student.id}
                id={student.id}
                name={student.name}
                score={student.score}
                grade={student.grade}
              />
            ))}
          </tbody>
        </table>
      </section>
      <FruitList />

      {/* Challenge 1: สร้าง CourseCard Component */}
      <section style={{ padding: "20px" }}>
        <h2>📚 รายวิชา</h2>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {courses.map((course) => (
            <CourseCard
              key={course.code}
              code={course.code}
              name={course.name}
              credits={course.credits}
              teacher={course.teacher}
            />
          ))}
        </div>
      </section>

      {/* Challenge 2: สร้าง Comment Section */}
      <section style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
        <h2>💬 ความเห็น</h2>
        {comments.map((comment) => (
          <CommentCard
            key={comment.id}
            author={comment.author}
            message={comment.message}
            date={comment.date}
          />
        ))}
      </section>

      <Footer />
    </div>
  );
}
