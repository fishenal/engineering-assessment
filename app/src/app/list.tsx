'use client'
import { useEffect, useState } from 'react'
import axios from 'axios'

export default function List() {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    axios.get('api/facility-list').then((res) => {
      if (res && res.status === 200 && res?.data?.length > 0) {
        setList(res.data);
      }
    })
  }, [])

  const colTitles = ['Applicant', 'Address', 'FacilityType', 'FoodItems']
  return (
    <table>
        <tr>
            {
                colTitles.map((h) => <th key={h}>{h}</th>)
            }
        </tr>
        {
            list.map((item) => {
                const nodes = colTitles.map((k) => <td key={item[k]}>{item[k]}</td>);
                return <tr key={item.locationid}>{nodes}</tr>
            })
        }
    </table>
  )
}