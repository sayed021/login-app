import react, { useState } from 'react';
import { Button, ButtonPrimary, ButtonPrimaryRounded } from "../components/atoms/Buttons";
import { H1, H2, H3, H4, H5, H6 } from "../components/atoms/Headings";
import { Input, Label } from "../components/atoms/FormControls";
import { FormGroup } from "../components/molecules";

const TestPage = props => {
    const [_lightTheme, setLightTheme ] = useState(true);
    return (
        <>      
      <H1>This is first heading</H1>
      <H2>This is first heading</H2>
      <H3>This is first heading</H3>
      <H4>This is first heading</H4>
      <H5>This is first heading</H5>
      <H6>This is first heading</H6>

      <FormGroup>
        <Label>Default input</Label>
        <Input type="text" placeholder="default input" />
      </FormGroup>
      
      <FormGroup>
        <Label>Warning input</Label>
        <Input warning type="text" placeholder="warning input" />
      </FormGroup>

      <FormGroup>
        <Label>Error input</Label>
        <Input error type="text" placeholder="error input" />
      </FormGroup>

      <FormGroup>
        <Label>Disabled input</Label>
        <Input type="text" disabled  placeholder="disabled input" />
      </FormGroup>

      <FormGroup>
        <Label>Readonly input</Label>
        <Input type="text" readOnly placeholder="Read only input" />
      </FormGroup>

      <Button className='myclass' onClick={()=>alert('hello')}>
        this is button
      </Button>
      
      <Button>
        button primary
      </Button>

      <ButtonPrimary className='myclass' onClick={()=>alert('hello')}>
        button primary
      </ButtonPrimary>

      <ButtonPrimaryRounded className='myclass' onClick={()=>alert('hello')}>
        Button <pre><code>ButtonPrimaryRounded</code></pre>
      </ButtonPrimaryRounded>
      </>
    )
}


export default TestPage;