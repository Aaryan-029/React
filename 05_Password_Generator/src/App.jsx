import { useState , useCallback,useEffect,useRef} from 'react'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [password,setPassword] = useState('')
  const passwordRef = useRef(null)

const passwordGenerator = useCallback(()=>{
  let pass = ''
  let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
  if(numberAllowed){
    str+='0123456789'
  }
  if(charAllowed){
    str+="!@#$%^&*_-+=[]{}~``"
  }

  for (let i = 1; i <= length; i++) {
    let char = (Math.random()*str.length+1)
    pass += str.charAt(char)  
  }

  setPassword(pass)
},[length,numberAllowed,charAllowed,setPassword])

const copyPasswordToKeyboard = useCallback(()=>{
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passwordGenerator()
},[length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
        <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>
    <div className="flex shadow rounded-lg overflow-hidden mb-4 my-3">
        <input
            type="text"
             value={password}
            className="outline-none w-full py-1 px-3"
            placeholder="Password"
            readOnly
           ref={passwordRef}
        />
        <button
        onClick={copyPasswordToKeyboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
        >Copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input
            type='range'
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setlength(e.target.value)}}
            />
        <lable>Lenght:{length}</lable>
      </div>

      <div className="flex items-center gap-x-1">
      <input
          type="checkbox"
          defaultChecked={numberAllowed}
          id="numberInput"
          onChange={() => {
              setNumberAllowed((prev) => !prev);
          }}
      />
      <lable htmlFor='numberInput'>Number</lable>
      </div>


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
    </>
  )
}

export default App
