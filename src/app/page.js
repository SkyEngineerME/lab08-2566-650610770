import { Header } from "@/component/Header";
import { TaskInput } from "@/component/TaskInput";
import { Task } from "@/component/Task";
import { Footer } from "@/component/Footer";

export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      <Header></Header>

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        <TaskInput></TaskInput>
        <Task props="Read a book"></Task>
        <Task props="Take a shower"></Task>
        <Task props="Slepp"></Task>
      </div>

      <Footer
        year="2023"
        fullname="Thanathorn Taewattanapanit"
        studentId="650610770"
      ></Footer>
    </div>
  );
}
