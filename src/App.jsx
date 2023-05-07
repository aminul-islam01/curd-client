import './App.css'

function App() {
  const handleAddUser = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = {name, email};

    fetch('http://localhost:5000/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(user),
    })
    .then(res => res.json())
    .then(data => {
      // console.log(data)
      if(data.acknowledged) {
        alert('user added successfully');
        form.reset();
      }
    })
  }

  return (
    <>
      <h1>Add user to database</h1>
     <form onSubmit={handleAddUser}>
      <input type="text" name="name" id="" placeholder='enter your name' required/><br />
      <input type="email" name="email" id="" placeholder='enter your email' required/><br />
      <input type="submit" value="Add user" />
     </form>
    </>
  )
}

export default App
