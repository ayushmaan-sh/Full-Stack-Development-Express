import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  // State variables to manage password generation options
  const [length, setLength] = useState(8) // Password length
  const [numberAllowed, setNumberAllowed] = useState(false); // Toggle for including numbers
  const [charAllowed, setCharAllowed] = useState(false) // Toggle for including special characters
  const [password, setPassword] = useState("") // Generated password

  const passwordRef = useRef(null)

  // Function to generate a random password
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // Base string for password
    
    // Append numbers to the base string if numberAllowed is true
    if (numberAllowed) str += "0123456789"
    
    // Append special characters to the base string if charAllowed is true
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    // Generate password of specified length
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    // Update password state
    setPassword(pass)
  }, [length, numberAllowed, charAllowed, setPassword])

  // Function to copy generated password to clipboard
const copyPasswordToClipboard = useCallback(() => {

  // Select the password input field
  passwordRef.current?.select();

  // Set selection range to select all text in the input field
  passwordRef.current?.setSelectionRange(0, 999);
  window.navigator.clipboard.writeText(password)
}, [password])


  // Effect to generate password when component mounts or dependencies change
  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>

      {/* Password input field and copy button */}
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
        />
        <button
          onClick={copyPasswordToClipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >copy</button>
      </div>
      
      {/* Password length slider */}
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length: {length}</label>
        </div>

        {/* Checkbox to include numbers */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>

        {/* Checkbox to include special characters */}
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev )
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  )
}

export default App
