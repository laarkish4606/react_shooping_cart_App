
import img from "../assets/am.jpg"
const AboutMe=()=>{
    return(
        <div className="about">
            <h1>🧩 About Me</h1>
            <div className="abou-text">
                <img src={img} alt="Profile"className="image" />
                    <div className="about-p">
                <p>
                    I’m a passionate web Developer and Software Engineer with a deep commitment to building elegant, high-performance, and user-centric digital experiences.
                     My expertise lies in crafting scalable cross-platform mobile applications using Flutter, backed by a strong foundation in JavaScript,React and Node.js.

                    I take pride in turning complex challenges into simple, beautiful, and intuitive solutions — from responsive UI design to seamless backend integration.
                   Beyond development, I value clean architecture, code reusability, and performance optimization, ensuring that every product I build is robust, maintainable, and future-ready.
                 I’m continuously exploring modern technologies and best practices to stay ahead in a rapidly evolving industry. Whether working independently or in a collaborative environment, I bring creativity, precision, and strong problem-solving skills to every project I contribute to.
                </p>
                </div>
            </div>
          
        </div>
    )
}
export default  AboutMe;