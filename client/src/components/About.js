import React, { Component } from 'react';
import '../style/about.css';

class About extends Component {

  render() {

    return (
      <div>
  
      {/* <section id="newsletter">
        <div class="container">
          <h1>Subscribe To Our Newsletter</h1>
          <form>
            <input type="email" placeholder="Enter Email...">
            <button type="submit" class="button_1">Subscribe</button>
          </form>
        </div>
      </section> */}
  
  <section id="main">
      <div class="container">
        <article id="main-col">
          <h1 class="page-title">About Us</h1>
          <p>
          In 1983 Bjarne Stroustrup developed C++, which is much like C, but with a number of important extensions. C++ has been described as "one of the most important programming languages of the 1990s and promises to continue strongly into the 2000s" (Prata 1). As a computer programmer, I have had opportunities to work with this language to write system software. I have found many interesting things about this language: it has certain characteristics over other languages. The most remarkable are: portability, brevity, C compatibility, object-oriented programming and speed.
          </p>
          <p class="dark">
          A program is a sequence of instructions that tells the hardware of a computer what operations to perform on data. Programs can be built into the hardware itself, or they may exist independently in a form known as software. In some specialized, or "dedicated," computers the operating instructions are embedded in their circuitry; common examples are the microcomputers found in calculators, wristwatches, automobile engines, and microwave ovens. A general-pur pose computer, on the other hand, contains some built-in programs (in ROM) or instructions (in the processor chip), but it depends on external programs to perform useful tasks. Once a computer has been programmed, it can do only as much or as little as the software controlling it at any given moment enables it to do. Software in widespread use includes a wide range of applications programs-instructions to the computer on how to perform various tasks.
          </p>
          <p>
          Computer programming can as well be defined as a process that leads from an original formulation of a computer problem to execute problems. Computer programming is also referred to as programming. It encompasses other activities such as understanding, analysis and generally solving problems that result in algorithm, verifying the algorithm requirements and coding algorithm in a target program language. The program also involves the implementation of the build system and managing derived artifacts like computer programs machine codes. Most often, the algorithm is represented in human-parseable languages such as Java, Python, Smalltalk among others.
          </p><br/>
          <div>
              <div class="lef">
                <img src="./dp.jpg" alt="hi" id="imgdiscp"></img>
              </div>
              <div class="righ">
                <div class="container">
                    <h4>Lal Bihari Pandey</h4>
                    <h5>Student at JMI(Jamia Millia Islamia) B.Tech(CSE)- 1st year</h5>
                </div>
              </div>
          </div>
        </article>

        <aside id="sidebar">
          <div class="dark">
            <h3>What We Do</h3>
            <p>
              We make online vedios and lectures on c++ language. Content is very straight and with deeply and thouroughly explained.
            </p>
          </div>
          <a href="https://www.youtube.com/channel/UCk7ipmu-_OWZGNvA3YSaPVA"><button class="button">Suscribe</button></a>
        </aside>
      </div>
    </section>

    </div>
    )
    
}
}


export default About;
