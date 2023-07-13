const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My 1st Assignment</title></head>");
    res.write("<body><h1>Hello!!</h1>");
    res.write(
      "<form action='/createuser' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );

    res.write("</html>");
    return res.end();
  }

  if (url === "/users") {
    res.setHeader("Content-type", "text/html");
    res.write("<html>");
    res.write("<head><title>My 1st Assignment</title></head>");
    res.write("<body><ul><li>User1</li><li>User2</li></ul></body>");
    res.write("</html>");
  }

  if (url === "/createuser") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedbody = Buffer.concat(body).toString();
      const message = parsedbody.split("=")[1];
      console.log(message);
    });
    res.statusCode = 302;
    res.setHeader("Location", "/");

    return res.end();
  }
};

module.exports = {
  handler: requestHandler,
};
