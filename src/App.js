import { GoBell, GoCloudDownload, GoDatabase } from 'react-icons/go';
import Button from './components/Button';

function App() {
  const handleClick = () => {
    console.log('Click!!');
  };

  return (
    <div>
      <div>
        <Button secondary rounded outline onClick={handleClick}>
          <GoBell />
          Click me!
        </Button>
      </div>
      <div>
        <Button danger outline>
          <GoCloudDownload />
          Buy now!
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          See deal!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Hide ads!
        </Button>
      </div>
      <div>
        <Button primary rounded>
          Something!
        </Button>
      </div>
    </div>
  );
}

export default App;
