import { Button } from "./components/Button/Button";
import { ButtonPreview } from "./components/ButtonPreview/ButtonPreview";
import type { Component } from "solid-js";

const App: Component = () => {
  return (
    <div class="App">
      <h1>Button Component</h1>

      <div class="buttons-grid">
        <ButtonPreview title="<Button color='default'/>">
          <Button color="default">Default</Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='default' variant='outline' disabled endIcon='do_not_disturb_on' />">
          <Button
            endIcon="do_not_disturb_on"
            color="default"
            variant="outline"
            disabled
          >
            Default
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='default' variant='text'/>">
          <Button color="default" variant="text">
            Default
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='default' variant='outline'/>">
          <Button color="default" variant="outline">
            Default
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='default' variant='outline'  startIcon='do_not_disturb_off' />">
          <Button
            startIcon="do_not_disturb_off"
            color="default"
            variant="outline"
          >
            Default
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='default' disabled/>">
          <Button color="default" disabled>
            Default
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='primary'/>">
          <Button color="primary">Primary</Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='primary' variant='outline' disabled endIcon='settings' />">
          <Button
            endIcon="settings "
            color="primary"
            variant="outline"
            disabled
          >
            Primary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='primary' variant='text'/>">
          <Button color="primary" variant="text">
            Primary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='primary' variant='outline'/>">
          <Button color="primary" variant="outline">
            Primary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='primary' variant='outline'  startIcon='logout' />">
          <Button startIcon="logout" color="primary" variant="outline">
            Primary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='primary' disabled/>">
          <Button color="primary" disabled>
            Primary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='secondary'/>">
          <Button color="secondary">Secondary</Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='secondary' variant='outline' disabled endIcon='settings' />">
          <Button
            endIcon="settings "
            color="secondary"
            variant="outline"
            disabled
          >
            Secondary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='secondary' variant='text'/>">
          <Button color="secondary" variant="text">
            Secondary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='secondary' variant='outline'/>">
          <Button color="secondary" variant="outline">
            Secondary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='secondary' variant='outline'  startIcon='logout' />">
          <Button startIcon="logout" color="secondary" variant="outline">
            Secondary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='secondary' disabled/>">
          <Button color="secondary" disabled>
            Secondary
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='danger'/>">
          <Button color="danger">Danger</Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='danger' variant='outline' disabled endIcon='delete' />">
          <Button endIcon="delete" color="danger" variant="outline" disabled>
            Danger
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='danger' variant='text'/>">
          <Button color="danger" variant="text">
            Danger
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='danger' variant='outline'/>">
          <Button color="danger" variant="outline">
            Danger
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='danger' variant='outline'  startIcon='delete' />">
          <Button startIcon="delete" color="danger" variant="outline">
            Danger
          </Button>
        </ButtonPreview>

        <ButtonPreview title="<Button color='danger' disabled/>">
          <Button color="danger" disabled>
            Danger
          </Button>
        </ButtonPreview>
      </div>
    </div>
  );
};

export default App;
