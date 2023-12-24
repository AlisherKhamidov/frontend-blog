import React, { useEffect, useState } from "react"

export default function Check() {
  const [greeting, setGreeting] = useState("")
  useEffect(() => {
    fetch("/api/greeting")
      .then((data) => data.json())
      .then((json) => {
        setGreeting(json.greeting)
      })
      .catch((err) => {
        console.log("Error fetching greeting:", err)
      })
  }, [])
  return <div>Компонент и приветствие: {greeting}</div>
}
