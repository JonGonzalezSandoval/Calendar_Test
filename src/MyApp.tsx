import { useEffect, useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

function MyApp() {
  const [value, onChange] = useState<Value>(new Date());

  useEffect(()=> {
    console.log(value)
  },[value, onChange])

  return (
    <div>
      <Calendar onChange={onChange} value={value} />
    </div>
  );
}

export default MyApp;