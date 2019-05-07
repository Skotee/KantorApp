export default ({ username, email, verificationCode, serverURL }) => {
  return `
  <html>
    <body>
      <h1>Hello, ${username}</h1> <br />
      <p>Verify your email by&nbsp;</p>
      <a href="${serverURL}/verifyEmail/${verificationCode}">clicking here</a>
      <p>This message was sent because someone created account on email: ${email}</p>
    </body>
  </html>
  `
}
