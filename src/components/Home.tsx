import { Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <div>Home</div>
      <Button>contained default</Button>
      <Button variant="text">Text Button</Button>

      <Button color="secondary">Text Button</Button>
      <Button variant="text" color="secondary">Text Button</Button>

      <Button color="secondary">Text Button</Button>
      <Button variant="text" color="secondary">Text Button</Button>
    </div>
  )
}
