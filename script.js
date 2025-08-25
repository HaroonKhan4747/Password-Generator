/* General Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Segoe UI", Arial, sans-serif;
  background-color: #f9fbfd;
  color: #333;
  line-height: 1.6;
}

/* Header */
header {
  background: linear-gradient(90deg, #007bff, #0056d2);
  color: #fff;
  text-align: center;
  padding: 2rem 1rem;
}

header h1 {
  font-size: 2.5rem;
  font-weight: bold;
}

header p {
  font-size: 1.1rem;
  margin-top: 0.5rem;
}

/* Main Layout */
.container {
  width: 90%;
  max-width: 900px;
  margin: 2rem auto;
}

.generator-box,
.results-box {
  background: #fff;
  padding: 2rem;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  margin-bottom: 2rem;
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #0056d2;
}

/* Form Styles */
.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

input, select {
  width: 100%;
  padding: 0.75rem;
  border: 1px solid #ddd;
  border-radius: 8px;
  font-size: 1rem;
}

button {
  background: #007bff;
  color: #fff;
  border: none;
  padding: 0.9rem 1.5rem;
  border-radius: 10px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
  width: 100%;
  font-weight: bold;
}

button:hover {
  background: #0056d2;
}

/* Results */
.results-box ul {
  list-style: none;
}

.results-box li {
  background: #f1f5ff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  margin: 0.5rem 0;
  font-weight: 500;
  border: 1px solid #cfe2ff;
}

/* Footer */
footer {
  background: #f1f5ff;
  padding: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

footer nav a {
  color: #0056d2;
  text-decoration: none;
  margin: 0 0.5rem;
}

footer nav a:hover {
  text-decoration: underline;
}
