var findElement = document.getElementById.bind(document);

function expandDong() {
  findElement("main").innerHTML = `
    <h1 style="font-family:verdana">femboys.tv</h1>
    <p style="font-family:'Courier New'; margin-bottom:0;">made to fuck with your head</p>
    <p style="font-family:'Courier New'; margin:0; padding-top:5px; color: #555">a scrumptious web project from your neighbourhood haxor</p>
  `;
}
