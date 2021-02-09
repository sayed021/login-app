import { Button } from "./components/atoms/Buttons";
import { H1, H2, H3, H4, H5, H6 } from "./components/atoms/Headings";


function App() {
  return (
    <div className="App">
      <H1>This is first heading</H1>
      <H2>This is first heading</H2>
      <H3>This is first heading</H3>
      <H4>This is first heading</H4>
      <H5>This is first heading</H5>
      <H6>This is first heading</H6>
      <Button className='myclass' onClick={()=>alert('hello')}>
        this is button
      </Button>
      <Button primary className='myclass' onClick={()=>alert('hello')}>
        button 2
      </Button>
    </div>
  );
}

export default App;
