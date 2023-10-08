export const courseData = [
  
  {
    section: "HTML",
    title: "Lesson 1: Introduction to HTML",
    content:
      "<p>Welcome to the first lesson in our Frontend Development module! Today, we're going to cover what frontend development is and its role in the software development lifecycle.</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 1:Defining Frontend Development",
    content:
      "<p>Frontend development is all about creating the parts of the website or web application that users directly interact with. This is the face of your website—the buttons users click on, the text they read, the images they see, and so on.</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 1:Role in the Software Development Lifecycle",
    content:
      "<p>In the context of the SDLC, frontend development typically comes after requirement analysis and design phases. It's here that the visual elements decided upon in the design phase are implemented.</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 1:Frontend vs Backend Development",
    content:
      "<p>While frontend development governs everything that happens on the client-side, backend development is all about the server. The backend is where databases live, and it's where data processing happens.<br>Example 1: Consider a site like Facebook. Everything you see—profiles, photos, status updates—is the work of frontend development<br>Example 2: Now, when you 'like' a status update, that 'like' is recorded in a database on the server, which is the work of backend development.</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 1:Languages and Technologies",
    content:
      "<p>HTML, CSS, and JavaScript are the holy trinity of frontend development.</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 1:Real-world Applications of Frontend Development",
    content:
      "<p>Every website you visit or web application you use is a testament to the work of frontend developers.</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 2:Introduction",
    content:
      "<p>Welcome back! Today, we are diving into the building blocks of frontend development: HTML, CSS, and JavaScript.</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 2:Brief History",
    content:
      "<p>HTML was created in the late 1980s, but it didn't get traction until the early '90s. CSS followed in 1996, and JavaScript was introduced in 1995. Over time, these technologies have undergone numerous updates, adapting to the changing needs of the web..</p>",
    type: "text",
  },
  {
    section: "HTML",
    title: "Lesson 2:Overview of HTML",
    content: `HTML, or HyperText Markup Language, is the standard markup language for creating web pages. It structures your web content. <br><br>Example 1: Display a simple HTML page containing a header, a couple of paragraphs, and an image. ('<html>, <head>, <body>, <h1>, <p>, <img>).`,
    type: "exercise",
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>Simple HTML Page</title>
</head>
<body>

  <h1>My Simple Page</h1>
  
  <p>This is a paragraph.</p>
  <p>Here's another paragraph.</p>
  
  <img src="https://firebasestorage.googleapis.com/v0/b/orralearnsocial.appspot.com/o/07NzlIqNMUMEoQrHXgrDMysIuQv1%2Fdefaultprofile%252Fprofile%2520picture.png%3Falt%3Dmedia%26token%3D9764627a-a0bc-4e8b-b275-4312d494a0e2?alt=media&token=edfee983-d7c3-43a5-9c8a-b31b7343d7cb&_gl=1*djef1j*_ga*MTIwNzkyMzIxMC4xNjk1ODE4MjE2*_ga_CW55HF8NVT*MTY5Njc1ODI0Ny4zMi4xLjE2OTY3NTgyNjAuNDcuMC4w" alt="An example image" width="300" height="200">

</body>
</html>
`,
  },
  {
    title: "Lesson 2:Overview of CSS",
    content:
      "<p>CSS, or Cascading Style Sheets, is a stylesheet language used for describing the presentation of a document written in HTML. It controls your layout and looks.<br><br>Example 2: Add some basic styles to the HTML page from Example 1. Show how to change font styles, colors, and add a background.</p>",
    type: "exercise",
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>Styled HTML Page</title>
</head>
<body style="background-color: #f2f2f2; font-family: Arial, sans-serif;">

  <h1 style="color: #4CAF50; text-align: center;">My Styled Page</h1>
  
  <p style="font-size: 18px; line-height: 1.6;">This is a paragraph.</p>
  <p style="font-size: 18px; line-height: 1.6; color: #555555;">Here's another paragraph.</p>
  
  <img src="https://firebasestorage.googleapis.com/v0/b/orralearnsocial.appspot.com/o/07NzlIqNMUMEoQrHXgrDMysIuQv1%2Fdefaultprofile%252Fprofile%2520picture.png%3Falt%3Dmedia%26token%3D9764627a-a0bc-4e8b-b275-4312d494a0e2?alt=media&token=edfee983-d7c3-43a5-9c8a-b31b7343d7cb&_gl=1*djef1j*_ga*MTIwNzkyMzIxMC4xNjk1ODE4MjE2*_ga_CW55HF8NVT*MTY5Njc1ODI0Ny4zMi4xLjE2OTY3NTgyNjAuNDcuMC4w" alt="An example image" width="300" height="200" style="border: 4px solid black;">

</body>
</html>
`,
    section: "HTML",
  },
  {
    title: "Lesson 2: Overview of JavaScript",
    section: "HTML",
    content:
      "<p>JavaScript is a high-level, interpreted programming language that enables interactive web pages. It brings your site to life.<br><br>Example 3: Add a button to the HTML page that, when clicked, changes the text of a paragraph. Show how to use JavaScript to capture the button click event and modify the DOM.</p>",
    type: "exercise",
    initialCode: `<!DOCTYPE html>
<html>
<head>
  <title>Interactive HTML Page</title>
  <script>
    function changeText() {
      document.getElementById('myParagraph').innerText = 'The text has been changed!';
    }
  </script>
</head>
<body style="background-color: #f2f2f2; font-family: Arial, sans-serif;">

  <h1 style="color: #4CAF50; text-align: center;">My Interactive Page</h1>
  
  <p id="myParagraph" style="font-size: 18px; line-height: 1.6;">This is a paragraph.</p>
  <p style="font-size: 18px; line-height: 1.6; color: #555555;">Here's another paragraph.</p>
  
  <button onclick="changeText()">Change Text</button>
  
  <img src="https://firebasestorage.googleapis.com/v0/b/orralearnsocial.appspot.com/o/07NzlIqNMUMEoQrHXgrDMysIuQv1%2Fdefaultprofile%252Fprofile%2520picture.png%3Falt%3Dmedia%26token%3D9764627a-a0bc-4e8b-b275-4312d494a0e2?alt=media&token=edfee983-d7c3-43a5-9c8a-b31b7343d7cb&_gl=1*djef1j*_ga*MTIwNzkyMzIxMC4xNjk1ODE4MjE2*_ga_CW55HF8NVT*MTY5Njc1ODI0Ny4zMi4xLjE2OTY3NTgyNjAuNDcuMC4w" alt="An example image" width="300" height="200" style="border: 4px solid black;">

</body>
</html>
`,
  },
  {
    title: "Lesson 2: The Holy Trinity: HTML, CSS, JavaScript",
    section: "HTML",
    content:
      "<div style=''>HTML is for content, CSS is for presentation, and JavaScript is for behavior. Together, they make up the cornerstone technologies for web development.<br><br><span style='font-weight:bold'>Exercise:</span> Create a project where HTML structures the content, CSS styles it, and JavaScript adds interactive features like a dropdown menu. You are allowed to make use of any resource in order to achieve this result</div>",
    type: "exercise",
    initialCode: "<!-- Write your HTML code here -->",
  },
  {
    section: "CSS",
    title: "Lesson 2: Basic CSS",
    content: "<p>Learn about basic CSS properties...</p>",
    type: "text-code",
  },
  {
    section: "JavaScript",
    title: "Lesson 3: JavaScript Variables",
    content: "<p>What are variables in JavaScript?</p>",
    type: "exercise",
    exerciseInitialCode: "// Declare a variable here",
  },
];
