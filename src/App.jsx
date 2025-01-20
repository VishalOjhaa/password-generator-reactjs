import React, { useEffect, useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [specialChar, setSpecialChar] = useState(true);
  const [length, setLength] = useState(6);

  // Toggle special characters
  const handleSpecialCase = () => {
    setSpecialChar(!specialChar);
  };

  // Update password length
  const handleLength = (val) => {
    setLength(val);
  };

  // Generate the password
  const generatePassword = () => {
    const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz".split("");
    const numbers = "0123456789".split("");
    const specialCharacters = "!@#$%^&*()_-+={}[]:;\"'<>,.?/\\|~`".split("");

    // Combine character sets based on the condition
    const finalArr = specialChar
      ? [...uppercaseLetters, ...lowercaseLetters, ...numbers, ...specialCharacters]
      : [...uppercaseLetters, ...lowercaseLetters, ...numbers];

    let pass = "";
    for (let i = 0; i < length; i++) {
      const randIndex = Math.floor(Math.random() * finalArr.length);
      pass += finalArr[randIndex];
    }

    setPassword(pass);
  };

  // Regenerate the password whenever length or specialChar changes
  useEffect(() => {
    generatePassword();
  }, [length, specialChar]);

  return (
    <div className="h-screen bg-slate-900 text-white">
      <h1 className="text-6xl p-5 text-center text-red-500">Password Generator</h1>

      <div className="inputarea text-3xl flex flex-col w-[50vw] mt-10 m-auto">
        <label htmlFor="Length">Length: {length}</label>
        <input
          onChange={(e) => handleLength(e.target.value)}
          type="range"
          min="6"
          max="20"
          value={length}
          className="mt-2"
        />
        <br />
        <span>
          <label htmlFor="specialchar">
            Allow Special Characters: {specialChar ? "Yes" : "No"}
          </label>
          <input
            onChange={handleSpecialCase}
            type="checkbox"
            checked={specialChar}
            className="ml-2"
          />
        </span>
        <br />
      </div>

      <div className="inputarea text-3xl flex flex-col w-[50vw] m-auto">
        <span>Password: <strong>{password}</strong></span>
      </div>
    </div>
  );
}

export default App;
